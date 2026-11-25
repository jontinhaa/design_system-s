#!/usr/bin/env python3
"""Servidor local da captura (Website Downloader 3.0).

Uso: python3 serve.py [--open] [--port N]

Serve esta pasta em http://<domínio-original>.localhost:<porta>/ (ex.: altitude101.com.localhost), que continua
sendo o próprio computador, mas mantém o nome do domínio visível para sites que checam location.hostname.
Cada captura usa uma porta própria, derivada do id da captura, para que o Service Worker de uma captura nunca
intercepte outra. Suporta Range (vídeos) e só escuta no loopback (127.0.0.1 e ::1).
Compatível com Python 3.8+ (o python3 que vem no macOS).
"""

import ipaddress
import json
import mimetypes
import os
import re
import socket
import sys
import threading
import webbrowser
import zlib
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlsplit

ROOT = os.path.dirname(os.path.abspath(__file__))
SW_PATH = "/site/_wd3/sw.js"
INDEX_PATH = "/site/_wd3/site-index.json"
NO_STORE = {SW_PATH, INDEX_PATH, "/index.html"}
ARCHIVE = {}  # caminho+query no domínio original → entrada do site-index.json
EXTRA_TYPES = {
    ".js": "text/javascript", ".mjs": "text/javascript", ".wasm": "application/wasm", ".json": "application/json",
    ".webp": "image/webp", ".avif": "image/avif", ".woff2": "font/woff2", ".woff": "font/woff",
    ".glb": "model/gltf-binary", ".gltf": "model/gltf+json", ".ktx2": "image/ktx2", ".mp4": "video/mp4",
    ".webm": "video/webm", ".m3u8": "application/vnd.apple.mpegurl", ".svg": "image/svg+xml",
}


def load_index():
    try:
        with open(os.path.join(ROOT, *INDEX_PATH.strip("/").split("/")), encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def build_archive(index):
    """Requisições que escapam do Service Worker (ex.: iframes about:blank/srcdoc no Chrome) chegam aqui:
    respondemos com o arquivo gravado do domínio original, pelo mesmo caminho."""
    entry = urlsplit((index.get("entry") or {}).get("url", ""))
    origin = "%s://%s" % (entry.scheme, entry.netloc)
    for e in index.get("entries", []):
        if e.get("method") != "GET" or not e.get("file") or not e["url"].startswith(origin + "/"):
            continue
        u = urlsplit(e["url"])
        ARCHIVE.setdefault(u.path + ("?" + u.query if u.query else ""), e)
        ARCHIVE.setdefault(u.path, e)


def default_port(capture_id):
    return 20000 + zlib.crc32(capture_id.encode("utf-8")) % 20000


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "wd3"

    def do_GET(self):
        self.serve(send_body=True)

    def do_HEAD(self):
        self.serve(send_body=False)

    def log_message(self, format, *args):  # noqa: A002 — assinatura da classe base
        pass

    def resolve(self):
        """Devolve (caminho, arquivo, content-type gravado ou None); arquivo None = 404."""
        parts = urlsplit(self.path)
        path = unquote(parts.path)
        full = os.path.normpath(os.path.join(ROOT, path.lstrip("/")))
        if (full == ROOT or full.startswith(ROOT + os.sep)) and os.path.isfile(full):
            return path, full, None
        dest = self.headers.get("Sec-Fetch-Dest")
        if dest in (None, "", "document", "iframe", "frame", "embed", "object"):
            # navegação antes do Service Worker assumir: cai no bootstrap
            return "/index.html", os.path.join(ROOT, "index.html"), None
        e = ARCHIVE.get(parts.path + ("?" + parts.query if parts.query else "")) or ARCHIVE.get(parts.path)
        if e:
            return path, os.path.join(ROOT, *e["file"].split("/")), e.get("contentType")
        return path, None, None

    def serve(self, send_body):
        path, full, recorded_type = self.resolve()
        if full is None or not os.path.isfile(full):
            self.send_response(404)
            self.send_header("Content-Length", "0")
            self.end_headers()
            return
        size = os.path.getsize(full)
        ext = os.path.splitext(full)[1].lower()
        ctype = recorded_type or EXTRA_TYPES.get(ext) or mimetypes.guess_type(full)[0] or "application/octet-stream"
        start, end, status = 0, size - 1, 200
        rng = self.headers.get("Range")
        if rng and size:
            m = re.match(r"bytes=(\d*)-(\d*)$", rng.strip())
            if m and (m.group(1) or m.group(2)):
                if m.group(1):
                    start = int(m.group(1))
                    end = min(int(m.group(2)), size - 1) if m.group(2) else size - 1
                else:
                    start = max(0, size - int(m.group(2)))
                if start > end or start >= size:
                    self.send_response(416)
                    self.send_header("Content-Range", "bytes */%d" % size)
                    self.send_header("Content-Length", "0")
                    self.end_headers()
                    return
                status = 206
        length = max(0, end - start + 1) if size else 0
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(length))
        self.send_header("Accept-Ranges", "bytes")
        if status == 206:
            self.send_header("Content-Range", "bytes %d-%d/%d" % (start, end, size))
        if path == SW_PATH:
            self.send_header("Service-Worker-Allowed", "/")  # o SW fica em site/_wd3/, mas controla o site todo
        self.send_header("Cache-Control", "no-store" if path in NO_STORE else "no-cache")
        self.end_headers()
        if not send_body or not length:
            return
        try:
            with open(full, "rb") as f:
                f.seek(start)
                remaining = length
                while remaining:
                    chunk = f.read(min(1 << 16, remaining))
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            pass


def port_free(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(("127.0.0.1", port))
            return True
        except OSError:
            return False


class Server6(ThreadingHTTPServer):
    address_family = socket.AF_INET6


def replay_host(entry_url):
    """<domínio>.localhost quando o site original tem nome de domínio; senão, localhost."""
    host = (urlsplit(entry_url).hostname or "").lower()
    try:
        ipaddress.ip_address(host)
        return "localhost"
    except ValueError:
        pass
    return host + ".localhost" if host and len(host) < 200 else "localhost"


def open_browser(url):
    """A captura é feita com o motor do Chrome: no Mac, abre no Google Chrome se estiver instalado."""
    chrome = "/Applications/Google Chrome.app"
    if sys.platform == "darwin" and os.path.isdir(chrome):
        if os.spawnlp(os.P_WAIT, "open", "open", "-a", chrome, url) == 0:
            return
    webbrowser.open(url)


def main():
    args = sys.argv[1:]
    index = load_index()
    build_archive(index)
    port = default_port(index.get("captureId", ROOT))
    if "--port" in args:
        port = int(args[args.index("--port") + 1])
    else:
        while not port_free(port):
            port += 1
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    try:  # macOS resolve *.localhost primeiro para ::1
        server6 = Server6(("::1", port), Handler)
        threading.Thread(target=server6.serve_forever, daemon=True).start()
    except OSError:
        pass
    entry = (index.get("entry") or {})
    url = "http://%s:%d%s" % (replay_host(entry.get("url", "")), port,
                              (entry.get("path") or "/") + (entry.get("search") or ""))
    print("Website Downloader 3.0", flush=True)
    print("Site capturado: %s" % entry.get("url", "?"), flush=True)
    print("Abrindo %s" % url, flush=True)
    print("Deixe esta janela aberta enquanto navega. Ctrl+C para encerrar.", flush=True)
    if "--open" in args:
        threading.Timer(0.4, lambda: open_browser(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
