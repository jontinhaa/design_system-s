document.addEventListener("DOMContentLoaded", (event) => {

  sessionStorage.setItem('barba-next-case-transition', 'false');

  const pageBody = document.body;

  windowCurrentWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    windowCurrentWidth = window.innerWidth;
  });


  const gsapDefaultDuration = 0.5;
  const gsapDefaultEase = 'power2.inOut'; // Curve: 0.42, 0, 0.58, 1
  const easeSlowStartFastEnd = 'cubic-bezier(0.2, 0, 0.1, 1)'; // slow start, fast end
  const easeFastStartSmoothEnd = 'cubic-bezier(0.75, 0, 0, 1)'; // sharp start, smooth finish
  const easeSharpStartSmoothFinish = 'cubic-bezier(0.75, 0, 0, 1)'; // sharp start, smooth finish
  const easeHeadings = 'cubic-bezier(0.75, 0, 0, 0.35)'; // sharp start, smooth finish

  const gsapMatchMedia = gsap.matchMedia();

  gsap.registerPlugin(Flip);

  gsap.defaults({
    duration: gsapDefaultDuration,
    ease: gsapDefaultEase
  });

  const gsapGetStyle = gsap.getProperty;

  function getCssVarValue(element, variable) {
    return getComputedStyle(element).getPropertyValue(variable).trim();
  }

  const rootFontSize = gsapGetStyle(document.documentElement, 'fontSize');



  
  /*----------  Preload loader images  ----------*/
  
  const loaderImages = document.querySelectorAll('#loader [data-loader-gallery*="image"]');
  const preloadLoaderImages = [];

  if (!sessionStorage.getItem('preload-loader-images')) {
    loaderImages.forEach((item) => {
        const imgSrc = item.getAttribute('src');
        if (imgSrc) {
            const img = new Image();
            img.src = imgSrc;
            preloadLoaderImages.push(img);
        }
    });
  
    sessionStorage.setItem('preload-loader-images', true);
  }


  /*=============================================
  =               Common functions              =
  =============================================*/

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  function stopOverscroll(element) {
    element = gsap.utils.toArray(element)[0] || window;
    (element === document.body || element === document.documentElement) &&
      (element = window);
    let lastScroll = 0,
      lastTouch,
      forcing,
      forward = true,
      isRoot = element === window,
      scroller = isRoot ? document.scrollingElement : element,
      ua = window.navigator.userAgent + "",
      getMax = isRoot
        ? () => scroller.scrollHeight - window.innerHeight
        : () => scroller.scrollHeight - scroller.clientHeight,
      addListener = (type, func) =>
        element.addEventListener(type, func, { passive: false }),
      revert = () => {
        scroller.style.overflowY = 'auto';
        forcing = false;
      },
      kill = () => {
        forcing = true;
        scroller.style.overflowY = 'hidden';
        !forward && scroller.scrollTop < 1
          ? (scroller.scrollTop = 1)
          : (scroller.scrollTop = getMax() - 1);
        setTimeout(revert, 1);
      },
      handleTouch = (e) => {
        let evt = e.changedTouches ? e.changedTouches[0] : e,
          forward = evt.pageY <= lastTouch;
        if (
          ((!forward && scroller.scrollTop <= 1) ||
            (forward && scroller.scrollTop >= getMax() - 1)) &&
          e.type === 'touchmove'
        ) {
          e.preventDefault();
        } else {
          lastTouch = evt.pageY;
        }
      },
      handleScroll = (e) => {
        if (!forcing) {
          let scrollTop = scroller.scrollTop;
          forward = scrollTop > lastScroll;
          if (
            (!forward && scrollTop < 1) ||
            (forward && scrollTop >= getMax() - 1)
          ) {
            e.preventDefault();
            kill();
          }
          lastScroll = scrollTop;
        }
      };
    if ('ontouchend' in document && !!ua.match(/Version\/[\d\.]+.*Safari/)) {
      addListener('scroll', handleScroll);
      addListener('touchstart', handleTouch);
      addListener('touchmove', handleTouch);
    }
    scroller.style.overscrollBehavior = 'none';
  }

  window.handleCursorMovement = function (
    wrapperElements,
    cursorSelector,
    buffer = [50, 100, 50, 100],
    findInsideWrapper = true
  ) {
    wrapperElements.forEach(wrapper => {
      const cursorElement = findInsideWrapper
        ? wrapper.querySelector(cursorSelector)
        : document.getElementById(cursorSelector.replace('#', ''));

      if (!cursorElement) return;

      const cursorWidthHalf = cursorElement.offsetWidth / 2;
      const cursorHeightHalf = cursorElement.offsetHeight / 2;

      if (typeof buffer === 'number') {
        buffer = [buffer, buffer, buffer, buffer];
      } else if (!Array.isArray(buffer) || buffer.length !== 4) {
        buffer = [50, 100, 50, 100];
      }

      const [bufferTop, bufferRight, bufferBottom, bufferLeft] = buffer;

      wrapper.addEventListener('mousemove', (e) => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        const cursorX = findInsideWrapper
          ? clientX - wrapperRect.left - cursorWidthHalf
          : clientX - cursorWidthHalf;


        const cursorY = findInsideWrapper
          ? clientY - wrapperRect.top - cursorHeightHalf
          : clientY - cursorHeightHalf;

        const isInside =
          clientX >= wrapperRect.left - bufferLeft &&
          clientX <= wrapperRect.right + bufferRight &&
          clientY >= wrapperRect.top - bufferTop &&
          clientY <= wrapperRect.bottom + bufferBottom;

        if (isInside) {
          if (findInsideWrapper) {
            wrapper.classList.add('is-moved');
          } else {
            cursorElement.classList.add('is-moved');
          }

          requestAnimationFrame(() => {
            cursorElement.style.left = `${cursorX}px`;
            cursorElement.style.top = `${cursorY}px`;
          });
        } else {
          wrapper.classList.remove('is-moved');
        }
      });

      if (!findInsideWrapper) {
        wrapper.addEventListener('mouseleave', () => {
          cursorElement.classList.add('is-leave');
          setTimeout(() => {
            cursorElement.classList.remove('is-moved', 'is-leave');
          }, 200)// 200 cursor transition duration
        });
      }
    });
  };


  function supportsSVH() {
    const testElement = document.createElement('div');
    testElement.style.height = '1svh';
    document.body.appendChild(testElement);

    const computedHeight = window.getComputedStyle(testElement).height;
    document.body.removeChild(testElement);

    return computedHeight !== '0px';
  }

  function getMaxViewportHeight() {
    const testElement = document.createElement('div');
    testElement.style.height = '100svh';
    document.body.appendChild(testElement);

    const computedHeight = window.getComputedStyle(testElement).height;
    document.body.removeChild(testElement);

    if (computedHeight !== '0px') {
      return computedHeight;
    }

    return Math.min(window.innerHeight, screen.height) + 'px';
  }


  function updateViewportHeight() {
    if (!supportsSVH() || isSafari) {
      document.documentElement.style.setProperty('--system--available-height', getMaxViewportHeight());
    }
    if (!supportsSVH()) {
      document.documentElement.style.setProperty('--system--1svh', '1vh');
    }
  }

  window.addEventListener('resize', updateViewportHeight);
  updateViewportHeight();


  const getAvailableHeight = () => {
    return window.visualViewport ? window.visualViewport.height : window.innerHeight;
  };


  function applySafariBlendModeFix() {
    if (windowCurrentWidth >= 767 && windowCurrentWidth < 1200 && isSafari) {
      document.querySelectorAll('#header, #footer').forEach(element => {
        element.classList.add('is-safari-blend-mode-fix');
      });
    }
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener('wheel', preventDefault, { passive: false });
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
    document.body.addEventListener('gesturechange', preventDefault, { passive: false });
  }

  function enableScroll() {
    document.body.removeEventListener('wheel', preventDefault, { passive: false });
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
    document.body.removeEventListener('gesturechange', preventDefault, { passive: false });
  }

  /*=====     End of Common functions    ======*/




  /*=============================================
  =             Barba.js transition             =
  =============================================*/
  barba.use(barbaPrefetch);

  barba.init({
    timeout: 5000,
    //debug: true,
    //logLevel: 'debug',
    preventRunning: true,
    transitions: [
      {
        sync: true,
        name: 'home',
        to: { namespace: ['home'] },
        once: ({ next }) => {
          if (!sessionStorage.getItem('visited')) {
            loaderAnimation(next.container);
            homeEnterAnimation(next.container, 4.3); // 3.55 + 0.5 + 0.25 | loader duration + flip duration + loader out duration
          } else {
            homeEnterAnimation(next.container);
          }
        }
      },
      {
        sync: true,
        name: 'case-tabs-transition',
        custom: ({ trigger }) => trigger?.dataset?.case === 'tab-link',
        leave: ({ current }) => caseTabLeaveAnimation(current.container),
        beforeEnter: ({ next, current }) => {
          const mediaCountText = String(next.container.querySelectorAll('[data-parallax-element]').length + 1).padStart(2, '0');
          const currentComponentScrollLeft = current.container.querySelector('#case-component').scrollLeft;
          const paginationCountEl = current.container.querySelector('#case-count-next');
          const nextComponent = next.container.querySelector('#case-component');

          nextComponent.scrollLeft = currentComponentScrollLeft;
          updateCasePagePagination(paginationCountEl, mediaCountText);
        },
        enter: ({ next }) => caseTabEnterAnimation(next.container),
      },
      {
        sync: true,
        name: 'next-case-transition',
        custom: ({ trigger }) => trigger?.dataset?.case === 'next-case-link',
        leave: ({ current, next }) => nextCaseLeaveAnimation(current.container, next.container),
        beforeEnter: ({ next, current }) => {
          const mediaCountText = String(next.container.querySelectorAll('[data-parallax-element]').length + 1).padStart(2, '0');
          const paginationCountEl = current.container.querySelector('#case-count-next');

          updateCasePagePagination(paginationCountEl, mediaCountText);
        },
        enter: ({ next }) => nextCaseEnterAnimation(next.container)
      },
      {
        sync: true,
        name: 'global-transition',
        leave: ({ current }) => globalLeaveTransition(current.container),
        enter: ({ next }) => {
          const nameSpace = next.namespace;

          globalEnterTransition(next.container);

          switch (nameSpace) {
            case 'home':
              homeEnterAnimation(next.container);
              break;

            case 'work':
              if (windowCurrentWidth > 991) {
                workEnterAnimation(next.container);
              }
              break;

            case 'inspired':
              inspiredEnterAnimation(next.container);
              break;

            case 'contacts':
              contactsEnterAnimation(next.container);
              break;

            case 'case':
              caseDefaultEnterAnimation(next.container);
              break;

            case 'about':
              aboutEnterAnimation(next.container);
              break;

            default:
              break;
          }
        }
      }
    ],
  });

  function updateCasePagePagination(_el, _count) {
    _el.innerHTML = '';

    _count.split('').forEach(digit => {
      const span = document.createElement('span');
      span.className = 'case_pagination_digit';
      span.textContent = digit;
      _el.appendChild(span);
    });
  }


  /*----------  Some preparation before transitions  ----------*/
  barba.hooks.before((data) => {
    const isNextCase = data.trigger instanceof HTMLElement && data.trigger.classList.contains('case_next-case_link');
    sessionStorage.setItem('barba-next-case-transition', isNextCase);

    const element = document.getElementById('enable-motion-btn');
    if (element) {
      element.remove();
    }

    const currentObj = data.current;

    if (currentObj.namespace === 'about') {
      saveAboutElementStyles(currentObj.container);
    }

    disableScroll();
  });

  /*----------  Some preparation before leave transitions  ----------*/
  barba.hooks.beforeLeave((data) => {
    if (pageBody.classList.contains('menu-is-shown')) {
      toggleMenu();
    }

    const currentObj = data.current;

    if (currentObj.namespace === 'case') {
      removeCasePageHandlers();
    }
  });

  /*----------  Some preparation leave transitions  ----------*/
  barba.hooks.leave((data) => {
    const currentObj = data.current;
  });

  /*----------  Some preparation after leave transitions  ----------*/
  barba.hooks.afterLeave((data) => {
    const nextObj = data.next;

    if (window.lenisInstanceAboutPage && nextObj.namespace !== 'about') {
      window.lenisInstanceAboutPage.destroy();
      window.lenisInstanceAboutPage = null;
      document.documentElement.classList.remove('lenis');
    }
  });

  /*----------  Some preparation before next transitions  ----------*/
  barba.hooks.beforeEnter((data) => {
    if (ScrollTrigger.getAll().length > 0) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }

    const currentObj = data.current;
    const currentNamespace = currentObj.container;
    const currentContainer = currentObj.container;
    const nextObj = data.next;
    const nextNamespace = nextObj.namespace;
    const nextContainer = nextObj.container;

    if (nextNamespace === 'work' && !sessionStorage.getItem('preload-work-images')) {
      preloadWorkImages(nextContainer);
    }


    if (currentNamespace !== '404' && nextNamespace !== '404' && currentContainer !== null) {


      /*----------  Save current time  ----------*/
      const currentTimeEl = currentContainer.querySelector('[data-current-time]');
      const currentTimeContent = currentTimeEl.textContent;
      const nextTimeEls = nextContainer.querySelectorAll('[data-current-time]');
      nextTimeEls.forEach(el => el.textContent = currentTimeContent);

      /*----------  Save fullscreen button state  ----------*/
      const currentFullscreenButton = currentContainer.querySelector('#fullscreen-button');
      const currentFullscreenButtonClassList = currentFullscreenButton.classList;
      const nextFullscreenButton = nextContainer.querySelector('#fullscreen-button');
      nextFullscreenButton.classList.add(...currentFullscreenButtonClassList);
    }

    setTimeout(() => callAllGlobalFunctions(nextContainer), 50);

    removeCasePageHandlers();

    setTimeout(() => {
      switch (nextNamespace) {
        case 'home': homePageScripts(nextContainer); break;
        case 'work': workPageScripts(nextContainer); break;
        case 'case': casePageScripts(nextContainer); break;
        case 'inspired': inspiredPageScripts(nextContainer); break;
        case 'about': aboutPageScripts(nextContainer); break;
        case 'contact': contactsPageScripts(nextContainer); break;
      }
    }, 100);

    setTimeout(() => ScrollTrigger.refresh(), 150);
  });

  /*----------  Some preparation after next transitions  ----------*/
  barba.hooks.afterEnter(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100);
  });


  /*----------  Run necessary functions after once  ----------*/
  barba.hooks.afterOnce((data) => {
    const nextObj = data.next;
    const nextNamespace = nextObj.namespace;
    const nextContainer = nextObj.container;

    setTimeout(() => {
      callAllGlobalFunctions(nextContainer);

      switch (nextNamespace) {
        case 'home':
          homePageScripts(nextContainer);
          break;

        default:
          break;
      }
    }, 100)

  });


  /*----------  Run necessary functions after all  ----------*/
  barba.hooks.after((data) => {
    sessionStorage.setItem('visited', true);

    if (data.next.namespace === 'home') {
      applySafariBlendModeFix();
    }

    if (data.next.namespace === 'about' || data.next.namespace === 'work' || data.next.namespace === 'case') {
      stopOverscroll();
    }

    enableScroll();
  });


  /*----------  Globals transitions  ----------*/
  const transitionDuration = 1; // 1s

  const globalLeaveTransition = (_container) => {
    const transitionOverlay = _container.querySelector('[data-transition-overlay]');
    const tl = gsap.timeline({
      defaults: {
        duration: transitionDuration,
        ease: easeSharpStartSmoothFinish
      }
    });

    tl
      .to(transitionOverlay, {
        height: '100vh'
      })
      .to(_container, {
        '--_pages-transitions---mask-top-line': '100vh'
      });

    window.globalLeaveTransitionDuration = tl.duration();

    return tl;
  }


  const globalEnterTransition = (_container) => {
    const tl = gsap.timeline({
      defaults: {
        duration: transitionDuration,
        ease: easeSharpStartSmoothFinish
      }
    });

    tl
      .set(_container, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '--_pages-transitions---mask-bottom-line': '0vh'
      })
      .to(_container, {
        delay: transitionDuration,
        '--_pages-transitions---mask-bottom-line': '100vh',
        onComplete: () => {
          if (windowCurrentWidth < 992 && window.scrollY > 0) {
            window.scrollTo(0, 0);
          }
        }
      })
      .set(_container, {
        clearProps: 'all'
      });

    window.globalEnterTransitionDuration = tl.duration();

    return tl;
  }


  const textGridTweenProps = {
    duration: 0.05,
    stagger: {
      grid: 'auto',
      from: 'start',
      axis: 'y',
      each: 0.05
    }
  };


  /*--  Contacts page content enter animation  --*/
  const contactsEnterAnimation = (_container) => {
    const infoRows = _container.querySelectorAll('[data-contacts="info-text"]');
    const bgImage = _container.querySelector('[data-contacts="bg-image"]');
    const image = _container.querySelector('[data-contacts="image"]');

    let careersRows;

    const title = _container.querySelector('[data-contacts="careers-title"]');

    if (windowCurrentWidth <= 1200) {
      careersRows = _container.querySelectorAll('[data-contacts-tablet="careers-text"]');
    } else {
      careersRows = _container.querySelectorAll('[data-contacts-desktop="careers-text"]');
    }

    const tl = gsap.timeline({
      defaults: {
        duration: 0.1,
        ease: easeSharpStartSmoothFinish
      }
    });

    tl
      .set(
        [
          bgImage,
          image
        ],
        {
          scale: 1.2
        }
      )
      .set(careersRows, {
        '--_contact-page---text-mask': '0%'
      }, '<')
      .set(
        [
          infoRows,
          title
        ],
        {
          opacity: 0
        }
        , '<')
      .to(bgImage, {
        delay: transitionDuration * 1.5,
        duration: 1.15,
        scale: 1
      }, '<')
      .to(image, {
        duration: 1.15,
        scale: 1
      }, '<')
      .to(
        [
          infoRows,
          title
        ],
        {
          opacity: 1,
          ...textGridTweenProps
        }
        , '<10%')
      .to(careersRows, {
        '--_contact-page---text-mask': '100%',
        duration: 0.1,
        stagger: {
          each: 0.1
        }
      }, '<90%');

    return tl;
  }


  /*---------  Case pages animation  ---------*/
  const caseInfoEnterTweenProps = {
    opacity: 1,
    ...textGridTweenProps
  };

  const caseInfoLeaveTweenProps = {
    opacity: 0,
    ...textGridTweenProps
  };

  const caseDefaultEnterAnimation = (_container) => {
    const tl = gsap.timeline({
      delay: window.globalLeaveTransitionDuration / 2,
      defaults: {
        duration: gsapDefaultDuration
      }
    });

    const tabsLinks = _container.querySelectorAll('[data-case="tab-link"]');
    const titleLines = _container.querySelectorAll('[data-case="title-line"]');
    const cover = windowCurrentWidth > 991 ? _container.querySelector('#case-cover-desktop') : _container.querySelector('#case-cover-tablet');

    const creditsTitle = _container.querySelector('#credits-title');
    const creditsTexts = _container.querySelectorAll('#credits-text p');
    const locationTitle = _container.querySelector('#location-title');
    const locationTexts = _container.querySelectorAll('#location-text p');
    const servicesTitle = _container.querySelector('#services-title');
    const servicesTexts = _container.querySelectorAll('#services-text p');

    if (titleLines.length > 1) {
      tl
        .set(titleLines[0], {
          yPercent: -100
        })
        .set(titleLines[1], {
          yPercent: 100
        }, '<');
    } else {
      tl
        .set(titleLines, {
          yPercent: 100
        });
    }

    if (tabsLinks.length) {
      tl
        .set(tabsLinks, {
          opacity: 0
        }, '<');
    }

    tl
      .set(cover, {
        scale: 1.4,
      }, '<')
      .set(
        [
          creditsTitle,
          creditsTexts,
          locationTitle,
          locationTexts,
          servicesTitle,
          servicesTexts
        ],
        { opacity: 0 }
        , '<')
      .to(cover, {
        ease: easeSharpStartSmoothFinish,
        scale: 1,
        duration: 1.5
      })
      .to(titleLines, {
        duration: 0.75,
        ease: easeHeadings,
        yPercent: 0
      }, '<10%');

    if (window.innerWidth > 991) {
      tl
        .to(
          [
            creditsTitle,
            creditsTexts,
            locationTitle,
            locationTexts,
            servicesTitle,
            servicesTexts
          ],
          caseInfoEnterTweenProps,
          '<50%');

      if (tabsLinks.length) {
        tl.to(tabsLinks, {
          opacity: 1,
          stagger: {
            each: 0.1
          }
        }, '<50%');
      }
    } else {

      if (tabsLinks.length) {
        tl
          .to(tabsLinks, {
            opacity: 1,
            stagger: {
              each: 0.1
            }
          }, '<50%');
      }
      tl
        .to(
          [
            creditsTitle,
            creditsTexts,
            locationTitle,
            locationTexts,
            servicesTitle,
            servicesTexts
          ],
          caseInfoEnterTweenProps,
          '<50%');
    }

    return tl;
  }

  const caseTabLeaveAnimation = (_container) => {
    const tl = gsap.timeline({
      defaults: {
        duration: gsapDefaultDuration
      }
    });

    const titleLines = _container.querySelectorAll('[data-case="title-line"]');

    const tabsLinks = _container.querySelectorAll('[data-case="tab-link"]');

    const count = _container.querySelector('#case-count');
    const countNext = _container.querySelector('#case-count-next');

    const creditsTitle = _container.querySelector('#credits-title');
    const creditsTexts = _container.querySelectorAll('#credits-text p');
    const locationTitle = _container.querySelector('#location-title');
    const locationTexts = _container.querySelectorAll('#location-text p');
    const servicesTitle = _container.querySelector('#services-title');
    const servicesTexts = _container.querySelectorAll('#services-text p');

    tl
      .set(_container, {
        position: 'relative',
        zIndex: 2
      })
      .set(countNext, {
        opacity: 1,
        yPercent: 100
      })
      .set(tabsLinks, {
        pointerEvents: 'none'
      }, '<')

    if (titleLines.length > 1) {
      tl
        .to(titleLines[0], {
          yPercent: -100,
          duration: 0.75,
          ease: easeHeadings
        })
        .to(titleLines[1], {
          yPercent: 100,
          duration: 0.75,
          ease: easeHeadings
        }, '<');
    } else {
      tl
        .to(titleLines, {
          yPercent: 100,
          duration: 0.75,
          ease: easeHeadings
        });
    }

    tl
      .to(
        [
          creditsTitle,
          creditsTexts,
          locationTitle,
          locationTexts,
          servicesTitle,
          servicesTexts
        ],
        caseInfoLeaveTweenProps,
        '<0.1')
      .to(count, {
        yPercent: -100,
      }, '<')
      .to(countNext, {
        yPercent: 0
      }, '<');

    return tl;
  }

  const caseTabEnterAnimation = (_container) => {
    const tl = gsap.timeline({
      defaults: {
        duration: gsapDefaultDuration
      },
      onComplete: () => {
        gsap.set([_container, tabsLinks], { clearProps: 'all' });
      }
    });

    const tabsLinks = _container.querySelectorAll('[data-case="tab-link"]');
    const titleLines = _container.querySelectorAll('[data-case="title-line"]');
    const cover = windowCurrentWidth > 991 ? _container.querySelector('#case-cover-desktop') : _container.querySelector('#case-cover-tablet');

    const creditsTitle = _container.querySelector('#credits-title');
    const creditsTexts = _container.querySelectorAll('#credits-text p');
    const locationTitle = _container.querySelector('#location-title');
    const locationTexts = _container.querySelectorAll('#location-text p');
    const servicesTitle = _container.querySelector('#services-title');
    const servicesTexts = _container.querySelectorAll('#services-text p');

    if (titleLines.length > 1) {
      tl
        .set(titleLines[0], {
          yPercent: -100
        })
        .set(titleLines[1], {
          yPercent: 100
        }, '<');
    } else {
      tl
        .set(titleLines, {
          yPercent: 100
        });
    }

    tl
      .set(cover, {
        scale: 1.4,
      }, '<')
      .set(_container, {
        '--_pages-transitions---mask-bottom-line': '0vh',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 3
      }, '<')
      .set(tabsLinks, {
        pointerEvents: 'none'
      }, '<')
      .set(
        [
          creditsTitle,
          creditsTexts,
          locationTitle,
          locationTexts,
          servicesTitle,
          servicesTexts
        ],
        { opacity: 0 }
        , '<')
      .to(_container, {
        delay: 0.35,
        duration: transitionDuration,
        ease: easeFastStartSmoothEnd,
        '--_pages-transitions---mask-bottom-line': '100vh',
        onComplete: () => {
          gsap.set(_container, {
            '--_pages-transitions---mask-bottom-line': '100%'
          });
        }
      })
      .to(cover, {
        ease: easeSharpStartSmoothFinish,
        scale: 1,
        duration: 1.5
      }, '<25%')
      .to(titleLines, {
        duration: 0.75,
        ease: easeHeadings,
        yPercent: 0
      }, '<10%')
      .to(
        [
          creditsTitle,
          creditsTexts,
          locationTitle,
          locationTexts,
          servicesTitle,
          servicesTexts
        ],
        caseInfoEnterTweenProps,
        '<50%');

    if (tabsLinks.length) {
      tl.to(tabsLinks, {
        opacity: 1,
        stagger: {
          each: 0.1
        }
      }, '<50%');
    }

    return tl;
  }


  const nextCaseLeaveAnimation = (_containerCurrent, _containerNext) => {
    const tl = gsap.timeline({
      defaults: {
        ease: easeSharpStartSmoothFinish,
        duration: gsapDefaultDuration
      }
    });
    const component = _containerCurrent.querySelector('#case-component');
    const nextEl = component.querySelector('#next-case');
    const nextElTitleWrapper = nextEl.querySelector('#next-case-title-wrapper');
    const nextElTitle = nextElTitleWrapper.querySelector('#next-case-title');
    const nextElImage = windowCurrentWidth > 991 ? nextEl.querySelector('#next-case-image-desktop') : nextEl.querySelector('#next-case-image-tablet');

    const nextPageComponent = _containerNext.querySelector('#case-component');
    const nextPageTitleWrapper = nextPageComponent.querySelector('#case-title-wrapper');
    const nextPageTitle = nextPageTitleWrapper.querySelector('#case-title');
    const nextPageTitleLine1 = nextPageTitle.querySelector('#case-title-line-1');

    if (windowCurrentWidth > 991) {
      const count = _containerCurrent.querySelector('#case-count');
      const countNext = _containerCurrent.querySelector('#case-count-next');
      const digitsNext = _containerCurrent.querySelector('#case-digits-next');
      const digitsWrappers = _containerCurrent.querySelectorAll('[data-case="digit-wrapper"]');

      const nextElHeader = nextEl.querySelector('#case-next-case-header');
      const nextElContent = nextEl.querySelector('#next-case-content');
      const nextElTitleLineWrapper1 = nextElTitle.querySelector('#next-case-title-line-wrapper-1');
      const nextElTitleLineWrapper2 = nextElTitle.querySelector('#next-case-title-line-wrapper-2');
      const nextElBG = nextEl.querySelector('#next-case-bg');

      const imageBgPosition = nextPageComponent.dataset.style === 'jlo-overnight' ? '100%' : '50%';
      const topPosition = (nextPageTitleWrapper.offsetHeight - nextPageTitle.offsetHeight + _containerCurrent.querySelector('#header').offsetHeight) / rootFontSize + 'rem';
      const nextPageTitleLine2 = nextPageTitle.querySelector('#case-title-line-2');
      const nextPageTitleLineHeight = nextPageTitleLine1.offsetHeight / rootFontSize + 'rem';
      const nextPageTitleFontSize = gsapGetStyle(nextPageTitle, 'fontSize');

      gsap.set(nextElTitle, { xPercent: window.xToCasePage, force3D: true });
      gsap.set(nextElImage, { '--_case-page---next-case--cover-bg-position-x': window.caseCoverBGPositionXTo });

      tl
        .set(
          [
            countNext,
            digitsNext
          ],
          {
            opacity: 1,
            yPercent: 100
          }
        )
        .set(nextEl, {
          overflow: 'visible'
        }, '<')
        .set(nextElImage, {
          position: 'fixed'
        }, '<')
        .to(nextElImage, {
          duration: 1.1,
          width: '45.42vw',
          height: '100%',
          onComplete: () => {
            gsap.set(nextElHeader, {
              opacity: 0
            });
          }
        })
        .to(nextElContent, {
          duration: 1.1,
          height: '100%',
        }, '<')
        .to(nextElTitleWrapper, {
          duration: 1,
          top: topPosition
        }, '<')
        .to(nextElTitleLineWrapper1, {
          duration: 1,
          height: nextPageTitleLineHeight
        }, '<')

      if (nextElTitleLineWrapper2 && nextPageTitleLine2) {
        tl
          .to(nextElTitleLineWrapper2, {
            duration: 1,
            height: nextPageTitleLineHeight
          }, '<')
      }

      tl
        .to(nextElImage, {
          duration: 1.7,
          x: '-54.58vw'
        })
        .to(nextElImage, {
          duration: 1.7,
          '--_case-page---next-case--cover-bg-position-x': imageBgPosition
        }, '<25%')
        .to(nextElTitle, {
          duration: 1.5,
          fontSize: nextPageTitleFontSize
        }, '<')
        .add(() => {
          Flip.fit(nextElTitleLineWrapper1, nextPageTitleLine1, {
            duration: 1.5
          });
        }, '<');

      if (nextElTitleLineWrapper2 && nextPageTitleLine2) {
        tl
          .add(() => {
            Flip.fit(nextElTitleLineWrapper2, nextPageTitleLine2, {
              duration: 1.5
            });
          }, '<');
      }

      tl
        .to(nextElBG, {
          duration: 1.5,
          width: '100vw',
        }, '<')
        .to(
          [
            count,
            digitsWrappers
          ],
          {
            yPercent: -100
          }
          , '<')
        .to(
          [
            countNext,
            digitsNext
          ],
          {
            yPercent: 0
          }
          , '<');
    } else {
      const nextElImageRect = nextElImage.getBoundingClientRect();
      const imageTopStartPos = parseFloat(nextElImageRect.top) / rootFontSize + 'rem';
      const imageLeftStartPos = parseFloat(nextElImageRect.left) / rootFontSize + 'rem';
      const imageStartWidth = parseFloat(nextElImageRect.width) / rootFontSize + 'rem';
      const imageStartHeight = parseFloat(nextElImageRect.height) / rootFontSize + 'rem';
      const nextPageImage = windowCurrentWidth > 991 ? nextPageComponent.querySelector('#case-cover-desktop') : nextPageComponent.querySelector('#case-cover-tablet');
      const nextPageImageHeight = nextPageImage.getBoundingClientRect().height;
      const nextPageContent = nextPageComponent.querySelector('#case-content');
      const contentGap = gsapGetStyle(nextPageContent, 'paddingTop');

      const nextElTitleWrapperRect = nextElTitleWrapper.getBoundingClientRect();
      const titleWrapperHeight = parseFloat(nextElTitleWrapperRect.height) / rootFontSize + 'rem';
      const nextElTitleRect = nextElTitle.getBoundingClientRect();
      const titleTopStartPos = parseFloat(nextElTitleRect.top) / rootFontSize + 'rem';
      let titleTopEndPos = contentGap + nextPageImageHeight;

      const nextPageTabs = nextPageComponent.querySelector('#case-tabs');

      if (nextPageTabs) {
        titleTopEndPos = titleTopEndPos + nextPageTabs.getBoundingClientRect().height;
      }

      const nextPageTitleMarginTop = parseFloat(gsapGetStyle(nextPageTitle, 'marginTop'));

      if (nextPageTitleMarginTop < 0 && windowCurrentWidth > 767) {
        titleTopEndPos = nextPageImageHeight - nextPageTitleLine1.getBoundingClientRect().height;
      }

      tl
        .set(nextElTitleWrapper, {
          height: titleWrapperHeight
        })
        .set(nextElTitle, {
          position: 'fixed',
          top: titleTopStartPos,
          left: 0,
          width: '100%'
        }, '<')
        .set(nextElImage, {
          position: 'fixed',
          top: imageTopStartPos,
          left: imageLeftStartPos,
          width: imageStartWidth,
          height: imageStartHeight
        }, '<')
        .to(nextElImage, {
          duration: 1,
          top: '0rem',
          left: '0rem',
          width: '100%',
          height: nextPageImageHeight
        })
        .to(nextElTitle, {
          duration: 1,
          top: titleTopEndPos
        }, '<');
    }

    return tl;
  }

  const nextCaseEnterAnimation = (_container) => {
    const tl = gsap.timeline({
      defaults: {
        ease: easeSharpStartSmoothFinish,
        duration: gsapDefaultDuration
      },
      onComplete: () => {
        gsap.set(_container, { clearProps: 'all' });
        if (window.scrollY > 0) {
          window.scrollTo(0, 0);
        }
        setTimeout(() => {
          if (window.lenisInstanceCasePage !== undefined) {
            window.lenisInstanceCasePage.start();
          }
        }, 250);
      }
    });

    const tabsLinks = _container.querySelectorAll('[data-case="tab-link"]');

    const creditsTitle = _container.querySelector('#credits-title');
    const creditsTexts = _container.querySelectorAll('#credits-text p');
    const locationTitle = _container.querySelector('#location-title');
    const locationTexts = _container.querySelectorAll('#location-text p');
    const servicesTitle = _container.querySelector('#services-title');
    const servicesTexts = _container.querySelectorAll('#services-text p');

    if (tabsLinks.length) {
      tl
        .set(tabsLinks, {
          opacity: 0
        }, '<');
    }

    tl
      .set(
        [
          creditsTitle,
          creditsTexts,
          locationTitle,
          locationTexts,
          servicesTitle,
          servicesTexts
        ],
        { opacity: 0 }
        , '<');

    if (window.innerWidth > 991) {
      tl
        .set(_container, {
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 3
        }, '<')
        .set(_container, {
          delay: 3,
          opacity: 1
        })
        .to(
          [
            creditsTitle,
            creditsTexts,
            locationTitle,
            locationTexts,
            servicesTitle,
            servicesTexts
          ],
          caseInfoEnterTweenProps,
          '<');

      if (tabsLinks.length) {
        tl
          .to(tabsLinks, {
            opacity: 1,
            stagger: {
              each: 0.1
            }
          }, '<50%');
      }
    } else {
      tl
        .set(_container, {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0,
        }, '<')
        .set(_container, {
          delay: 1.5,
          opacity: 1,
          onStart: () => {
            if (window.scrollY > 0) {
              window.scrollTo(0, 0);
            }
          }
        });

      if (tabsLinks.length) {
        tl
          .to(tabsLinks, {
            opacity: 1,
            stagger: {
              each: 0.1
            }
          }, '<');
      }
      tl
        .to(
          [
            creditsTitle,
            creditsTexts,
            locationTitle,
            locationTexts,
            servicesTitle,
            servicesTexts
          ],
          caseInfoEnterTweenProps,
          '<50%');
    }

    return tl;
  }

  /*---  Home page content enter animation  ---*/
  const homeEnterAnimation = (_container, _delay = 0) => {

    const loader = _container.querySelector('#loader');
    const headerMain = _container.querySelector('#header-main');
    const footerContent = _container.querySelector('#footer-content');

    const caseSliderComponent = _container.querySelector('#case-slider-component');
    const caseSliderText = _container.querySelectorAll('[data-case-slider="text"]');

    const homeTextTopEls = _container.querySelectorAll('[data-home-text="top"]');
    const homeTextBottomEls = _container.querySelectorAll('[data-home-text="bottom"]');

    const caseMedia = _container.querySelector('#case-media-component');
    const caseMediaSelector = gsap.utils.selector(caseMedia);
    const caseMediaItems = caseMediaSelector('[data-case-media="item"]');
    const caseMediaInitialItem = caseMediaItems.find(item => item.classList.contains('is-initial'));

    let mediaItemXRight = windowCurrentWidth > 992 ? '83%' : '65%';
    let mediaItemXLeft = windowCurrentWidth > 992 ? '-83%' : '-65%';

    const tl = gsap.timeline({
      delay: _delay,
      defaults: {
        duration: gsapDefaultDuration,
        ease: easeSharpStartSmoothFinish
      },
      onComplete: () => {
        caseMediaItems.forEach(item => {
          const { classList } = item;
          if (classList.contains('is-initial')) {
            item.classList.remove('is-initial');

            if (windowCurrentWidth < 768) {
              gsap.set(item, { clearProps: 'all' });

              item.classList.add('is-visible');
            }
          }
        });

        gsap.set(
          [
            homeTextTopEls,
            homeTextBottomEls,
            headerMain,
            footerContent
          ],
          { clearProps: 'all' }
        );
      }
    });

    if (!sessionStorage.getItem('visited')) {
      gsap.set(caseSliderComponent, { opacity: 0 });

      gsap.set(homeTextBottomEls, { yPercent: -100 });

      gsap.set(
        [
          homeTextTopEls,
          caseSliderText
        ],
        { yPercent: 100 }
      );

      gsap.set(caseMediaInitialItem, {
        '--loader-image-width': `${window.loaderImageWidthInRem / 2}rem`,
        '--loader-image-height': `${window.loaderImageHeightInRem / 2}rem`,
        '--vertex-1-x': '50%',
        '--vertex-1-y': '50%',
        '--vertex-2-x': '50%',
        '--vertex-2-y': '50%',
        '--vertex-3-x': '50%',
        '--vertex-3-y': '50%',
        '--vertex-4-x': '50%',
        '--vertex-4-y': '50%'
      });

      tl
        .set(loader, {
          display: 'none'
        })
        .to(caseMediaInitialItem, {
          '--loader-image-width': '0rem',
          '--loader-image-height': '0rem',
          '--vertex-1-x': '0%',
          '--vertex-1-y': '0%',
          '--vertex-2-x': '100%',
          '--vertex-2-y': '0%',
          '--vertex-3-x': '100%',
          '--vertex-3-y': '100%',
          '--vertex-4-x': '0%',
          '--vertex-4-y': '100%'
        })
        .from(headerMain, {
          opacity: 0,
          yPercent: -100
        }, '<25%');

      if (windowCurrentWidth >= 768) {
        tl
          .from(footerContent, {
            opacity: 0,
            yPercent: 100
          }, '<')
          .set(caseMediaInitialItem, {
            '--image-opacity': 1
          }
          )
          .to(caseMediaInitialItem, {
            '--transform-x-right': mediaItemXRight,
            '--transform-y-right': '-10%',
            '--rotation-right': '15deg',
          }, '<')
          .to(caseMediaInitialItem, {
            '--transform-x-left': mediaItemXLeft,
            '--transform-y-left': '-10%',
            '--rotation-left': '-15deg',
          }, '<');
      } else {
        tl
          .from(caseMediaItems, {
            opacity: 0
          }, '<75%');
      }

      tl
        .to(
          [
            homeTextTopEls,
            homeTextBottomEls
          ],
          {
            ease: easeHeadings,
            yPercent: 0
          }
          , '<25%')
        .to(caseSliderComponent, {
          opacity: 1
        }, '<')
        .to(caseSliderText, {
          yPercent: 0
        }, '<10%');
    } else {
      gsap.set(loader, {
        display: 'none'
      })

      gsap.set(
        [
          '[data-case-media="item"].is-active',
          '[data-case-media="item"].is-initial'
        ],
        {
          zIndex: 3,
          '--image-opacity': 1,
          '--rotation-right': '15deg',
          '--transform-y-right': '-10%',
          '--transform-x-right': '83%',
          '--rotation-left': '-15deg',
          '--transform-y-left': '-10%',
          '--transform-x-left': '-83%',
          '--vertex-4-y': '100%',
          '--vertex-3-y': '100%',
        }
      );

      gsap.set(
        [
          '.is-active [data-case-media="video-wrapper"]',
          '.is-initial [data-case-media="video-wrapper"]'
        ],
        {
          opacity: 1
        }
      );
    }

    return tl;
  }


  /*-----------  Loader animation  -----------*/
  const loaderAnimation = (_container) => {

    const loader = _container.querySelector('#loader');
    const loaderGallery = _container.querySelector('#loader-gallery');
    const loaderGallerySelector = gsap.utils.selector(loaderGallery);

    const galleryAllImages = loaderGallerySelector('[data-loader-gallery]');
    const galleryFirstImages = loaderGallerySelector('[data-loader-gallery="image-1"]');
    const gallerySecondImages = loaderGallerySelector('[data-loader-gallery="image-2"]');
    const galleryThirdImages = loaderGallerySelector('[data-loader-gallery="image-3"]');
    const galleryFourthImages = loaderGallerySelector('[data-loader-gallery="image-4"]');

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    loaderImageWidthInRem = (galleryFirstImages[0].offsetWidth / rootFontSize).toFixed(4);
    loaderImageHeightInRem = (galleryFirstImages[0].offsetHeight / rootFontSize).toFixed(4);

    const loaderFlipStateEl = _container.querySelector('[data-case-media="flip-el"]');

    gsapMatchMedia.add('(max-width: 991px)', () => {
      const list1 = _container.querySelector('#loader-list-1');
      const list1Height = gsapGetStyle(list1, 'height');
      const list2 = _container.querySelector('#loader-list-2');
      const list2Height = gsapGetStyle(list2, 'height');
      const item = list2.querySelector('[data-loader-list-item]');
      const rowHeight = item.getBoundingClientRect().height + gsapGetStyle(list2, 'grid-row-gap');
      const wholePartList1 = Math.floor(list1Height / rowHeight);
      const wholePartList2 = Math.floor(list2Height / rowHeight);
      const listAverage = (wholePartList1 + wholePartList2) / 2;
      const list1RowCount = Math.floor(listAverage)
      const list2RowCount = Math.ceil(listAverage)

      gsap.set(list1, {
        maxHeight: `${rowHeight * list1RowCount}px`
      });

      gsap.set(list2, {
        maxHeight: `${rowHeight * list2RowCount}px`
      });

    });

    gsap.set(loaderFlipStateEl, {
      width: `${loaderImageWidthInRem}rem`,
      height: `${loaderImageHeightInRem}rem`
    });


    const galleryItemsProps = {
      opacity: 0,
      delay: 0.1
    };

    const galleryAnimationTl = gsap.timeline({ paused: true });

    galleryAnimationTl
      .set(galleryFirstImages, {
        ...galleryItemsProps
      })
      .set(gallerySecondImages, {
        ...galleryItemsProps
      })
      .set(galleryThirdImages, {
        ...galleryItemsProps
      })
      .set(galleryFourthImages, {
        ...galleryItemsProps
      });

    const loaderSelector = gsap.utils.selector(loader);

    const listItemsFirstPart = loaderSelector('[data-loader-list-item="first-part"]');
    const listItemsSecondPart = loaderSelector('[data-loader-list-item="second-part"]');
    const loaderCenterItem = loaderSelector('[data-loader-gallery-item="center"]')[0];

    const listItemsAnimationProps = {
      duration: 0.1,
      stagger: 0.05
    };

    const tl = gsap.timeline({
      defaults: {
        duration: gsapDefaultDuration,
        ease: easeSharpStartSmoothFinish
      }
    });

    tl
      .to(loader, {
        '--loader--logo-mask': '100%'
      })
      .to(loader, {
        '--loader--item-header-opacity': '100%',
        '--loader--gallery-item-mask': '100%',
        '--loader--gallery-center-item-mask': '100%',
        onStart: () => {
          galleryAnimationTl.repeat(-1);
          galleryAnimationTl.play();
        }
      })
      .to(loader, {
        '--loader--logo-opacity': '0%'
      }, '<20%')
      .to(listItemsFirstPart, {
        opacity: 0.4,
        ...listItemsAnimationProps
      }, '<')
      .to(listItemsSecondPart, {
        opacity: 0.4,
        ...listItemsAnimationProps
      }, '<')
      .to(listItemsFirstPart, {
        opacity: 1,
        ...listItemsAnimationProps
      })
      .to(listItemsSecondPart, {
        opacity: 1,
        ...listItemsAnimationProps
      }, '<')
      .to(loader, {
        '--loader--item-header-opacity': '0%',
        duration: 0.1
      })
      .to(listItemsFirstPart, {
        opacity: 0,
        ...listItemsAnimationProps
      })
      .to(listItemsSecondPart, {
        opacity: 0,
        ...listItemsAnimationProps,
      }, '<')
      .to(loader, {
        '--loader--gallery-item-mask': '0%',
        onStart: () => {
          galleryAnimationTl.pause();
          galleryAnimationTl.progress(0).pause();
          gsap.set(galleryAllImages, { opacity: 1 });
        }
      }, '<40%')
      .add(() => {
        Flip.fit(loaderCenterItem, loaderFlipStateEl, {
          duration: 0.5,
          ease: gsapDefaultEase,
          scale: false,
          onComplete: () => {
            gsap.to(loader, {
              opacity: 0,
              duration: 0.25,
              onComplete: () => {
                gsap.set(loader, {
                  display: 'none'
                });
                sessionStorage.setItem('visited', true);
              }
            });
          }
        });
      });

    return tl;
  }


  /*---------  Work page animation  ---------*/
  const workEnterAnimation = (_container) => {
    const items = _container.querySelectorAll('[data-work-item]');

    gsap.set(items, {
      opacity: 0
    });

    const tl = gsap.timeline({
      delay: transitionDuration,
      defaults: {
        duration: gsapDefaultDuration,
        ease: easeSlowStartFastEnd
      }
    });

    tl
      .to(items, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.05
      });

    return tl;
  }


  /*---------  Inspired page animation  ---------*/
  const inspiredEnterAnimation = (_container) => {
    const gallery = _container.querySelector('#gallery');
    const galleryInner = gallery.querySelector('#gallery-inner');

    const tl = gsap.timeline({
      delay: transitionDuration,
      defaults: {
        duration: transitionDuration,
        ease: easeSlowStartFastEnd
      }
    });

    tl
      .set(gallery, {
        scrollLeft: (gallery.scrollWidth - gallery.clientWidth) / 2,
        scrollTop: (gallery.scrollHeight - gallery.clientHeight) / 2,
      })
      .to(galleryInner, {
        scale: 1.2
      }, '<');

    return tl;
  }


  function getAboutSectionMaskTopInitialPoint() {
    if (windowCurrentWidth < 768) return '2rem';
    if (windowCurrentWidth >= 768 && windowCurrentWidth <= 991) return '3rem';
    return '7.25rem';
  }

  function getAboutSectionMaskTopStartPoint() {
    if (windowCurrentWidth < 992) return '10rem';
    return '20rem';
  }

  /*---------  About page animation  ---------*/
  const aboutEnterAnimation = (_container) => {
    const intro = _container.querySelector('#intro');
    const introInner = intro.querySelector('#intro-inner');
    const introContent = intro.querySelector('#intro-content');
    const introContentRect = introContent.getBoundingClientRect();
    const aboutSection = _container.querySelector('#section-about');
    let imageStartPos = getAvailableHeight() - parseInt(introContentRect.height) - gsapGetStyle(introInner, 'paddingTop');
    const aboutSectionMaskTopInitPoint = getAboutSectionMaskTopInitialPoint();
    const aboutSectionMaskTopStartPoint = getAboutSectionMaskTopStartPoint();

    const tl = gsap.timeline({
      delay: 1.5,
      defaults: {
        duration: transitionDuration,
        ease: easeSlowStartFastEnd
      }
    });

    if (windowCurrentWidth > 1201) {
      const introTextDesktopLeft = intro.querySelector('[data-about-intro-text="desktop-left"]');
      const introTextDesktopCenter = intro.querySelector('[data-about-intro-text="desktop-center"]');
      const introTextDesktopRight = intro.querySelector('[data-about-intro-text="desktop-right"]');

      tl
        .set(aboutSection, {
          y: imageStartPos,
          '--_about-page---intro-image--mask-gap': aboutSectionMaskTopStartPoint,
          '--_about-page---intro-image--bg-scale': 1.5
        }, '<')
        .to(aboutSection, {
          duration: 1,
          y: 0,
          '--_about-page---intro-image--mask-gap': aboutSectionMaskTopInitPoint,
          '--_about-page---intro-image--bg-scale': 1.3
        })
        .from(introTextDesktopCenter, {
          duration: 0.25,
          opacity: 0
        }, '<60%')
        .from(introTextDesktopLeft, {
          duration: 0.25,
          opacity: 0
        }, '<25%')
        .from(introTextDesktopRight, {
          duration: 0.25,
          opacity: 0
        }, '<50%');
    } else {
      const introTextMobileLeft = intro.querySelectorAll('[data-about-intro-text="mobile-left"] [data-about-intro-text]');
      const introTextMobileRight = intro.querySelectorAll('[data-about-intro-text="mobile-right"] [data-about-intro-text]');

      imageStartPos = (getAvailableHeight() - parseInt(introContentRect.height) - gsapGetStyle(introInner, 'paddingTop')) / rootFontSize + 'rem'

      gsap.set(aboutSection, {
        y: imageStartPos,
        '--_about-page---intro-image--bg-scale': 1.5
      });

      tl
        .to(aboutSection, {
          duration: 1,
          y: 0,
          '--_about-page---intro-image--bg-scale': 1.3
        })
        .from(introTextMobileLeft, {
          opacity: 0,
          duration: 0.1,
          stagger: 0.05
        }, '<50%')
        .from(introTextMobileRight, {
          opacity: 0,
          duration: 0.1,
          stagger: 0.05
        }, '<');
    }

    return tl;
  }

  /*=====   End of Barba.js transition   ======*/






  /*=============================================
  =           Theme setup & toggle             =
  =============================================*/

  const themeSwitching = function (_container = document) {
    const themeButtons = _container.querySelectorAll('[data-theme="switch"]');
    const themeOverlay = _container.querySelectorAll('[data-theme="overlay"]');

    if (themeButtons.length > 0) {
      themeButtons.forEach(button => {
        if (!button.hasListener) {
          button.addEventListener('click', toggleDarkTheme);
          button.hasListener = true;
        }
      });
    }

    function toggleDarkTheme() {
      const isDarkTheme = pageBody.classList.contains('dark-theme');
      themeButtons.forEach(button => button.classList.toggle('is-active'));

      gsap.to(themeOverlay, {
        duration: gsapDefaultDuration,
        ease: easeSlowStartFastEnd,
        '--_theme---mask-top-line': '100%',
        onComplete: () => {
          if (!isDarkTheme) {
            pageBody.classList.add('dark-theme');
            sessionStorage.setItem('theme', 'dark');
          } else {
            pageBody.classList.remove('dark-theme');
            sessionStorage.setItem('theme', 'light');
          }
          gsap.set(themeOverlay, { '--_theme---mask-top-line': '0%' });
        }
      });
    }

    const themeSwitchStateOneEls = _container.querySelectorAll('[data-theme-switch-state-1]');
    const themeSwitchStateTwoEls = _container.querySelectorAll('[data-theme-switch-state-2]');

    if (sessionStorage.getItem('theme') === 'dark' && !pageBody.classList.contains('dark-theme-only')) {
      pageBody.classList.add('dark-theme');

      themeSwitchStateOneEls.forEach(function (element) {
        element.textContent = '24';
        element.setAttribute('data-theme-switch-text', '24');
      });

      themeSwitchStateTwoEls.forEach(function (element) {
        element.textContent = '1.4';
        element.setAttribute('data-theme-switch-text', '1.4');
      });
    }

    if (sessionStorage.getItem('theme') === 'light' && !pageBody.classList.contains('dark-theme-only')) {
      pageBody.classList.remove('dark-theme');

      themeSwitchStateOneEls.forEach(function (element) {
        element.textContent = '1.4';
        element.setAttribute('data-theme-switch-text', '1.4');
      });

      themeSwitchStateTwoEls.forEach(function (element) {
        element.textContent = '24';
        element.setAttribute('data-theme-switch-text', '24');
      });
    }
  }

  /*=====   End of Theme setup & toggle  ======*/


  /*=============================================
  =          Setting the current time           =
  =============================================*/

  const updateTime = function (_container = document) {
    function updateTime(_timeBlock) {
      const now = new Date();
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };

      const formatter = new Intl.DateTimeFormat('en-US', options);
      _timeBlock.textContent = formatter.format(now);
    }

    const timeBlocks = _container.querySelectorAll('[data-current-time]');

    if (timeBlocks.length > 0) {
      timeBlocks.forEach(timeBlock => {
        updateTime(timeBlock);
        setInterval(() => updateTime(timeBlock), 60000); // 1 minute
      });
    }
  }

  /*====  End of Setting the current time =====*/



  /*=============================================
  =              Fullscreen button              =
  =============================================*/

  const toggleFullscreenMode = function (_container = document) {
    const fullscreenButton = _container.querySelector('#fullscreen-button');

    if (fullscreenButton && window.innerWidth > 1199) {
      fullscreenButton.removeEventListener('click', toggleFullscreen);
      fullscreenButton.addEventListener('click', toggleFullscreen);

      document.removeEventListener('fullscreenchange', toggleButtonState);
      document.removeEventListener('webkitfullscreenchange', toggleButtonState);
      document.addEventListener('fullscreenchange', toggleButtonState);
      document.addEventListener('webkitfullscreenchange', toggleButtonState);
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen()
            .catch(error => console.warn('Fullscreen error:', error.message));
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
            .catch(error => console.warn('Exit fullscreen error:', error.message));
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }

    function toggleButtonState() {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        fullscreenButton.classList.add('is-active');
      } else {
        fullscreenButton.classList.remove('is-active');
      }
    }
  }

  /*=====    End of Fullscreen button    ======*/



  /*=============================================
  =                 Mobile menu                 =
  =============================================*/
  function toggleMenu(_fixContent = true) {
    const isMenuOpen = pageBody.classList.contains('menu-is-shown');

    if (!isMenuOpen) {
      scrollPosition = window.scrollY;
    }

    if (pageBody.classList.contains('menu-is-shown')) {
      pageBody.classList.add('menu-is-leave');
      setTimeout(() => {
        pageBody.classList.remove('menu-is-shown');
        pageBody.classList.remove('menu-is-leave');
      }, 350); // 350 ms menu open/close duration
    } else {
      pageBody.classList.add('menu-is-shown');
    }


    if (_fixContent) {
      const gsapConfig = isMenuOpen ? {
        'position': 'relative',
        'top': 0,
        onComplete: () => {
          window.scrollTo(0, scrollPosition);
          setTimeout(() => {
            sessionStorage.removeItem('menuIsShown');
          }, 500);
        }
      } : {
        'position': 'fixed',
        'top': `-${scrollPosition}px`,
        onComplete: () => {
          sessionStorage.setItem('menuIsShown', true);
        }
      };

      gsap.set(pageBody, gsapConfig);
    } else {
      if (isMenuOpen) {
        sessionStorage.removeItem('menuIsShown');
      } else {
        sessionStorage.setItem('menuIsShown', true);
      }
    }
  }
  const showHideMobileMenu = function (_container = document) {
    gsapMatchMedia.add('(max-width: 767px)', () => {
      sessionStorage.removeItem('menuIsShown');

      const menuButtons = _container.querySelectorAll('[data-menu="switch"]');
      let scrollPosition = 0;

      if (menuButtons.length > 0) {
        menuButtons.forEach(button => {
          if (!button.hasListener) {
            if (!button.getAttribute('data-dont-fix-content')?.trim()) {
              button.addEventListener('click', toggleMenu);
            } else {
              button.addEventListener('click', () => toggleMenu(false));
            }
            button.hasListener = true;
          }
        });
      }
    });
  }
  /*=====       End of Mobile menu       ======*/




  /*=============================================
  =  Hide/show menu on scroll [tablet/mobile]   =
  =============================================*/
  const hideShowMenuOnScroll = function (_container = document) {
    const pageHeader = _container.querySelector('#header');

    let lastScrollY = window.scrollY;
    let scrollDirection = 0;

    const handleScroll = () => {
      if (!pageHeader || sessionStorage.getItem('menuIsShown') || pageHeader.dataset.disableHiding === 'true') return;

      const currentScrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      if (currentScrollY === lastScrollY || currentScrollY <= 0 || currentScrollY + viewportHeight >= pageHeight) return;

      const newDirection = currentScrollY > lastScrollY ? 1 : -1;
      if (newDirection !== scrollDirection) {
        gsap.to(pageHeader, {
          y: newDirection === 1 ? -100 : 0,
          opacity: newDirection === 1 ? 0 : 1,
          duration: 0.25,
          overwrite: true
        });

        scrollDirection = newDirection;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
  };
  /*=====   End of Hide/show menu
            on scroll [tablet/mobile]   ======*/




  /*=============================================
  =            Links hover animation            =
  =============================================*/
  const underlinedLinksHoverAnimation = function (_container = document) {
    gsapMatchMedia.add('(hover: hover)', () => {
      const links = _container.querySelectorAll('[data-link-underlined="component"]');

      links.forEach((link) => {
        const line = link.querySelector('[data-link-underlined="line"]');

        if (!line) return;

        const hoverTimeline = gsap.timeline({
          paused: true,
          defaults: {
            ease: 'none'
          }
        });

        hoverTimeline
          .to(line, {
            xPercent: 100,
            duration: 0.35
          })
          .set(line, {
            xPercent: -100,
            delay: 0.01
          })
          .to(line, {
            xPercent: 0,
            duration: 0.25
          });

        link.addEventListener('mouseenter', () => {
          hoverTimeline.play(0);
        });
      });
    });
  }
  /*=====  End of Links hover animation  ======*/




  /*=============================================
  =               Set current year              =
  =============================================*/

  const setCurrentYear = function (_container = document) {
    const currentYear = new Date().getFullYear();
    _container.querySelectorAll('[data-year]').forEach(element => element.textContent = currentYear);
  }
  /*=====     End of Set current year    ======*/





  /*=============================================
  =            All global functions             =
  =============================================*/
  const callAllGlobalFunctions = function (_container = document) {

    const allFunctions = () => {
      updateTime(_container);
      themeSwitching(_container);
      toggleFullscreenMode(_container);
      showHideMobileMenu(_container);
      hideShowMenuOnScroll(_container);
      underlinedLinksHoverAnimation(_container);
      setCurrentYear(_container);
    };

    if (_container !== document) {
      if (!_container.hasAttribute('data-processed')) {
        allFunctions();
        _container.setAttribute('data-processed', 'true');
      }
    } else {
      const currentPageWrapper = _container.querySelector('#page-wrapper');
      allFunctions();
      currentPageWrapper.setAttribute('data-processed', 'true');
    }
  }

  callAllGlobalFunctions();
  /*=====  End of All global functions   ======*/






  /*=============================================
  =              Home page scripts              =
  =============================================*/
  const homePageScripts = function (_container = document) {
    document.documentElement.classList.add('overflow-clip');

    const isMobileDevice = () => window.innerWidth < 768;

    const caseMedia = _container.querySelector('#case-media-component');
    const caseMediaSelector = gsap.utils.selector(caseMedia);
    const caseMediaItems = caseMediaSelector('[data-case-media="item"]');
    const caseMediaInitialItem = caseMediaItems.find(item => item.classList.contains('is-initial'));

    let isMobile = isMobileDevice();
    let paginationEl = _container.querySelector(isMobile ? '#case-slider-mobile-pagination' : '#case-slider-desktop-pagination');

    let mediaItemXRight = windowCurrentWidth > 992 ? '83%' : '65%';
    let mediaItemXLeft = windowCurrentWidth > 992 ? '-83%' : '-65%';

    const commonSlidersOptions = {
      loop: true,
      duration: 18,
      startIndex: 0,
      slidesToScroll: 1,
      align: 'center',
      skipSnaps: true
    };

    let caseMobileSlider = null;

    function syncSlider(_movingSlider, _targetSlider) {
      const selectedIndex = _movingSlider.selectedScrollSnap();
      _targetSlider.scrollTo(selectedIndex);
    }

    const caseMediaWrapper = _container.querySelector('#case-media-wrapper');

    function initMobileCaseSlider() {
      caseMobileSlider = EmblaCarousel(caseMediaWrapper, commonSlidersOptions);
    }

    function destroyMobileCaseSlider() {
      caseMobileSlider.destroy();
      caseMobileSlider = null;
    }

    const updatePagination = () => {
      const currentSlideIndex = textCaseSlider.selectedScrollSnap();
      const tensNumber = Math.floor(currentSlideIndex / 10);
      const onesY = currentSlideIndex === textCaseSlider.slideNodes().length ? 0 : -100 * currentSlideIndex;
      const tensY = -100 * tensNumber;

      const onesElItems = paginationEl.querySelectorAll('[data-case-slider="ones"] span');
      const tensElItems = paginationEl.querySelectorAll('[data-case-slider="tens"] span');

      gsap.to(onesElItems, {
        yPercent: onesY,
        duration: 0.25
      });

      gsap.to(tensElItems, {
        yPercent: tensY,
        duration: 0.25
      });
    };

    gsap.set('[data-case-slider="hidden-digit"]', {
      opacity: 0
    });

    let previousIndex = null;

    const updateSlidesClasses = () => {
      const selectedIndex = textCaseSlider.selectedScrollSnap();
      const slides = textCaseSlider.slideNodes();

      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === selectedIndex);
        caseMediaItems[index].classList.toggle('is-active', index === selectedIndex);

        if (!isMobile) {
          caseMediaItems[index].classList.toggle('is-previous', index === previousIndex);
        }
      });

      previousIndex = selectedIndex;
    };

    const updateSliderState = () => {
      updatePagination();
      updateSlidesClasses();
    };

    const caseSlider = _container.querySelector('#case-slider');
    const textCaseSlider = EmblaCarousel(caseSlider, commonSlidersOptions);

    textCaseSlider.slideNodes().forEach((slide, index) => {
      slide.addEventListener('click', () => {
        textCaseSlider.scrollTo(index);
      });
    });

    if (isMobile) {
      initMobileCaseSlider();

      caseMobileSlider.on('select', () => {
        syncSlider(caseMobileSlider, textCaseSlider);
      });
    }

    textCaseSlider.on('init', () => {
      updateSliderState();

      const slidesCount = String(textCaseSlider.slideNodes().length).padStart(2, '0');

      const onesEl = paginationEl.querySelector('[data-case-slider="ones"]');
      const tensEl = paginationEl.querySelector('[data-case-slider="tens"]');
      const slidesCountEl = paginationEl.querySelector('[data-case-slider="slides-count"]');

      slidesCountEl.replaceChildren();
      slidesCount.split('').forEach(digit => {
        const span = document.createElement('span');
        span.className = 'case_pagination_digit';
        span.textContent = digit;
        slidesCountEl.appendChild(span);
      });

      const ones = Array.from({ length: slidesCount }, (_, i) => i + 1);

      const tens = [...new Set(ones.map(num => Math.floor(num / 10)))];

      tensEl.replaceChildren();
      tens.forEach(ten => {
        const span = document.createElement('span');
        span.textContent = ten;
        tensEl.appendChild(span);
      });

      onesEl.replaceChildren();
      ones.forEach(num => {
        const one = num % 10;
        const span = document.createElement('span');
        span.textContent = one;
        onesEl.appendChild(span);
      });
    });

    function animateCaseMediaActiveItem(_item) {
      let activeItemTl = gsap.timeline({
        defaults: {
          ease: easeSlowStartFastEnd
        }
      });

      activeItemTl
        .set(_item, {
          '--vertex-3-y': '0%',
          '--vertex-4-y': '0%',
          '--transform-x-left': '0%',
          '--transform-y-left': '-20%',
          '--rotation-left': '5deg',
          '--transform-x-right': '0%',
          '--transform-y-right': '-20%',
          '--rotation-right': '-5deg',
          '--image-opacity': 1
        })
        .to(_item, {
          '--vertex-3-y': '100%',
          '--vertex-4-y': '100%',
          '--transform-x-right': mediaItemXRight,
          '--transform-y-right': '-10%',
          '--rotation-right': '15deg',
          '--transform-x-left': mediaItemXLeft,
          '--transform-y-left': '-10%',
          '--rotation-left': '-15deg',
        }, '<');
    }

    textCaseSlider.on('select', () => {
      updateSliderState();

      if (!isMobile) {
        caseMediaItems.forEach(item => {
          const { classList } = item;
          if (classList.contains('is-active')) {
            gsap.set(item, { zIndex: 3 });
            animateCaseMediaActiveItem(item);
          } else if (classList.contains('is-previous')) {
            gsap.set(item, {
              zIndex: 2,
              '--vertex-3-y': '100%',
              '--vertex-4-y': '100%'
            });
          } else {
            gsap.set(item, { clearProps: 'all' });
          }
        });
      } else {
        syncSlider(textCaseSlider, caseMobileSlider);
      }
    });

    const nextButtons = _container.querySelectorAll('[data-case-slider="button-next"]');
    const prevButtons = _container.querySelectorAll('[data-case-slider="button-prev"]');

    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        textCaseSlider.scrollNext();
      });
    });

    prevButtons.forEach(button => {
      button.addEventListener('click', () => {
        textCaseSlider.scrollPrev();
      });
    });

    let isScrolling = false;
    const scrollThreshold = 30; // scroll sensitivity
    const scrollDelay = 500; // animateCaseMediaActiveItem duration

    const handleScroll = direction => {
      if (isScrolling) return;
      isScrolling = true;

      if (direction === 'next') {
        textCaseSlider.scrollNext();
      } else {
        textCaseSlider.scrollPrev();
      }

      setTimeout(() => {
        isScrolling = false;
      }, scrollDelay);
    };

    let scrollVelocity = 0;
    let rafId;

    const resetScrollVelocity = () => {
      scrollVelocity = 0;
      rafId = null;
    };

    document.addEventListener('wheel', event => {
      if (rafId) cancelAnimationFrame(rafId);

      scrollVelocity += Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

      rafId = requestAnimationFrame(() => {
        if (Math.abs(scrollVelocity) > scrollThreshold) {
          handleScroll(scrollVelocity > 0 ? 'next' : 'prev');
        }
        resetScrollVelocity();
      });
    }, { passive: true });

    window.addEventListener('resize', () => {
      const newIsMobile = isMobileDevice();

      if (newIsMobile !== isMobile) {
        if (newIsMobile) {
          initMobileCaseSlider();
        } else {
          destroyMobileCaseSlider();
        }

        paginationEl = _container.querySelector(newIsMobile ? '#case-slider-mobile-pagination' : '#case-slider-desktop-pagination');
        updateSliderState();

        isMobile = newIsMobile;
      }
    });


    gsapMatchMedia.add('(hover: hover)', () => {
      caseMediaItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(
            [
              '[data-case-media="item"].is-active',
              '[data-case-media="item"].is-previous'
            ],
            {
              duration: gsapDefaultDuration / 2,
              ease: easeSlowStartFastEnd,
              '--rotation-right': '13deg',
              '--transform-x-right': '78%',
              '--rotation-left': '-13deg',
              '--transform-x-left': '-78%'
            }
          );
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(
            [
              '[data-case-media="item"].is-active',
              '[data-case-media="item"].is-previous'
            ],
            {
              duration: gsapDefaultDuration / 2,
              ease: easeSlowStartFastEnd,
              '--rotation-right': '15deg',
              '--transform-x-right': mediaItemXRight,
              '--rotation-left': '-15deg',
              '--transform-x-left': mediaItemXLeft
            }
          );
        });
      });

      /*----------  Buttons hover animation  ----------*/
      const handleButtonHover = (buttons, offsetX) => {
        buttons.forEach(button => {
          const icon = button.querySelector('[data-case-slider="button-icon"]');
          if (!icon) return;

          button.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              x: offsetX,
              duration: 0.2
            });
          });

          button.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              x: 0,
              duration: 0.2
            });
          });
        });
      };

      handleButtonHover(prevButtons, -3);
      handleButtonHover(nextButtons, 3);



      /*----------  Case link hover animation  ----------*/
      window.handleCursorMovement(caseMediaItems, 'case-media-cursor', [50, 100, 50, 100], false);

    });
  }

  if (window.location.pathname === '/') {
    homePageScripts();
    applySafariBlendModeFix();
  }
  /*=====    End of Home page scripts    ======*/



  /*=============================================
  =              Contacts page scripts              =
  =============================================*/
  const contactsPageScripts = function (_container = document) {
    document.documentElement.classList.add('overflow-clip');
  }

  if (window.location.pathname.includes('contact')) {
    contactsPageScripts();
  }
  /*=====    End of Home page scripts    ======*/




  /*=============================================
  =              Case page scripts              =
  =============================================*/
  function casePageScripts(_container = document) {
    if (windowCurrentWidth > 991) {
      document.documentElement.classList.add('overflow-clip');
    } else {
      document.documentElement.classList.remove('overflow-clip');
    }

    /*----------    Video lightbox     ----------*/
    const galleryItems = _container.querySelectorAll('[data-case="gallery-item"]');

    gsapMatchMedia.add('(hover: hover)', () => {
      window.handleCursorMovement(galleryItems, '[data-case-watch-btn]');
    });

    const videoLightbox = GLightbox({
      selector: '[data-case-watch-link]',
      videosWidth: '100%',
      autoplayVideos: true,
      openEffect: 'fade',
      closeEffect: 'fade',
      touchNavigation: false,
      draggable: false,
      preload: false,
      plyr: {
        config: {
          fullscreen: {
            enabled: true,
            iosNative: false
          }
        }
      }
    });

    videoLightbox.on('open', () => {
      setTimeout(() => {
        const glightBody = document.getElementById('glightbox-body');
        const playBtn = glightBody.querySelector('.gslide.current [data-plyr="play"]');
        if (playBtn && playBtn.getAttribute('aria-label') === 'Play') {
          playBtn.click();
        }
      }, 1000); // 1000 = videoOverlayOpenTl duration
    });

    const videoOverlay = _container.querySelector('#case-video-overlay');

    const videoOverlayTlProps = {
      ease: easeSharpStartSmoothFinish
    };

    const videoOverlayOpenTl = gsap.timeline({
      paused: true,
      defaults: {
        ...videoOverlayTlProps,
        duration: 1
      }
    });

    videoOverlayOpenTl
      .set(videoOverlay, {
        zIndex: 1000
      })
      .to(videoOverlay, {
        '--_case-page---video-overlay--mask-top-line': '100%'
      });

    const videoOverlayCloseTl = gsap.timeline({
      paused: true,
      defaults: {
        ...videoOverlayTlProps,
        duration: 0.75
      }
    });

    videoOverlayCloseTl
      .to(videoOverlay, {
        '--_case-page---video-overlay--mask-bottom-line': '100%'
      })
      .set(videoOverlay, {
        zIndex: -1
      })
      .set(videoOverlay, {
        '--_case-page---video-overlay--mask-top-line': '0%',
        '--_case-page---video-overlay--mask-bottom-line': '0%'
      });

    document.querySelectorAll('[data-case-watch-btn]').forEach(btn => {
      btn.addEventListener('click', event => {
        event.preventDefault();
        videoOverlayOpenTl.restart();
        const link = btn.querySelector('[data-case-watch-link]');
        setTimeout(() => {
          videoLightbox.open(link);
        }, 750);
      });
    });

    videoLightbox.on('close', () => {
      videoOverlayCloseTl.restart();
    });


    /*----------    Tabs     ----------*/
    const tabs = _container.querySelectorAll('[data-case="tab-link"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('w--current'));
        tab.classList.add('w--current');
      });
    });


    const component = _container.querySelector('#case-component');
    const nextCaseEl = component.querySelector('#next-case');
    const nextPageLink = nextCaseEl.querySelector('[data-case="next-case-link"]');

    if (window.lenisInstanceCasePage) {
      window.lenisInstanceCasePage.destroy();
      window.lenisInstanceCasePage = null;
    }

    gsapMatchMedia.add('(min-width: 992px)', () => {
      const wrapper = component.querySelector('#case-wrapper');
      const title = component.querySelector('#case-title');
      const nextCaseContent = nextCaseEl.querySelector('#next-case-content');
      const nextCaseTitleEl = nextCaseEl.querySelector('#next-case-title');
      const nextElImage = windowCurrentWidth > 991 ? nextCaseEl.querySelector('#next-case-image-desktop') : nextCaseEl.querySelector('#next-case-image-tablet');
      const parallaxItems = component.querySelectorAll('[data-parallax-element]');
      let currentParallaxItemIndex = -1;
      const caseCount = _container.querySelector('#case-count');
      const parallaxItemsCount = parallaxItems.length + 1;
      const parallaxItemsCountText = String(parallaxItemsCount).padStart(2, '0');

      window.lenisInstanceCasePage = new Lenis({
        wrapper: component,
        content: wrapper,
        orientation: 'horizontal',
        gestureOrientation: 'both',
        autoResize: false
      });
      const lenisInstance = window.lenisInstanceCasePage;

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      function waitForMediaToLoad() {
        const mediaElements = component.querySelectorAll('.case_gallery_image, .case_gallery_video');

        const mediaPromises = Array.from(mediaElements).map(media => {
          return new Promise(resolve => {
            if (media.tagName === 'IMG') {
              if (media.complete && media.naturalWidth > 0) {
                resolve();
              } else {
                media.addEventListener('load', resolve, { once: true });
                media.addEventListener('error', resolve, { once: true });
              }
            } else if (media.tagName === 'VIDEO') {
              if (media.readyState >= 4) {
                resolve();
              } else {
                media.addEventListener('canplaythrough', resolve, { once: true });
                media.addEventListener('error', resolve, { once: true });
              }
            }
          });
        });

        return Promise.all(mediaPromises);
      }

      waitForMediaToLoad().then(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            lenisInstance.resize();
            ScrollTrigger.refresh();
          });
        });
      });

      const isNextCaseTransition = JSON.parse(sessionStorage.getItem('barba-next-case-transition') || 'false');

      if (isNextCaseTransition) {
        lenisInstance.stop();
      }

      let isEnd = false;
      let isClicked = false;

      function wheelHandler(event) {
        const scrollPosition = component.scrollLeft;
        const maxScroll = component.scrollWidth - component.clientWidth;
        const distanceToEnd = maxScroll - scrollPosition;

        const { deltaY } = event;

        if (scrollPosition < 400) {
          gsap.to(onesElItems, {
            yPercent: 0,
            duration: 0.25
          });
          currentParallaxItemIndex = -1;
        }

        if (distanceToEnd <= 200) {
          setTimeout(() => {
            isEnd = true;
          }, 1500);
        } else {
          isEnd = false;
        }

        if (!isClicked && isEnd && distanceToEnd <= 200 && deltaY > 0) {
          window.nextTitleCasePageAnimation.scrollTrigger.kill();
          gsap.set(nextCaseTitleEl, { xPercent: window.xToCasePage, force3D: true });
          gsap.set(nextElImage, { '--_case-page---next-case--cover-bg-position-x': window.caseCoverBGPositionXTo });
          nextPageLink.click();
          isClicked = true;
        }
      };

      document.addEventListener('wheel', wheelHandler);

      window.caseWheelHandlers = { wheelHandler };

      caseCount.innerHTML = '';

      parallaxItemsCountText.split('').forEach(digit => {
        const span = document.createElement('span');
        span.className = 'case_pagination_digit';
        span.textContent = digit;
        caseCount.appendChild(span);
      });

      const onesEl = _container.querySelector('#ones');
      const tensEl = _container.querySelector('#tens');
      const ones = Array.from({ length: parallaxItemsCount }, (_, i) => i + 1);
      const tens = [...new Set(ones.map(num => Math.floor(num / 10)))];

      tens.forEach(ten => {
        const span = document.createElement('span');
        span.textContent = ten;
        tensEl.appendChild(span);
      });

      ones.forEach(num => {
        const one = num % 10;
        const span = document.createElement('span');
        span.textContent = one;
        onesEl.appendChild(span);
      });


      gsap.set('[data-case="hidden-digit"]', {
        opacity: 0
      });

      const onesElItems = onesEl.querySelectorAll('span');
      const tensElItems = tensEl.querySelectorAll('span');

      const updatePagination = (_index) => {
        const currentNumber = _index + 1;
        const tensNumber = Math.floor((currentNumber + 1) / 10);
        const onesY = -100 * currentNumber;
        const tensY = -100 * tensNumber;

        gsap.to(onesElItems, {
          yPercent: onesY,
          duration: 0.25
        });

        gsap.to(tensElItems, {
          yPercent: tensY,
          duration: 0.25
        });
      };

      gsap.fromTo(
        title,
        { xPercent: 0 },
        {
          xPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: component,
            start: 'clamp(center center)',
            end: 'clamp(right left)',
            scrub: true,
            scroller: component,
            horizontal: true
          },
        }
      );

      parallaxItems.forEach((item, i) => {
        const itemWidth = item.offsetWidth;
      
        const startValue = itemWidth > windowCurrentWidth ? 'clamp(left right)' : 'clamp(right right)';
        const endValue = itemWidth > windowCurrentWidth ? 'clamp(right left)' : 'clamp(left left)';
      
        gsap.fromTo(item,
          { x: '-2.5rem' },
          {
            x: '2.5rem',
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: startValue,
              end: endValue,
              scrub: true,
              scroller: component,
              horizontal: true,
              onUpdate: ({ progress }) => {
                if (progress > 0 && progress < 0.55 && currentParallaxItemIndex !== i) {
                  currentParallaxItemIndex = i;
                  updatePagination(i);
                }
              }
            },
          });
      });

      window.xFromCasePage = nextCaseTitleEl.getAttribute('data-style') === 'multi-lines' ? 47.5 : 0;
      window.xToCasePage = nextCaseTitleEl.getAttribute('data-style') === 'multi-lines' ? 0 : -47.5;

      window.nextTitleCasePageAnimation = gsap.fromTo(nextCaseTitleEl,
        {
          xPercent: window.xFromCasePage,
          force3D: true,
        },
        {
          xPercent: window.xToCasePage,
          force3D: true,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCaseContent,
            start: 'clamp(left right)',
            end: 'clamp(right right)',
            scrub: true,
            scroller: component,
            horizontal: true
          }
        });

      window.caseCoverBGPositionXFrom = component.dataset.style === 'jlo-beauty' ? '75%' : '25%';
      window.caseCoverBGPositionXTo = component.dataset.style === 'jlo-beauty' ? '100%' : '0%';

      gsap.fromTo(
        nextElImage,
        { '--_case-page---next-case--cover-bg-position-x': window.caseCoverBGPositionXFrom },
        {
          '--_case-page---next-case--cover-bg-position-x': window.caseCoverBGPositionXTo,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCaseContent,
            start: 'clamp(left right)',
            end: 'clamp(right right)',
            scrub: true,
            scroller: component,
            horizontal: true
          },
        }
      );
    });

    gsapMatchMedia.add('(max-width: 991px)', () => {
      let touchStartY = 0;
      let isNotClicked = false;

      function touchStartHandler(event) {
        touchStartY = event.touches[0].clientY;
      }

      function touchEndHandler(event) {
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const touchEndY = event.changedTouches[0].clientY;

        if (scrollPosition >= pageHeight && touchStartY - touchEndY > 50 && !isNotClicked) {
          event.preventDefault();
          nextPageLink?.click();
          isNotClicked = true;
        }
      }

      document.addEventListener('touchstart', touchStartHandler, { passive: false });
      document.addEventListener('touchend', touchEndHandler);

      window.caseTouchHandlers = { touchStartHandler, touchEndHandler };
    });


    const backButton = _container.querySelector('#case-back');

    function handleBackClick(event) {
      event.preventDefault();

      if (barba.history.size > 1) {
        window.history.back();
      } else {
        barba.go('/work');
      }
    }

    backButton.removeEventListener('click', handleBackClick);
    backButton.addEventListener('click', handleBackClick);

  }

  function removeCasePageHandlers() {
    if (window.caseTouchHandlers) {
      document.removeEventListener('touchstart', window.caseTouchHandlers.touchStartHandler);
      document.removeEventListener('touchend', window.caseTouchHandlers.touchEndHandler);
      delete window.caseTouchHandlers;
    }

    if (window.caseWheelHandlers) {
      document.removeEventListener('wheel', window.caseWheelHandlers.wheelHandler);
      delete window.caseWheelHandlers;
    }
  }

  if (window.location.pathname.includes('case')) {
    casePageScripts();
  }
  /*=====       Case page scripts       ======*/




  /*=============================================
  =            Work page scripts            =
  =============================================*/
  const workPageScripts = function (_container = document) {
    if (windowCurrentWidth > 991) {
      document.documentElement.classList.add('overflow-clip');
    } else {
      document.documentElement.classList.remove('overflow-clip');
    }

    let pageWrapper = _container === document ? _container.querySelector('#page-wrapper') : _container;
    const workList = _container.querySelector('#work-list');
    const items = _container.querySelectorAll('[data-work-item]');

    gsapMatchMedia.add('(hover: hover)', () => {
      const workBgDesktop = _container.querySelector('#work-bg-desktop');
      const initialWorkBgDesktopImage = gsapGetStyle(workBgDesktop, 'backgroundImage');
      items.forEach(item => {
        if (!item.hasListener) {
          const bgImage = item.getAttribute('data-bg-desktop');

          item.addEventListener('mouseenter', () => {
            const currentImageUrl = gsapGetStyle(workBgDesktop, 'backgroundImage');
            if (currentImageUrl !== `url(${bgImage})`) {
              gsap.set(workBgDesktop, { 'backgroundImage': `url(${bgImage})` });
              gsap.fromTo(workBgDesktop,
                {
                  scale: 1.2,
                  ease: easeSharpStartSmoothFinish
                },
                {
                  scale: 1,
                  ease: easeSharpStartSmoothFinish
                }
              );
            }
          });

          item.addEventListener('click', () => {
            pageWrapper.classList.add('is-leaving');
          });
          item.hasListener = true;
        }
      });

      workList.addEventListener('mouseleave', (e) => {
        if (!pageWrapper.classList.contains('is-leaving')) {
          gsap.set(workBgDesktop, { 'backgroundImage': initialWorkBgDesktopImage });
          gsap.fromTo(workBgDesktop,
            {
              scale: 1.2,
              ease: easeSharpStartSmoothFinish
            },
            {
              scale: 1,
              ease: easeSharpStartSmoothFinish
            }
          );
        }
      });
    });


    if (windowCurrentWidth < 992) {
      const workBgMobile = _container.querySelector('#work-bg-mobile');
      const observerOptions = {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.5,
      };

      let currentVisibleItem = null;
      let itemCounter = 1;

      function updateBackground(image) {
        if (image) {
          const img = new Image();
          img.onload = function () {
            gsap.set(workBgMobile, { 'backgroundImage': `url(${image})` });
          };
          img.src = image;
        }
      }

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateBackground(entry.target.getAttribute('data-bg-tablet'));
            currentVisibleItem = entry.target;

            if (itemCounter === 2) {
              pageWrapper.removeAttribute('data-initial');
            } else {
              itemCounter++;
            }
          } else if (!entry.isIntersecting && currentVisibleItem === entry.target) {
            //updateBackground(null);
            currentVisibleItem = null;
          }
        });
      }, observerOptions);

      items.forEach((item) => observer.observe(item));
    }
  }

  const preloadWorkImages = function (_container = document) {
    const items = _container.querySelectorAll('[data-work-item]');
    const preloadImages = [];
    
    items.forEach((item) => {
        const imgSrc = windowCurrentWidth > 991 ? item.getAttribute("data-bg-desktop") : item.getAttribute("data-bg-tablet");
        if (imgSrc) {
            const img = new Image();
            img.src = imgSrc;
            preloadImages.push(img);
            console.log(imgSrc)
        }
    });
    
    sessionStorage.setItem('preload-work-images', true)
  }

  if (window.location.pathname.includes('work')) {
    preloadWorkImages();
    workPageScripts();
  }
  /*=====  End of Work page scripts  ======*/




  /*=============================================
  =            Inspired page scripts            =
  =============================================*/
  const inspiredPageScripts = function (_container = document) {
    document.documentElement.classList.add('overflow-clip');

    document.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );

    document.addEventListener('keydown', function (event) {
      if (
        event.ctrlKey &&
        (event.key === '+' || event.key === '-' || event.key === '0')
      ) {
        event.preventDefault();
      }
    });

    const gallery = _container.querySelector('#gallery');
    const galleryInner = gallery.querySelector('#gallery-inner');
    const cursor = _container.querySelector('#gallery-cursor');

    const cursorRect = cursor.getBoundingClientRect();
    const cursorWidthHalf = cursorRect.width / 2;
    const cursorHeightHalf = cursorRect.height / 2;
    const cursorLeft = cursorRect.left;
    const cursorTop = cursorRect.top;

    window.addEventListener('load', () => {
      gallery.scrollLeft = (gallery.scrollWidth - gallery.clientWidth) / 2;
      gallery.scrollTop = (gallery.scrollHeight - gallery.clientHeight) / 2;
    });

    const speed = 1.3;
    const smoothing = 0.1;
    const zoomOutScale = 1;
    const zoomSpeed = 0.08;
    const zoomInitialScale = 1.25;

    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;
    let targetScrollLeft, targetScrollTop;
    let animationFrame;
    let currentScale = zoomInitialScale;
    let zoomFrame;

    galleryInner.style.transform = `scale(${currentScale})`

    function smoothMove() {
      gallery.scrollLeft += (targetScrollLeft - gallery.scrollLeft) * smoothing;
      gallery.scrollTop += (targetScrollTop - gallery.scrollTop) * smoothing;

      animationFrame = requestAnimationFrame(smoothMove);
    }

    function applyZoom(targetScale) {
      cancelAnimationFrame(zoomFrame);

      function animateZoom() {
        currentScale += (targetScale - currentScale) * zoomSpeed;
        galleryInner.style.transform = `scale(${currentScale})`;

        if (Math.abs(currentScale - targetScale) > 0.001) {
          zoomFrame = requestAnimationFrame(animateZoom);
        }
      }

      animateZoom();
    }

    gallery.addEventListener('mousedown', (e) => {
      isDragging = true;
      cursor.classList.add('is-active');
      gallery.classList.add('is-active');
      startX = e.pageX;
      startY = e.pageY;
      scrollLeft = gallery.scrollLeft;
      scrollTop = gallery.scrollTop;
      targetScrollLeft = scrollLeft;
      targetScrollTop = scrollTop;
      cancelAnimationFrame(animationFrame);
      smoothMove();
      applyZoom(zoomOutScale);
    });

    gallery.addEventListener('mouseup', () => {
      isDragging = false;
      cursor.classList.remove('is-active');
      gallery.classList.remove('is-active');
      applyZoom(zoomInitialScale);
    });

    gallery.addEventListener('mouseleave', () => {
      isDragging = false;
      cursor.classList.remove('is-active');
      gallery.classList.remove('is-active');
      applyZoom(zoomInitialScale);
    });

    gallery.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const deltaX = (e.pageX - startX) * speed;
      const deltaY = (e.pageY - startY) * speed;

      targetScrollLeft = scrollLeft - deltaX;
      targetScrollTop = scrollTop - deltaY;
    });

    gallery.addEventListener('touchstart', (e) => {
      gallery.classList.add('is-active');
      isDragging = true;
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
      scrollLeft = gallery.scrollLeft;
      scrollTop = gallery.scrollTop;
      targetScrollLeft = scrollLeft;
      targetScrollTop = scrollTop;
      cancelAnimationFrame(animationFrame);
      smoothMove();
      applyZoom(zoomOutScale);
    });

    gallery.addEventListener('touchend', () => {
      gallery.classList.remove('is-active');
      isDragging = false;
      applyZoom(zoomInitialScale);
    });

    gallery.addEventListener('touchmove', (e) => {
      if (!isDragging) return;

      const deltaX = (e.touches[0].pageX - startX) * speed;
      const deltaY = (e.touches[0].pageY - startY) * speed;

      targetScrollLeft = scrollLeft - deltaX;
      targetScrollTop = scrollTop - deltaY;
    });

    gsapMatchMedia.add('(hover: hover)', () => {
      let isOverElement = false;
      window.addEventListener('pointermove', e => {
        let clnX = e.clientX;
        let clnY = e.clientY;

        let tagName = e.target.tagName.toLowerCase();
        let isTargetValid = tagName === 'a' || tagName === 'button';

        if (isTargetValid && !isOverElement) {
          isOverElement = true;
          cursor.classList.add('is-hidden');
        } else if (!isTargetValid && isOverElement) {
          isOverElement = false;
          cursor.classList.remove('is-hidden');
        }

        let currentX = clnX - cursorLeft - cursorWidthHalf;
        let currentY = clnY - cursorTop - cursorHeightHalf;

        gsap.set(cursor, {
          x: currentX,
          y: currentY
        });
      });
    });

    gsapMatchMedia.add('(hover: none)', () => {
      gsap.set(cursor, { display: 'none' });
    });
  }

  if (window.location.pathname.includes('inspired')) {
    inspiredPageScripts();
  }
  /*=====  End of Inspired page scripts  ======*/




  /*=============================================
  =            About page scripts            =
  =============================================*/
  const aboutPageScripts = function (_container = document) {
    document.documentElement.classList.remove('overflow-clip');

    /*----------  Lenis scroll  ----------*/
    if (window.lenisInstanceAboutPage) {
      window.lenisInstanceAboutPage.destroy();
      window.lenisInstanceAboutPage = null;
      document.documentElement.classList.remove('lenis');
    }

    const sectionAbout = _container.querySelector('#section-about');
    const sectionAboutBG = sectionAbout.querySelector('#about-bg');
    const header = _container.querySelector('#header');
    const intro = _container.querySelector('#intro');

    const sectionCelebrities = _container.querySelector('#about-celebrities');
    const celebritiesImage = sectionCelebrities.querySelector('#about-celebrities-image');
    const celebritiesTitle = sectionCelebrities.querySelector('[data-about-title="celebrities"]');
    const celebritiesRows = sectionCelebrities.querySelectorAll('[data-about-text-row="celebrities"]');

    const aboutImage = sectionAbout.querySelector('#section-about-image');
    const servicesTitle = sectionAbout.querySelector('[data-about-title="services"]');
    const servicesRows = sectionAbout.querySelectorAll('[data-about-text-row="services"]');
    const publicationsTitle = sectionAbout.querySelector('[data-about-title="publications"]');
    const publicationsRows = sectionAbout.querySelectorAll('[data-about-text-row="publications"]');
    const locationsTitle = sectionAbout.querySelector('[data-about-title="locations"]');
    const locationsText = sectionAbout.querySelector('[data-about-text="locations"]');
    const locationsRows = sectionAbout.querySelectorAll('[data-about-text-row="city"]');

    const aboutTextTween = {
      duration: 0.1,
      stagger: {
        grid: 'auto',
        from: 'start',
        axis: 'y',
        each: 0.05
      }
    };

    gsapMatchMedia.add('(min-width: 1201px)', () => {
      window.lenisInstanceAboutPage = new Lenis({
        overflow: false
      });
      const lenisInstance = window.lenisInstanceAboutPage;

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    });

    const aboutSectionImageTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionAbout,
        start: 'top 20%'
      },
      defaults: {
        ease: easeSharpStartSmoothFinish,
        duration: 1.15
      }
    });

    const aboutSectionTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionAbout,
        start: 'top 20%'
      },
      defaults: {
        ease: easeSharpStartSmoothFinish
      }
    });

    aboutSectionImageTl
      .to(aboutImage, {
        opacity: 1
      })
      .to(aboutImage, {
        scale: 1
      }, '<30%');

    aboutSectionTextTl
      .to(
        [
          servicesTitle,
          servicesRows,
          publicationsTitle,
          publicationsRows,
          locationsTitle,
          locationsText,
          locationsRows
        ],
        {
          opacity: 1,
          ...aboutTextTween
        }
      );

    
    /*----------  Collaborators list animation  ----------*/
    const collaboratorsList = _container.querySelector('#collaborators-list');
    const collaboratorsTitle = collaboratorsList.querySelector('#collaborators-title');
    const collaboratorsRows = [];

    let dataAttribute = 'data-items-list-mobile';

    if (windowCurrentWidth > 991) {
      dataAttribute = 'data-items-list-desktop';
    } else if (windowCurrentWidth > 767) {
      dataAttribute = 'data-items-list-tablet';
    }

    const items = collaboratorsList.querySelectorAll(`[${dataAttribute}]`);
    const rowMap = new Map();

    items.forEach(item => {
      const rowIndex = item.getAttribute(dataAttribute);
      if (!rowMap.has(rowIndex)) {
        rowMap.set(rowIndex, []);
      }
      rowMap.get(rowIndex).push(item);
    });

    collaboratorsRows.push(...Array.from(rowMap.values()));

    const collaboratorsTl = gsap.timeline({
      scrollTrigger: {
        trigger: collaboratorsList,
        start: 'top 70%'
      },
      defaults: {
        ease: easeSharpStartSmoothFinish
      }
    });

    collaboratorsTl
      .from(
        [
          collaboratorsTitle,
          ...collaboratorsRows
        ],
        {
          opacity: 0,
          ...aboutTextTween
        }
      );


    const celebritiesTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionCelebrities,
        start: 'top 50%'
      },
      defaults: {
        ease: easeSharpStartSmoothFinish
      }
    });

    const celebritiesImageTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionCelebrities,
        start: 'top 50%'
      },
      defaults: {
        ease: easeSharpStartSmoothFinish,
        duration: 1.15
      }
    });

    celebritiesTextTl
      .from(
        [
          celebritiesTitle,
          celebritiesRows
        ],
        {
          opacity: 0,
          ...aboutTextTween
        }
      );

    celebritiesImageTl
      .from(celebritiesImage, {
        scale: 1.3
      });


    const aboutSectionMaskTopInitPoint = getAboutSectionMaskTopInitialPoint();

    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionAbout,
        start: 'top bottom',
        end: 'top -20%',
        invalidateOnRefresh: true,
        scrub: true,
        onLeave: () => {
          if (window.scrollY > header.offsetHeight) {
            header.setAttribute('data-disable-hiding', 'false');
          }
        }
      }
    });

    if (_container === document) {
      if (windowCurrentWidth > 1200) {
        gsap.set(sectionAbout, {
          '--_about-page---intro-image--mask-gap': aboutSectionMaskTopInitPoint
        });
      }
    }

    if (windowCurrentWidth > 1200) {
      aboutTl
        .set(sectionAbout, {
          '--_about-page---intro-image--mask-gap': aboutSectionMaskTopInitPoint
        });
    }

    aboutTl
      .to(sectionAboutBG, {
        '--_about-page---intro-image--bg-scale': 1
      });

    if (windowCurrentWidth > 1200) {
      aboutTl
        .to(sectionAbout, {
          '--_about-page---intro-image--mask-gap': '0rem'
        }, '<');
    }


    /*----------  Cities animation  ----------*/
    gsapMatchMedia.add('(hover: hover)', () => {
      const cityItems = _container.querySelectorAll('[data-about-city-item]');
      const cityImages = _container.querySelectorAll('[data-about-city-image]');

      cityItems.forEach(item => {
        item.addEventListener('mouseenter', () => handleMouseEnter(item));
        item.addEventListener('mouseleave', () => handleMouseLeave(item));
      });

      function handleMouseEnter(item) {
        const itemValue = item.dataset.aboutCityItem;
        const targetImage = [...cityImages].find(image => image.dataset.aboutCityImage === itemValue);

        if (targetImage) {
          gsap.timeline({ delay: 0.15 })
            .set(targetImage, {
              '--_about-page---city-image--scale': '1.2'
            })
            .to(targetImage, {
              '--_about-page---city-image--opacity': '1'
            })
            .to(targetImage, {
              '--_about-page---city-image--mask-top-line': '0%',
              '--_about-page---city-image--mask-bottom-line': '100%',
              '--_about-page---city-image--scale': '1'
            }, '<30%');
        }
      }

      function handleMouseLeave(item) {
        const itemValue = item.dataset.aboutCityItem;
        const targetImage = [...cityImages].find(image => image.dataset.aboutCityImage === itemValue);

        if (targetImage) {
          gsap.timeline()
            .to(targetImage, {
              '--_about-page---city-image--mask-top-line': '50%',
              '--_about-page---city-image--mask-bottom-line': '50%',
              '--_about-page---city-image--scale': '1.2'
            })
            .to(targetImage, {
              '--_about-page---city-image--opacity': '0'
            }, '<70%')
            .set(targetImage, {
              clearProps: 'all'
            });
        }
      }
    });

    gsapMatchMedia.add('(max-width: 1200px) and (hover: none)', () => {
      const cityImages = _container.querySelectorAll('[data-about-city-image]');
      const cityImagesArray = gsap.utils.toArray(cityImages).slice(1);

      gsap.set(cityImages, {
        '--_about-page---city-image--opacity': '1',
      });

      const cityTweenProps = {
        '--_about-page---city-image--mask-top-line': '0%',
        '--_about-page---city-image--mask-bottom-line': '100%',
        '--_about-page---city-image--scale': '1'
      }

      gsap.to(cityImages[0], {
        duration: 1,
        ...cityTweenProps
      });

      const citiesTl = gsap.timeline({
        defaults: {
          ease: easeSharpStartSmoothFinish,
          duration: 1
        },
        repeat: -1
      });

      cityImagesArray.forEach(city => {
        citiesTl
          .to(city, {
            delay: 4,
            ...cityTweenProps
          });
      });
    });

  }

  function saveAboutElementStyles(_container) {
    const sectionAbout = _container.querySelector('#section-about');
    const aboutBG = _container.querySelector('#about-bg');
    sectionAbout.classList.add('is-fixed-on-leave');
    gsap.set(sectionAbout, {
      '--_about-page---intro-image--mask-gap-current': getCssVarValue(sectionAbout, '--_about-page---intro-image--mask-gap'),
      '--_about-page---intro-image--bg-scale-current': getCssVarValue(aboutBG, '--_about-page---intro-image--bg-scale')
    });
  }

  if (window.location.pathname.includes('about')) {
    aboutPageScripts();
  }
  /*=====  End of About page scripts  ======*/

});