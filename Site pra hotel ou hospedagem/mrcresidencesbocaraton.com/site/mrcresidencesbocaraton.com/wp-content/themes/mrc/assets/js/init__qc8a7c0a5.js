
// Lazy load background videos after window.onload (PageSpeed friendly)
window.addEventListener('load', function () {
    var videos = document.querySelectorAll('.lazy-bg-video');
    videos.forEach(function (video) {
        if (getComputedStyle(video).display === 'none') return;
        var source = video.querySelector('source[data-src]');
        if (source && !source.src) {
            source.src = source.getAttribute('data-src');
            video.load();
        }
    });
});
// JS Object size method
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// PHP like empty() function
function empty(v) {
    return !v || typeof v == 'undefined' || (typeof v == 'string' && v.replace(/[0| ]+/gm, '') === '') || (typeof v == 'object' && !Object.size(v));
}

(function ($) {

    // Add to your init.js
    function smoothScroll() {
        let isScrolling = false;
        let scrollTarget = 0;
        let scrollCurrent = 0;
        let isJQueryAnimating = false;

        function updateScroll() {
            // Don't update if jQuery is animating
            if (isJQueryAnimating) {
                requestAnimationFrame(updateScroll);
                return;
            }

            scrollCurrent += (scrollTarget - scrollCurrent) * 0.1; // Adjust 0.1 for smoothness
            window.scrollTo(0, scrollCurrent);

            if (Math.abs(scrollTarget - scrollCurrent) > 0.5) {
                requestAnimationFrame(updateScroll);
            } else {
                isScrolling = false;
            }
        }

        window.addEventListener('wheel', function (e) {
            // Don't intercept wheel events if jQuery is animating, modal is open, or over a custom dropdown
            if (
                isJQueryAnimating ||
                $('body').hasClass('modal-open') ||
                $(e.target).closest('.cs-dropdown').length > 0
            ) {
                return;
            }

            e.preventDefault();
            scrollTarget += e.deltaY * 0.5; // Adjust multiplier for scroll speed

            // Get the correct maximum scroll height
            var maxScrollHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            ) - window.innerHeight;

            scrollTarget = Math.max(0, Math.min(scrollTarget, maxScrollHeight));

            if (!isScrolling) {
                isScrolling = true;
                updateScroll();
            }
        }, { passive: false });

        // Sync scroll target when page is manually scrolled (without wheel event)
        var scrollTimeout;
        window.addEventListener('scroll', function () {
            // Clear previous timeout
            clearTimeout(scrollTimeout);

            // Set a timeout to sync after scroll stops
            scrollTimeout = setTimeout(function () {
                if (!isJQueryAnimating && !isScrolling) {
                    scrollTarget = window.pageYOffset || document.documentElement.scrollTop;
                    scrollCurrent = scrollTarget;
                }
            }, 100);
        });

        // Expose function to disable smooth scroll during jQuery animations
        window.setJQueryAnimating = function (animating) {
            isJQueryAnimating = animating;
            if (!animating) {
                // When jQuery animation ends, sync our scroll target with actual position
                setTimeout(function () {
                    scrollTarget = window.pageYOffset || document.documentElement.scrollTop;
                    scrollCurrent = scrollTarget;
                }, 100);
            }
        };
    }

    if ($(window).width() > 1024) {
        smoothScroll();
    }


    // Initialize small header state for mobile devices only
    function initSmallHeaderState() {
        var smallHeader = $('header.small');
        if ($(window).width() <= 768) {
            // Mobile - remove hidden class since CSS overrides it anyway
            smallHeader.removeClass('visible');
        }
        // Desktop keeps the hidden class from HTML
    }

    function canPlayInViewVideo(video) {
        if (!video) {
            return false;
        }

        var $slide = $(video).closest('.swiper-slide');
        if ($slide.length && !$slide.hasClass('swiper-slide-active')) {
            return false;
        }

        return true;
    }

    function isElementInViewport(el) {
        if (!el) {
            return false;
        }

        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;

        return (
            rect.top < windowHeight &&
            rect.bottom > 0 &&
            rect.left < windowWidth &&
            rect.right > 0
        );
    }

    function playInViewVideo(video) {
        if (!canPlayInViewVideo(video)) {
            return;
        }

        var playPromise = video.play();
        if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(function () {
                // Ignore autoplay restrictions; will retry on next intersection
            });
        }
    }

    function forcePlayVideo(video) {
        if (!video) {
            return;
        }

        video.muted = true;
        video.playsInline = true;

        var attemptPlay = function () {
            var playPromise = video.play();
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.then(function () {
                }).catch(function (err) {
                    // Retry after a small delay
                    setTimeout(function () {
                        var retryPromise = video.play();
                        if (retryPromise && typeof retryPromise.then === 'function') {
                            retryPromise.catch(function () {
                            });
                        }
                    }, 100);
                });
            }
        };

        if (video.readyState >= 2) {
            attemptPlay();
        } else {
            video.addEventListener('loadeddata', attemptPlay, { once: true });
            // Also set a timeout fallback in case loadeddata doesn't fire
            setTimeout(function () {
                if (!video.playing && video.readyState >= 2) {
                    attemptPlay();
                }
            }, 500);
        }
    }

    function resetOutOfViewVideo(video) {
        if (!video) {
            return;
        }

        if (!video.paused) {
            video.pause();
        }

        try {
            video.currentTime = 0;
        } catch (e) {
        }
    }

    function initInViewVideos() {
        var videos = document.querySelectorAll('.js-inview-video');
        if (!videos.length) {
            return;
        }

        videos.forEach(function (video) {
            // Force preload and show first frame
            video.setAttribute('preload', 'auto');
            video.load();

            if (video.readyState >= 2) {
                if (video.currentTime === 0) {
                    video.currentTime = 0.01;
                }
            } else {
                video.addEventListener('loadeddata', function () {
                    if (video.currentTime === 0) {
                        video.currentTime = 0.01;
                    }
                }, { once: true });
            }
        });

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        playInViewVideo(entry.target);
                    } else if (entry.intersectionRatio === 0) {
                        resetOutOfViewVideo(entry.target);
                    }
                });
            }, { threshold: 0 });

            videos.forEach(function (video) {
                observer.observe(video);
            });
        } else {
            // Fallback: attempt to play immediately if in view
            videos.forEach(function (video) {
                playInViewVideo(video);
            });
        }
    }

    // Apply immediately when DOM is ready
    $(document).ready(function () {
        initSmallHeaderState();
        initLottieAnimation();
        handleCookiebotMobile();

        // Adjust video size immediately when DOM is ready
        adjustVideoSize();

        // Initialize contained image galleries
        initContainedImageGalleries();

        // Initialize in-view videos (contained-image + full-width-image)
        initInViewVideos();

        // Initialize large gallery tabs with delay and error handling
        setTimeout(function () {
            try {
                initLargeGalleries();
            } catch (error) {
                console.warn('Large gallery initialization error:', error);
            }
        }, 100);

        // Init Swiper for simple-swiper (except history-slider)
        $('.simple-swiper').each(function (index, el) {
            // If inside .history-slider, skip here (handled below)
            if ($(el).closest('.history-slider').length) return;

            var $el = $(el);
            var swiper = new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                allowTouchMove: false,
                simulateTouch: false,
                touchRatio: 0,
                shortSwipes: false,
                longSwipes: false,
                followFinger: false,
                navigation: {
                    nextEl: $el.find('.swiper-button-next')[0],
                    prevEl: $el.find('.swiper-button-prev')[0],
                },
                pagination: {
                    el: $el.find('.swiper-pagination')[0],
                    clickable: true,
                },
                autoHeight: false,
                on: {
                    slideChangeTransitionStart: function () {
                        var videos = el.querySelectorAll('.js-inview-video');
                        videos.forEach(function (video) {
                            var $slide = $(video).closest('.swiper-slide');
                            if (!$slide.hasClass('swiper-slide-active')) {
                                resetOutOfViewVideo(video);
                            }
                        });
                    },
                    slideChangeTransitionEnd: function () {
                        var activeVideo = el.querySelector('.swiper-slide-active .js-inview-video');
                        if (activeVideo) {
                            resetOutOfViewVideo(activeVideo);
                            if (activeVideo.currentTime === 0) {
                                activeVideo.currentTime = 0.01;
                            }
                            forcePlayVideo(activeVideo);
                        } else {
                        }
                    },
                    init: function () {
                        var activeVideo = el.querySelector('.swiper-slide-active .js-inview-video');
                        if (activeVideo) {
                            resetOutOfViewVideo(activeVideo);
                            if (activeVideo.currentTime === 0) {
                                activeVideo.currentTime = 0.01;
                            }
                            forcePlayVideo(activeVideo);
                        } else {
                        }
                    }
                }
            });

            // Extra: Add CSS to prevent dragging via pointer events
            $el.find('.swiper-wrapper').css({
                'pointer-events': 'none'
            });
            $el.find('.swiper-slide').css({
                'pointer-events': 'auto'
            });
        });

        // Init Swiper for small-swiper (except history-slider)
        $('.small-swiper').each(function (index, el) {
            new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: false,
                pagination: false,
                autoHeight: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 1000, // 1s transition duration
                autoplay: {
                    delay: 5000, // 5s delay before next slide
                    disableOnInteraction: false,
                }
            });
        });

        // News category filter functionality
        function initNewsFilter() {
            $('#category-filter').on('change', function () {
                var selectedCategory = $(this).val();

                if (selectedCategory === '') {
                    // Show all posts
                    $('.news-item').show();
                } else {
                    // Hide all posts first
                    $('.news-item').hide();

                    // Show posts that match the selected category
                    $('.news-item').each(function () {
                        var postCategories = $(this).data('categories').split(',');
                        if (postCategories.includes(selectedCategory)) {
                            $(this).show();
                        }
                    });
                }
            });
        }

        if ($('.contact_wrap').length) {
            $('.form_wrap').addClass('in-view');
        }

        if ($('.downloads-block').length) {
            $('.fadein-wrap').addClass('in-view');
        }

        // Initialize news filter when on news page
        if ($('#category-filter').length) {
            initNewsFilter();
        }

        // Handle anchor links from other pages (hash in URL on page load)
        if (window.location.hash) {
            setTimeout(function () {
                var target = $(window.location.hash);
                if (target.length) {
                    // Disable custom smooth scroll during jQuery animation
                    if (typeof window.setJQueryAnimating === 'function') {
                        window.setJQueryAnimating(true);
                    }

                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 40
                    }, 1000, function () {
                        // Re-enable custom smooth scroll after animation completes
                        if (typeof window.setJQueryAnimating === 'function') {
                            window.setJQueryAnimating(false);
                        }
                    });
                }
            }, 500); // Small delay to ensure page is fully loaded
        }
    });


    $(window).scroll(function () {
        // run in view animations
        fadeIn();

        var header = $('#header');
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var smallHeader = $('header.small');

        // Small header functionality - track scroll direction and position
        if (typeof $(window).data('lastScrollTop') === 'undefined') {
            $(window).data('lastScrollTop', 0);
        }

        var lastScrollTop = $(window).data('lastScrollTop');
        var isScrollingDown = scrollTop > lastScrollTop;
        var isScrollingUp = scrollTop < lastScrollTop;

        // Update last scroll position
        $(window).data('lastScrollTop', scrollTop);

        // Small header show/hide logic
        if ($(window).width() <= 768) {
            // Mobile devices - scroll-based show/hide
            if (isScrollingDown) {
                // Scrolling down - hide header
                smallHeader.addClass('hidden').removeClass('visible');
            } else if (isScrollingUp) {
                // Scrolling up - show header
                smallHeader.removeClass('hidden').addClass('visible');
            }
        } else {
            // Desktop behavior
            if (scrollTop > windowHeight) { // More than 100vh
                if (isScrollingUp && !smallHeader.hasClass('visible')) {
                    // Scrolling up and header not visible - show it
                    smallHeader.removeClass('hidden').addClass('visible');
                } else if (isScrollingDown && smallHeader.hasClass('visible')) {
                    // Scrolling down and header visible - hide it
                    smallHeader.removeClass('visible').addClass('hidden');
                }
            } else {
                // Less than 100vh - always hide
                smallHeader.removeClass('visible').addClass('hidden');
            }
        }

        // Custom parallax effect for fixed hero section
        var parallaxDistance = 13;
        var parallaxOffset = scrollTop / parallaxDistance; // Calculate the offset

        // Apply the parallax transform - moving up as user scrolls down
        $('.parallax_wrap').css({
            'transform': 'translateY(' + (-parallaxOffset) + 'px)'
        });

        var maxScroll = 500;
        var minOpacity = 0.4;
        var maxOpacity = 0.8;

        // Calculate opacity based on scroll position
        var scrollPercent = Math.min(scrollTop / maxScroll, 1); // Cap at 1
        var currentOpacity = minOpacity + (maxOpacity - minOpacity) * scrollPercent;
        // Apply the calculated opacity
        $('.hero_wrap .parallax_wrap .tint-overlay').css('opacity', currentOpacity);

        if (scrollTop >= 100) {
            $('.hero_wrap').addClass('tinted')
            $('.scroll-indicator').addClass('hidden')
            $('.hero_wrap .content_wrap').addClass('hidden')
            $('.hero_wrap .background-lottie').addClass('hidden')

        } else {
            $('.hero_wrap').removeClass('tinted');
            $('.hero_wrap').addClass('tinted')
            $('.scroll-indicator').removeClass('hidden')
            $('.hero_wrap .content_wrap').removeClass('hidden');
            $('.hero_wrap .background-lottie').removeClass('hidden')
        }

    });

    // fire Swiper Ready event
    if (typeof Swiper !== undefined) {
        document.dispatchEvent(new Event("SwiperReady"));
    }

    // smooth scroll to anchor point
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();

            // Disable custom smooth scroll during jQuery animation
            if (typeof window.setJQueryAnimating === 'function') {
                window.setJQueryAnimating(true);
            }

            $('html, body').stop().animate({
                scrollTop: target.offset().top - 40
            }, 1000, function () {
                // Re-enable custom smooth scroll after animation completes
                if (typeof window.setJQueryAnimating === 'function') {
                    window.setJQueryAnimating(false);
                }
            });
        }
    });

    // scroll indicator click - scroll 100vh down
    $('.scroll-indicator').on('click', function (event) {
        event.preventDefault();

        var currentScrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var targetScrollTop = currentScrollTop + windowHeight;

        // Disable custom smooth scroll during jQuery animation
        if (typeof window.setJQueryAnimating === 'function') {
            window.setJQueryAnimating(true);
        }

        $('html, body').stop().animate({
            scrollTop: targetScrollTop
        }, 1000, function () {
            // Re-enable custom smooth scroll after animation completes
            if (typeof window.setJQueryAnimating === 'function') {
                window.setJQueryAnimating(false);
            }
        });
    });

    // Menu toggle functionality
    $('.menu_open').on('click', function (event) {
        event.preventDefault();

        var $sideMenu = $('.side-menu');
        var $burger = $(this).find('.burger');

        // Toggle visible class on side menu
        $sideMenu.toggleClass('visible');

        // Toggle opened class on burger
        $burger.toggleClass('opened');
    });


    $(window).on("load", function () {

        if ($('.hero_wrap').length) {
            $('.content_wrap').addClass('visible');
            $('.scroll-indicator').addClass('visible')
            // $('#scroll').addClass('visible');
        }

        $("select").tSelectbox({ firstIsPlaceholder: true });

        // Remove loading-select class after tSelectbox is initialized
        setTimeout(function () {
            $('.loading-select').removeClass('loading-select');
        }, 100);

        $('#page-transition').removeClass('fade-in').addClass('fade-out');

        if ($('.homepage_wrap').length) {

            setTimeout(function () {
                $('.hero_wrap .content_wrap').fadeIn('slow');
            }, 1500); // Delay the removal of the class by 500ms
        }

        if ($('.small_hero').length) {
            setTimeout(function () {
                $('.background, picture, img').addClass('visible');
            }, 500); // Delay the removal of the class by 500ms

            setTimeout(function () {
                $('.small_hero .content_wrap').fadeIn('slow');
            }, 1500); // Delay the removal of the class by 500ms
        }

        // Create the iframe element
        width = $(window).width();

        // adjustVideoSize();

        // Start delayed elements timer after everything is loaded
        showDelayedElements();

        // Style CF7 and other asterisks after tSelectbox is initialized
        setTimeout(function () {
            styleCF7Placeholders();
            styleAllAsterisks();
        }, 200);
    });

    $(window).resize(function () {
        width = $(window).width();
        adjustVideoSize();

        // Reset parallax transforms on mobile if window is resized
        if ($(window).width() <= 1024) {
            $('.parallax_wrap').css('transform', 'none');
        }

        // Re-initialize small header state on resize
        initSmallHeaderState();
    });

    function adjustVideoSize() {
        var aspectRatio = 16 / 9; // Standard video aspect ratio

        // Target all background media in parallax_wrap (iframe + video)
        $('.parallax_wrap iframe, .parallax_wrap video').each(function () {
            var $media = $(this);
            var $parentDiv = $media.closest('.parallax_wrap');

            if ($parentDiv.length) {
                // Get parent dimensions
                var parentWidth = $parentDiv.width();
                var parentHeight = $parentDiv.height();
                var parentAspectRatio = parentWidth / parentHeight;

                var videoWidth, videoHeight;

                // Calculate dimensions to fill the parent completely
                if (parentAspectRatio > aspectRatio) {
                    // Parent is wider than video aspect ratio
                    // Make video width match parent width
                    videoWidth = parentWidth;
                    videoHeight = videoWidth / aspectRatio;
                } else {
                    // Parent is taller than video aspect ratio
                    // Make video height match parent height
                    videoHeight = parentHeight;
                    videoWidth = videoHeight * aspectRatio;
                }

                // Add a bit of extra size to ensure complete coverage
                videoWidth = Math.ceil(videoWidth * 1.05);
                videoHeight = Math.ceil(videoHeight * 1.05);

                // Apply the calculated dimensions
                $media.css({
                    'width': videoWidth + 'px',
                    'height': videoHeight + 'px'
                });
            }
        });
    }

    // run animations for elements in the viewport
    function fadeIn() {
        var winHeight = $(window).height();
        var bodyScroll = $(document).scrollTop();
        var calcHeight = bodyScroll + winHeight;
        var triggerPoint = winHeight * 0.85; // Trigger when element is 85% into view

        $(".fadein-wrap").each(function (index, el) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).height();

            // Check if element is in viewport with custom trigger point
            if (
                elementTop < (bodyScroll + triggerPoint) &&
                elementBottom > bodyScroll
            ) {
                if (!$(this).hasClass("in-view")) {
                    // Add slight delay for staggered effect on grouped elements
                    var $element = $(this);
                    setTimeout(function () {
                        $element.addClass("in-view");
                    }, index * 1); // 50ms delay between each element
                }
            }
        });
    }

    // Initialize Lottie animation
    function initLottieAnimation() {
        var lottieContainer = document.getElementById('background-lottie');

        if (lottieContainer && typeof lottie !== 'undefined') {
            // Get the theme directory URL from a global variable or data attribute
            var themeUrl = lottieContainer.getAttribute('data-theme-url') || '';

            // Choose animation file based on screen width
            var animationFile = $(window).width() < 768 ? 'mrc-mobile.json' : 'mrc3.json';

            var animation = lottie.loadAnimation({
                container: lottieContainer,
                renderer: 'svg', // or 'canvas' or 'html'
                loop: false, // Set to false to stop at the end
                autoplay: true,
                path: themeUrl + '/assets/images/' + animationFile // Dynamic path based on device
            });

            // Optional: Add event listeners
            animation.addEventListener('complete', function () {
            });

            animation.addEventListener('loopComplete', function () {
            });
        }
    }

    // Show delayed elements after 8 seconds
    function showDelayedElements() {
        setTimeout(function () {
            $('.delay-show').addClass('show');
            $('.background').addClass('show');

        }, 7400); // 8 seconds delay

        if ($('.hero_wrap').length && $('.hero_wrap').hasClass('enable')) {
            setTimeout(function () {
                $('.delay-show').addClass('show');
                $('.background').addClass('show');

            }, 7400); // 8 seconds delay
        } else {
            $('.delay-show').addClass('show');
            $('.background').addClass('show');
        }
    }

    // Style asterisks in Contact Form 7 placeholders
    function styleCF7Placeholders() {
        // Target Contact Form 7 inputs with asterisks in placeholder
        $('.wpcf7 input[placeholder*="*"]').each(function () {
            var $input = $(this);
            var placeholder = $input.attr('placeholder');
            var $wrapper = $input.closest('span');

            // Create styled placeholder
            var styledPlaceholder = placeholder.replace(/\*/g, '<span class="asterisk">*</span>');
            var $overlay = $('<div class="placeholder-overlay">' + styledPlaceholder + '</div>');

            // Add overlay to wrapper
            $wrapper.css('position', 'relative');
            $wrapper.append($overlay);

            // Mark input as having styled placeholder
            $input.addClass('has-styled-placeholder');

            // Handle input events
            $input.on('input focus', function () {
                if ($(this).val().length > 0 || $(this).is(':focus')) {
                    $overlay.addClass('hidden');
                } else {
                    $overlay.removeClass('hidden');
                }
            });

            $input.on('blur', function () {
                if ($(this).val().length === 0) {
                    $overlay.removeClass('hidden');
                }
            });

            // Initial state
            if ($input.val().length > 0) {
                $overlay.addClass('hidden');
            }
        });

        // Style asterisks in custom select dropdowns
        $('.cs-selected, .cs-option').each(function () {
            var $element = $(this);
            var text = $element.text();
            if (text.indexOf('*') !== -1) {
                var styledText = text.replace(/\*/g, '<span class="asterisk">*</span>');
                $element.html(styledText);
            }
        });

        // Style asterisks in radio button questions and other text content
        $('.wpcf7 p').each(function () {
            var $paragraph = $(this);
            var html = $paragraph.html();
            if (html.indexOf('*') !== -1 && html.indexOf('<span class="asterisk">') === -1) {
                var styledHtml = html.replace(/\*/g, '<span class="asterisk">*</span>');
                $paragraph.html(styledHtml);
            }
        });

    }

    // Enhanced function to style all asterisks
    function styleAllAsterisks() {
        // Style asterisks in custom select dropdowns
        $('.cs-selected, .cs-option').each(function () {
            var $element = $(this);
            var text = $element.text();
            if (text.indexOf('*') !== -1 && text.indexOf('<span class="asterisk">') === -1) {
                var styledText = text.replace(/\*/g, '<span class="asterisk">*</span>');
                $element.html(styledText);
            }
        });

        // Style asterisks in radio button questions and other text content
        $('.wpcf7 p').each(function () {
            var $paragraph = $(this);
            var html = $paragraph.html();
            if (html.indexOf('*') !== -1 && html.indexOf('<span class="asterisk">') === -1) {
                var styledHtml = html.replace(/\*/g, '<span class="asterisk">*</span>');
                $paragraph.html(styledHtml);
            }
        });

        // Also handle select option elements
        $('.wpcf7 select option').each(function () {
            var $option = $(this);
            var text = $option.text();
            if (text.indexOf('*') !== -1 && text.indexOf('<span class="asterisk">') === -1) {
                var styledText = text.replace(/\*/g, '<span class="asterisk">*</span>');
                $option.html(styledText);
            }
        });
    }

    // Handle Cookiebot popup for mobile devices
    function handleCookiebotMobile() {
        // Check if we're on a mobile device (screen width <= 1024px)
        if ($(window).width() <= 1024) {
            var cookieDialog = $('#CybotCookiebotDialog');
            if (cookieDialog.length) {
                // Show the dialog after 10 seconds with fade in effect
                setTimeout(function () {
                    cookieDialog.css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }, 10000); // 10 seconds delay
            }
        }
    }

    // Initialize contained image galleries
    function initContainedImageGalleries() {
        // Find all contained image blocks with multiple images
        document.querySelectorAll('.contained-image .swiper-container').forEach(function (swiperContainer) {
            const blockId = swiperContainer.closest('.contained-image').id;
            const captions = document.querySelectorAll('#' + blockId + ' .caption-item');
            const imageWrap = swiperContainer.querySelector('.image_wrap');
            const pagination = swiperContainer.querySelector('.swiper-pagination');

            // Function to position pagination based on image wrap height
            function positionPagination() {
                if (imageWrap && pagination) {
                    const imageWrapHeight = imageWrap.offsetHeight;
                    const paginationHeight = pagination.offsetHeight || 12; // Default bullet height
                    const topPosition = imageWrapHeight - paginationHeight - 20; // 20px from bottom of image
                    pagination.style.top = topPosition + 'px';
                }
            }

            // Position pagination initially
            positionPagination();

            // Reposition on window resize
            window.addEventListener('resize', positionPagination);

            if (typeof Swiper !== 'undefined') {
                // Prevent all drag/touch/mouse events BEFORE initializing Swiper
                const $container = $(swiperContainer);
                $container.on('touchstart mousedown', function (e) {
                    // Only allow clicks on pagination
                    if (!$(e.target).closest('.swiper-pagination').length) {
                        e.stopPropagation();
                    }
                });

                // Use Swiper library if available
                const swiper = new Swiper(swiperContainer, {
                    loop: true,
                    allowTouchMove: false,
                    simulateTouch: false,
                    touchRatio: 0,
                    shortSwipes: false,
                    longSwipes: false,
                    followFinger: false,
                    resistance: false,
                    resistanceRatio: 0,
                    touchStartPreventDefault: false,
                    touchStartForcePreventDefault: false,
                    touchMoveStopPropagation: true,
                    pagination: {
                        el: swiperContainer.querySelector('.swiper-pagination'),
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active'
                    },
                    on: {
                        slideChangeTransitionStart: function () {
                            var videos = swiperContainer.querySelectorAll('.js-inview-video');
                            videos.forEach(function (video) {
                                var $slide = $(video).closest('.swiper-slide');
                                if (!$slide.hasClass('swiper-slide-active')) {
                                    resetOutOfViewVideo(video);
                                }
                            });
                        },
                        slideChangeTransitionEnd: function () {
                            // Update caption based on current slide
                            captions.forEach((caption, index) => {
                                caption.classList.toggle('active', index === this.realIndex);
                            });

                            var activeVideo = swiperContainer.querySelector('.swiper-slide-active .js-inview-video');
                            if (activeVideo) {
                                resetOutOfViewVideo(activeVideo);
                                if (activeVideo.currentTime === 0) {
                                    activeVideo.currentTime = 0.01;
                                }
                                forcePlayVideo(activeVideo);
                            }
                        },
                        init: function () {
                            // Reposition pagination after swiper init
                            setTimeout(positionPagination, 100);

                            var activeVideo = swiperContainer.querySelector('.swiper-slide-active .js-inview-video');
                            if (activeVideo) {
                                resetOutOfViewVideo(activeVideo);
                                if (activeVideo.currentTime === 0) {
                                    activeVideo.currentTime = 0.01;
                                }
                                forcePlayVideo(activeVideo);
                            }
                        }
                    }
                });

                // Ensure play is triggered on user interaction (pagination click)
                $container.on('click', '.swiper-pagination-bullet', function () {
                    var activeVideo = swiperContainer.querySelector('.swiper-slide-active .js-inview-video');
                    if (activeVideo) {
                        resetOutOfViewVideo(activeVideo);
                        if (activeVideo.currentTime === 0) {
                            activeVideo.currentTime = 0.01;
                        }
                        forcePlayVideo(activeVideo);
                    }
                });

                // Disable Swiper's touch events completely
                swiper.detachEvents();
            } else {
                // Fallback: Simple pagination with vanilla JS
                const slides = swiperContainer.querySelectorAll('.swiper-slide');
                const pagination = swiperContainer.querySelector('.swiper-pagination');

                let currentSlide = 0;

                // Create pagination bullets
                slides.forEach((slide, index) => {
                    const bullet = document.createElement('span');
                    bullet.classList.add('swiper-pagination-bullet');
                    if (index === 0) bullet.classList.add('swiper-pagination-bullet-active');
                    bullet.addEventListener('click', () => goToSlide(index));
                    pagination.appendChild(bullet);
                });

                function goToSlide(index) {
                    // Hide all slides and captions
                    slides.forEach(slide => slide.style.display = 'none');
                    captions.forEach(caption => caption.classList.remove('active'));

                    // Show current slide and caption
                    slides[index].style.display = 'block';
                    if (captions[index]) captions[index].classList.add('active');

                    // Update pagination
                    const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
                    bullets.forEach((bullet, i) => {
                        bullet.classList.toggle('swiper-pagination-bullet-active', i === index);
                    });

                    currentSlide = index;
                }

                // Initialize
                goToSlide(0);
            }
        });
    }

    // Initialize large gallery tabs
    function initLargeGalleries() {
    }

    // Large gallery tab functionality - using event delegation
    $(document).on('click', '.gallery-tab', function (e) {
        e.preventDefault();

        var $clickedTab = $(this);
        var targetGallery = $clickedTab.attr('data-gallery');
        var $block = $clickedTab.closest('.large-gallery-block');


        if ($block.length === 0) {
            return;
        }

        // Remove active class from all tabs in this block
        $block.find('.gallery-tab').removeClass('active');

        // Remove active class from all gallery sections in this block
        $block.find('.gallery-section').removeClass('active');

        // Add active class to clicked tab
        $clickedTab.addClass('active');

        // Add active class to target gallery section
        var $targetSection = $block.find('.gallery-section[data-gallery="' + targetGallery + '"]');

        if ($targetSection.length > 0) {
            $targetSection.addClass('active');
        } else {
            // Debug: show all available sections
            $block.find('.gallery-section').each(function () {
            });
        }
    });

    // Large gallery modal functionality - works for both circle and image clicks
    $(document).on('click', '.circle, .gallery-item img', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $clickedElement = $(this);
        var galleryType, clickedIndex, $block, $modal;

        // Determine if circle or image was clicked and get the data
        if ($clickedElement.hasClass('circle')) {
            // Circle was clicked
            galleryType = $clickedElement.attr('data-gallery');
            clickedIndex = parseInt($clickedElement.attr('data-index'));
            $block = $clickedElement.closest('.large-gallery-block');
        } else {
            // Image was clicked, get data from the circle in the same gallery item
            var $galleryItem = $clickedElement.closest('.gallery-item');
            var $circle = $galleryItem.find('.circle');
            galleryType = $circle.attr('data-gallery');
            clickedIndex = parseInt($circle.attr('data-index'));
            $block = $clickedElement.closest('.large-gallery-block');
        }

        $modal = $block.find('.gallery-modal');


        if ($modal.length === 0) {
            return;
        }

        // Get all images from the current gallery
        var images = [];
        var $currentSection = $block.find('.gallery-section[data-gallery="' + galleryType + '"]');

        $currentSection.find('.gallery-item').each(function () {
            var $item = $(this);
            var $img = $item.find('img');
            var $caption = $item.find('.image-caption');

            images.push({
                src: $img.attr('src'),
                alt: $img.attr('alt') || '',
                caption: $caption.length > 0 ? $caption.text() : ''
            });
        });


        if (images.length === 0) {
            return;
        }

        // Populate modal swiper
        var $swiperWrapper = $modal.find('.swiper-wrapper');
        $swiperWrapper.empty();

        images.forEach(function (image, index) {
            var slide = '<div class="swiper-slide" data-caption="' + (image.caption || '') + '">' +
                '<div class="image-container">' +
                '<img src="' + image.src + '" alt="' + image.alt + '">' +
                '</div></div>';
            $swiperWrapper.append(slide);
        });

        // Update counter and caption function
        function updateModalInfo(activeIndex) {
            var $counter = $modal.find('.modal-counter');
            var $caption = $modal.find('.modal-caption');

            $counter.text((activeIndex + 1) + '/' + images.length);

            var currentCaption = images[activeIndex].caption || '';
            $caption.text(currentCaption);
        }

        // Show modal
        $modal.addClass('active');
        $('body').addClass('modal-open no-scroll');

        // Initialize or update swiper
        var swiperContainer = $modal.find('.swiper-container')[0];

        // Destroy existing swiper if it exists
        if (swiperContainer && swiperContainer.swiper) {
            swiperContainer.swiper.destroy(true, true);
        }

        // Create new swiper
        var modalSwiper = new Swiper(swiperContainer, {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: images.length > 1,
            initialSlide: clickedIndex,
            navigation: {
                nextEl: $modal.find('.swiper-button-next')[0],
                prevEl: $modal.find('.swiper-button-prev')[0],
            },
            keyboard: {
                enabled: true,
            },
            on: {
                init: function () {
                    updateModalInfo(this.realIndex);
                },
                slideChange: function () {
                    updateModalInfo(this.realIndex);
                }
            }
        });
    });

    // Fullscreen functionality
    // $(document).on('click', '.modal-fullscreen', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     var element = document.documentElement;

    //     if (!document.fullscreenElement) {
    //         // Enter fullscreen
    //         if (element.requestFullscreen) {
    //             element.requestFullscreen();
    //         } else if (element.mozRequestFullScreen) {
    //             element.mozRequestFullScreen();
    //         } else if (element.webkitRequestFullscreen) {
    //             element.webkitRequestFullscreen();
    //         } else if (element.msRequestFullscreen) {
    //             element.msRequestFullscreen();
    //         }
    //     } else {
    //         // Exit fullscreen
    //         if (document.exitFullscreen) {
    //             document.exitFullscreen();
    //         } else if (document.mozCancelFullScreen) {
    //             document.mozCancelFullScreen();
    //         } else if (document.webkitExitFullscreen) {
    //             document.webkitExitFullscreen();
    //         } else if (document.msExitFullscreen) {
    //             document.msExitFullscreen();
    //         }
    //     }
    // });

    // Zoom functionality
    // $(document).on('click', '.modal-zoom', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     var $modal = $(this).closest('.gallery-modal');
    //     var $activeSlide = $modal.find('.swiper-slide-active');
    //     var $imageContainer = $activeSlide.find('.image-container');
    //     var $img = $imageContainer.find('img');

    //     var isZoomed = $imageContainer.hasClass('zoomed');

    //     if (!isZoomed) {
    //         // Zoom in
    //         $img.css({
    //             'transform': 'scale(2)',
    //             'width': 'auto',
    //             'height': 'auto'
    //         });
    //         $imageContainer.addClass('zoomed');
    //         // Center the scroll position
    //         setTimeout(function () {
    //             var scrollX = ($imageContainer[0].scrollWidth - $imageContainer.width()) / 2;
    //             var scrollY = ($imageContainer[0].scrollHeight - $imageContainer.height()) / 2;
    //             $imageContainer.scrollLeft(scrollX);
    //             $imageContainer.scrollTop(scrollY);
    //         }, 50);
    //     } else {
    //         // Zoom out
    //         $img.css('transform', 'scale(1)');
    //         $imageContainer.removeClass('zoomed');
    //         $imageContainer.scrollLeft(0);
    //         $imageContainer.scrollTop(0);
    //     }
    // });

    // Pan functionality for zoomed images - Mouse events
    var isDragging = false;
    var startX, startY, scrollLeft, scrollTop;

    $(document).on('mousedown', '.image-container.zoomed', function (e) {
        e.preventDefault();
        isDragging = true;
        $(this).addClass('dragging');

        startX = e.pageX;
        startY = e.pageY;
        scrollLeft = $(this).scrollLeft();
        scrollTop = $(this).scrollTop();
    });

    $(document).on('mouseup mouseleave', '.image-container', function () {
        isDragging = false;
        $(this).removeClass('dragging');
    });

    $(document).on('mousemove', '.image-container.zoomed', function (e) {
        if (!isDragging) return;
        e.preventDefault();

        var x = e.pageX;
        var y = e.pageY;
        var walkX = (startX - x) * 1.5;
        var walkY = (startY - y) * 1.5;

        $(this).scrollLeft(scrollLeft + walkX);
        $(this).scrollTop(scrollTop + walkY);
    });

    // Pan functionality for zoomed images - Touch events for mobile
    var touchStartX, touchStartY, touchScrollLeft, touchScrollTop;

    $(document).on('touchstart', '.image-container.zoomed', function (e) {
        var touch = e.originalEvent.touches[0];
        touchStartX = touch.pageX;
        touchStartY = touch.pageY;
        touchScrollLeft = $(this).scrollLeft();
        touchScrollTop = $(this).scrollTop();
    });

    $(document).on('touchmove', '.image-container.zoomed', function (e) {
        e.preventDefault();
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX;
        var y = touch.pageY;
        var walkX = (touchStartX - x) * 1.5;
        var walkY = (touchStartY - y) * 1.5;

        $(this).scrollLeft(touchScrollLeft + walkX);
        $(this).scrollTop(touchScrollTop + walkY);
    });

    // Close modal functionality
    $(document).on('click', '.modal-close, .modal-overlay', function (e) {
        e.preventDefault();
        var $modal = $(this).closest('.gallery-modal');

        // Reset zoom state
        $modal.find('.image-container').removeClass('zoomed dragging');
        $modal.find('img').css('transform', 'scale(1)');

        $modal.removeClass('active');
        $('body').removeClass('modal-open no-scroll');

        // Destroy swiper
        var swiperContainer = $modal.find('.swiper-container')[0];
        if (swiperContainer && swiperContainer.swiper) {
            swiperContainer.swiper.destroy(true, true);
        }
    });

    // Close modal on ESC key
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // ESC key
            var $activeModal = $('.gallery-modal.active');
            if ($activeModal.length > 0) {
                $activeModal.find('.modal-close').click();
            }
        }
    });

}(jQuery));
