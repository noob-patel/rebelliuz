// Header On Scroll
function headerScroll(){
    let scrolling = window.scrollY
    const header = document.querySelector("header")
    const pagebody = document.querySelector("body")

    const add_class_header = () => header.classList.add("headerScroll")
    const remove_class_header = () => header.classList.remove("headerScroll")

    const add_class_body = () => pagebody.classList.add("headerSticky")
    const remove_class_body = () => pagebody.classList.remove("headerSticky")

    window.addEventListener('scroll', function() { 
        scrolling = window.scrollY;
        if (scrolling >= 200) { 
            add_class_header() 
            add_class_body()
        }
        else { 
            remove_class_header() 
            remove_class_body()
        }
    });
}
headerScroll();

// Home Hero
function homeHero() {
    var swiper = new Swiper(".home-hero", {
        speed : 1500,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}
homeHero();


// Home Testimonial
function testimonialSlider() {
    var testimonialTop = new Swiper('.testimonial-slider', {
        spaceBetween: 10,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
            loop: true,
            loopedSlides: 4
        });
        var testimonialThumbs = new Swiper('.testimonial-thumb', {
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4
    });
    testimonialTop.controller.control = testimonialThumbs;
    testimonialThumbs.controller.control = testimonialTop;
}
testimonialSlider();

// Home Counter
function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
    }

    function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
        countNum: element.html()
        }).animate({
        countNum: maxval
        }, {
        //duration 5 seconds
        duration: 4000,
        easing: 'linear',
        step: function() {
            element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
            element.html(this.countNum + html);
        }
        });
    }

}

$(function() {
    $(window).scroll(function() {
        $(".counter h3[data-max]").each(function() {
            inVisible($(this));
        });
    })
});
  
// Company Hiring
function hireCompany() {
    var swiper = new Swiper(".hiringCompanies", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
}
hireCompany();

// Star Candidates
function starCandidate() {
    var swiper = new Swiper(".starCandidates", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
}
starCandidate();

/* More info toggle in Job List */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
    $(".scroll").click(function(){
        $(window).scrollTop(0);
        return false
    });
});

/* Toggle class for Emoji */
function emojiClick() {
    var elem = document.getElementById("emoji-wrap");
    elem.classList.toggle("open");
}