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
  items: 2,
  nav: false,
  dots: false,

  responsive: {
    600: {
      items: 3
    }
  }
});

