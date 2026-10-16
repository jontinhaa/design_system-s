@echo off
rem Website Downloader 3.0 - abre o site capturado com o Service Worker de replay.
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 serve.py --open
) else (
  python serve.py --open
)
pause
