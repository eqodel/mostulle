$(document).ready(function(){
  $('#js-carousel-1').owlCarousel();
});

$('#js-carousel-1').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  slideTransition: 'linear',
  items: 1,
  nav: false,
  dots: false,

  responsive: {
    600: {
      items: 3
    }
  }
});

var menuButton = $('.menu');
menuButton.on('click', function () {
  $('.nav-wrap').toggleClass('nav-wrap_visible');
});

AOS.init();

$('.footer__form').each(function() {
    $(this).validate({
    messages: {
    name: "Пожалуйста, оставьте ваше имя*",
    phone: "Также ваш номер телефона*",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
  });
  });

  $(document).ready(function(){
    $('.phone').mask('+7 (999) 999-99-99');
  });