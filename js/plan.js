jQuery(function ($) {

    var ua = navigator.userAgent.toLowerCase();
    var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
    var ptop, scroll, windowHeight;
    var clickCount = 0;
    var DelayTime = 300;
    var timer = false;
    var fadeInTimer = false;


    new Swiper('.nested-slider-h', {
        loop: false,
        speed: 500,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
    new Swiper('.nested-slider-child', {
        loop: true,
        speed: 500,
        allowTouchMove: false,
        autoplay: {
            delay: 4000,
        },
    });

    var path = anime.path('.plan-chapter-truck path');
    $('.plan-truck-illust').hide();
    function chapterNumClickCommon() {
        $('.planItem_info').removeClass('show');
    }
    $(window).on('load', function(){
        var planChapter = anime({
            targets: '.plan-truck-illust',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            duration: 3000,
            easing: 'linear'
        });
        $('.plan-truck-illust').fadeIn('slow');
        if (isMobile) {
            planChapter.pause();
        } else {
            setTimeout(function() {
                planChapter.pause();
            }, 100);
        }
        $('.swiper-pagination-bullet').on('click',function(){
            planChapter.restart();
            $('.plan-truck-illust').hide().fadeIn('slow');
            $('.plan-chapter-num').removeClass('active');
            $('.plan-illust-container').removeClass('show').addClass('hide');
            if (isMobile) {
                $('.plan-container').scrollTop(0);
                $('.plan-container').removeClass('show').addClass('hide');
                $('.js-plan-fadein').removeClass('plan-scroll-in');
                if (fadeInTimer !== false) {
                    clearTimeout(fadeInTimer);
                }
                fadeInTimer = setTimeout(function() {
                    $('.plan-container').scroll(function(){
                        planScrollFadeIn();
                    });
                    planLoadFadeIn();
                }, 500);
                chapterNumClickCommon();
            } else {
                $('.plan-container, .plan-direction-btn').removeClass('show').addClass('hide');
                $('.plan-illust-container [class*="plan-illust-"]').on('transitionend webkitTransitionEnd',function(){
                    chapterNumClickCommon();
                    $('.plan-direction-btn').removeClass('hide').addClass('show');
                });
            }
        });
        $('.swiper-pagination-bullet:nth-child(1)').on('click',function(){
            if (timer !== false) {
                clearTimeout(timer);
            }
            if (isMobile) {
                planChapter.pause();
            } else {
                timer = setTimeout(function() {
                    planChapter.pause();
                }, 100);
            }
            $(this).addClass('active');
        });
        $('.swiper-pagination-bullet:nth-child(2)').on('click',function(){
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                planChapter.pause();
            }, 900);
            $(this).addClass('active');
        });
        $('.swiper-pagination-bullet:nth-child(3)').on('click',function(){
            if (timer !== false) {
                clearTimeout(timer);
            }
            if (isMobile) {
                timer = setTimeout(function() {
                    planChapter.pause();
                }, 1600);
            } else {
                timer = setTimeout(function() {
                    planChapter.pause();
                }, 1700);
            }
            $(this).addClass('active');
        });
        $('.swiper-pagination-bullet:nth-child(4)').on('click',function(){
            if (timer !== false) {
                clearTimeout(timer);
            }
            if (isMobile) {
                timer = setTimeout(function() {
                    planChapter.pause();
                }, 2400);
            } else {
                timer = setTimeout(function() {
                    planChapter.pause();
                }, 2550);
            }
            $(this).addClass('active');
        });
    });


    var slideIndex = 0;
    function chapterNumTrigger() {
        if (slideIndex == 0) {
            $('.swiper-pagination-bullet:nth-child(1)').trigger("click");
        } else if (slideIndex == 1) {
            $('.swiper-pagination-bullet:nth-child(2)').trigger("click");
        } else if (slideIndex == 2) {
            $('.swiper-pagination-bullet:nth-child(3)').trigger("click");
        } else if (slideIndex == 3) {
            $('.swiper-pagination-bullet:nth-child(4)').trigger("click");
        }
    }
    $('.plan-btnSlider .btn-next').click(function() {
        slideIndex = $('.planItem_info.swiper-slide-active').index();
        if (slideIndex == 3) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        chapterNumTrigger();
    });
    $('.plan-btnSlider .btn-prev').click(function() {
        slideIndex = $('.planItem_info.swiper-slide-active').index();
        if (slideIndex == 0) {
            slideIndex = 3;
        } else {
            slideIndex--;
        }
        chapterNumTrigger();
    });


});