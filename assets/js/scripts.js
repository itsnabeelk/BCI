

// cursor animation
(function () {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
        const hoverAnim = this.querySelector('.hover-anim');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    $("a, .cursor-pointer").hover(
        function () {
            $(".cursor").addClass("cursor-active");
        }, function () {
            $(".cursor").removeClass("cursor-active");
        }
    );

})();
// close

//  loader and up button

$(window).on("load", function () {

    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
    }, 1500);

$(document).ready(function () {

    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

});

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header",
        {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container",
        {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );

});
// close

// dropdown-active

$(document).ready(function () {
    $(".dropdown").on("show.bs.dropdown", function () {
        $(this).find(".nav-link").addClass("active");
    });

    $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".nav-link").removeClass("active");
    });
});

// close


// slider
$(window).on('load', function() {
    var bannerSlider = $('.banner-container');
  
    bannerSlider.slick({
      arrows: false,
      dots: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      cssEase: 'ease-out',
      pauseOnHover: false
    });
  
    $('.slider-prev').click(function() {
      bannerSlider.slick('slickPrev');
    });
  
    $('.slider-next').click(function() {
      bannerSlider.slick('slickNext');
    });
  
    bannerSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.banner-text').removeClass('animate');
    });
  
    bannerSlider.on('afterChange', function(event, slick, currentSlide) {
      $('.banner-text').eq(currentSlide).addClass('animate');
    });
  });
//close

$(window).on('hashchange', function() {
    if (window.location.hash !== '#details') {
      $('.details').removeClass('show');
      $('.btn-down').removeClass('rotate');
      $('.icon-active').hide();
      $('.icon-none').show();
      $('.icon-sr').removeClass('show-details');
    }
  });
  
  $('.btn-down').click(function(e) {
    e.preventDefault();
    var parent = $(this).closest('.icon-sr');
    var details = parent.find('.details');
    
    details.toggleClass('show');
    parent.find('.btn-down').toggleClass('rotate');
    parent.toggleClass('show-details');
    
    if (details.hasClass('show')) {
      parent.find('.icon-active').show();
      parent.find('.icon-none').hide();
    } else {
      parent.find('.icon-active').hide();
      parent.find('.icon-none').show();
    }
  });

// fade-up  
const fadeUpElements = document.querySelectorAll('.fade-up');
const fadeDownElements = document.querySelectorAll('.fade-down');
const fadeLeftElements = document.querySelectorAll('.fade-left');
const fadeRightElements = document.querySelectorAll('.fade-right');

const fadeUpObserver = createIntersectionObserver(fadeUpElements, 'fade-up-show', 'fadeUpAnimation');
const fadeDownObserver = createIntersectionObserver(fadeDownElements, 'fade-down-show', 'fadeDownAnimation');
const fadeLeftObserver = createIntersectionObserver(fadeLeftElements, 'fade-left-show', 'fadeLeftAnimation');
const fadeRightObserver = createIntersectionObserver(fadeRightElements, 'fade-right-show', 'fadeRightAnimation');

function createIntersectionObserver(elements, showClass, animationName) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showClass);
      } else {
        entry.target.classList.remove(showClass);
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });

  return observer;
}

// fade-up-close


// fav-dark and light
  function setFavicon() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    
    if (isDarkMode) {
      favicon.href = 'assets/images/fav-dark.png';
    } else {
      favicon.href = 'assets/images/fav-light.png';
    }
  }
  setFavicon();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
// close


// products-tab
function toggleProduct(event, productId) {
  event.preventDefault();

  var productItems = document.getElementsByClassName('product-item');
  var products = document.getElementsByClassName('content-container');

  // Remove the active class from all product items and products
  for (var i = 0; i < productItems.length; i++) {
      productItems[i].classList.remove('active');
  }

  for (var j = 0; j < products.length; j++) {
      products[j].classList.remove('active');
      products[j].querySelector('.icon1').style.display = 'block';
      products[j].querySelector('.icon2').style.display = 'none';
  }

  // Add the active class to the clicked product item and product
  document.getElementById(productId).classList.add('active');
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.querySelector('.icon1').style.display = 'none';
  event.currentTarget.querySelector('.icon2').style.display = 'block';
}

// close

function toggleDropdown(event) {
  event.preventDefault();
  var dropdownBtn = event.target.closest('.dropdown-btn');
  var dropdownTable = dropdownBtn.nextElementSibling;

  dropdownBtn.classList.toggle('active');
  dropdownTable.classList.toggle('active');
}

document.addEventListener('click', function(event) {
  var dropdownBtn = event.target.closest('.dropdown-btn');
  var dropdownTable = document.querySelector('.dropdown-table');

  if (dropdownBtn === null && dropdownTable.classList.contains('active')) {
      dropdownTable.classList.remove('active');
      document.querySelector('.dropdown-btn.active').classList.remove('active');
  }
});


// contact-form
function toggleContactForm() {
  var contactForm = document.getElementById("contact-form");
  if (contactForm.classList.contains("contact-form-hide")) {
    contactForm.style.display = "block";
    setTimeout(function() {
      contactForm.classList.remove("contact-form-hide");
    }, 10);
  } else {
    contactForm.classList.add("contact-form-hide");
    setTimeout(function() {
      contactForm.style.display = "none";
    }, 500);
  }
}
// close

