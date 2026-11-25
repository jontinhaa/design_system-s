let embed=document.getElementById("awwwards-embed"),ribbonAppearance=embed.getAttribute("data-appearance"),ribbonColor=embed.getAttribute("data-color"),ribbonType=embed.getAttribute("data-type"),ribbonCategory=embed.getAttribute("data-category"),ribbonDate=embed.getAttribute("data-date"),ribbonLink=embed.getAttribute("data-link"),ribbonSizeLg=196,ribbonSizeSm=138,ribbonMarginBottom=12,ribbonTxtTitle="Nominee",ribbonWidth,ribbonHeight,iframeWidth,iframeHeight,ribbonBg,iframe=(ribbonDate=ribbonDate.replace(" ","<br>"),1==ribbonType&&(ribbonTxtTitle="Winner"),embed.style.position="fixed",embed.style.zIndex="999","vertical"==ribbonAppearance?(ribbonWidth=ribbonSizeSm,ribbonHeight=ribbonSizeLg,iframeWidth=ribbonWidth,iframeHeight=(iframeHeight=ribbonHeight)+ribbonMarginBottom,ribbonBg='<svg class="awwwards-ribbon__bg" viewBox="0 0 138 196" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.53694 192.987C8.28574 191.69 10.1577 191.69 10.9065 192.987L12.1844 195.2L23.2809 195.2L24.5588 192.987C25.3076 191.69 27.1796 191.69 27.9284 192.987L29.2063 195.2L40.3027 195.2L41.5807 192.987C42.3295 191.69 44.2014 191.69 44.9502 192.987L46.2282 195.2L57.3246 195.2L58.6026 192.987C59.3513 191.69 61.2233 191.69 61.9721 192.987L63.2501 195.2L74.3465 195.2L75.6244 192.987C76.3732 191.69 78.2452 191.69 78.994 192.987L80.2719 195.2L91.3684 195.2L92.6463 192.987C93.3951 191.69 95.2671 191.69 96.0159 192.987L97.2938 195.2L108.393 195.2L109.671 192.987C110.42 191.69 112.292 191.69 113.041 192.987L114.319 195.2L125.415 195.2L126.693 192.987C127.442 191.69 129.314 191.69 130.063 192.987L131.341 195.2L137.6 195.2L137.6 0.000213623L9.33589e-05 0.000201594L7.62939e-05 195.2L6.25899 195.2L7.53694 192.987Z" fill="#EAEAEA"/></svg>',embed.style.bottom="0",embed.style.right="5%"):(ribbonWidth=ribbonSizeLg,ribbonHeight=ribbonSizeSm,iframeHeight=ribbonHeight,iframeWidth=ribbonWidth+ribbonMarginBottom,ribbonBg='<svg class="awwwards-ribbon__bg" viewBox="0 0 196 138" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M192.987 130.063C191.69 129.314 191.69 127.442 192.987 126.694L195.2 125.416L195.2 114.319L192.987 113.041C191.69 112.292 191.69 110.421 192.987 109.672L195.2 108.394L195.2 97.2974L192.987 96.0194C191.69 95.2706 191.69 93.3987 192.987 92.6499L195.2 91.3719L195.2 80.2755L192.987 78.9975C191.69 78.2487 191.69 76.3768 192.987 75.628L195.2 74.35L195.2 63.2536L192.987 61.9757C191.69 61.2269 191.69 59.3549 192.987 58.6061L195.2 57.3282L195.2 46.2317L192.987 44.9538C191.69 44.205 191.69 42.333 192.987 41.5842L195.2 40.3063L195.2 29.2067L192.987 27.9288C191.69 27.18 191.69 25.308 192.987 24.5592L195.2 23.2813L195.2 12.1849L192.987 10.9069C191.69 10.1581 191.69 8.28615 192.987 7.53736L195.2 6.25941L195.2 0L0.000213623 -8.53246e-06L0.000207608 137.6L195.2 137.6L195.2 131.341L192.987 130.063Z" fill="#EAEAEA"/></svg>',embed.style.top="20%",embed.style.right="0"),embed.querySelector("p").style.display="none",document.createElement("iframe")),iframeDocument=(iframe.style.display="block",iframe.setAttribute("width",iframeWidth),iframe.setAttribute("height",iframeHeight),iframe.style.border="none",embed.appendChild(iframe),iframe.contentDocument||iframe.contentWindow.document),headIframe=iframeDocument.head||iframeDocument.getElementsByTagName("head")[0],bodyIframe=iframeDocument.body,link_font=(bodyIframe.style.margin="0",bodyIframe.style.padding="0",bodyIframe.style.overflow="hidden",document.createElement("link")),style=(link_font.href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:0,300&display=swap",link_font.rel="stylesheet",iframeDocument.createElement("style")),ribbon_container=(style.innerHTML=`
.awwwards-ribbon {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 300;
    line-height: 100%;
    opacity: 1;
    transition: all 0.6s;
}
.awwwards-ribbon__link {
    display: block;
    position: absolute;
    inset: 0;
}
.awwwards-ribbon__bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.awwwards-ribbon__bar {
    flex-shrink: 0;
}
.awwwards-ribbon__heading {
    font-size: 18px;
    transition: all 0.3s;
}
.awwwards-ribbon__title {
    flex: 1;
    font-size: 27px;
}
.awwwards-ribbon__category {
    font-size: 12px;
    line-height: 14px;
}
.awwwards-ribbon__date {
    position: absolute;
    font-size: 12px;
    line-height: 14px;
}

/* Vertical */

.awwwards-ribbon--vertical {
    display: flex;
    flex-direction: column;
    height: ${ribbonHeight}px;
    transform: translateY(140px);
}
.awwwards-ribbon--vertical:after {
    content: '';
    position: absolute;
    bottom: -${ribbonMarginBottom}px;
    left: 0;
    width: 100%;
    height: ${ribbonMarginBottom}px;
}
.awwwards-ribbon--vertical:hover {
    transform: translateY(0);
}
.awwwards-ribbon--vertical:hover .awwwards-ribbon__heading {
    opacity: 0;
}
.awwwards-ribbon--vertical:hover .awwwards-ribbon__date {
    opacity: 1;
}
.awwwards-ribbon--vertical .awwwards-ribbon__date {
    top: 28px;
    right: 12px;
    opacity: 0;
    transition: all 0.3s;
}
.awwwards-ribbon--vertical .awwwards-ribbon__bar {
    width: 100%;
    height: 10px;
    background: ${ribbonColor};
}
.awwwards-ribbon--vertical .awwwards-ribbon__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.awwwards-ribbon--vertical .awwwards-ribbon__content {
    flex: 1;
    display: flex;
    align-items: center;
}
.awwwards-ribbon--vertical .awwwards-ribbon__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 12px;
}

/* Horizontal */

.awwwards-ribbon--horizontal {
    display: flex;
    width: ${ribbonWidth}px;
    transform: translateX(140px);
}
.awwwards-ribbon--horizontal:after {
    content: '';
    position: absolute;
    right: -${ribbonMarginBottom}px;
    width: ${ribbonMarginBottom}px;
    height: 100%;
}
.awwwards-ribbon--horizontal:hover {
    transform: translateX(0);
}
.awwwards-ribbon--horizontal:hover .awwwards-ribbon__heading {
    opacity: 0;
}
.awwwards-ribbon--horizontal:hover .awwwards-ribbon__content,
.awwwards-ribbon--horizontal:hover .awwwards-ribbon__footer {
    opacity: 1;
}
.awwwards-ribbon--horizontal .awwwards-ribbon__date {
    top: 16px;
    right: 20px;
}
.awwwards-ribbon--horizontal .awwwards-ribbon__bar {
    width: 10px;
    height: 100%;
    background: ${ribbonColor};
}
.awwwards-ribbon--horizontal .awwwards-ribbon__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.awwwards-ribbon--horizontal .awwwards-ribbon__heading {
    position: absolute;
    bottom: 12px;
    left: 28px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
}
.awwwards-ribbon--horizontal .awwwards-ribbon__content {
    flex: 1;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: all 0.3s;
}
.awwwards-ribbon--horizontal .awwwards-ribbon__footer {
    opacity: 0;
    transition: all 0.3s;
}
.awwwards-ribbon--horizontal .awwwards-ribbon__container {
    display: flex;
    flex-direction: column;
    padding: 16px 12px 12px 16px;
}
`,headIframe.appendChild(style),headIframe.appendChild(link_font),iframeDocument.createElement("div"));ribbon_container.classList.add("awwwards-ribbon"),ribbon_container.classList.add("awwwards-ribbon--"+ribbonAppearance),ribbon_container.innerHTML=`
<div class="awwwards-ribbon__bar"></div>
<div class="awwwards-ribbon__container">
    <div class="awwwards-ribbon__header">
        <svg class="awwwards-ribbon__logo" width="24" height="14" viewBox="0 0 30 16"><path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path></svg>
        <div class="awwwards-ribbon__heading">${ribbonTxtTitle}</div>
    </div>
    <div class="awwwards-ribbon__content">
        <div class="awwwards-ribbon__title">${ribbonTxtTitle}</div>
    </div>
    <div class="awwwards-ribbon__footer">
        <div class="awwwards-ribbon__category">${ribbonCategory}<br>Honors</div>
    </div>
    <div class="awwwards-ribbon__date">${ribbonDate}</div>
</div>
${ribbonBg}
<a target="_blank" href="${ribbonLink}" class="awwwards-ribbon__link"></a>
`,bodyIframe.appendChild(ribbon_container);