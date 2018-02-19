---
# Front matter comment to ensure Jekyll properly reads file.
---
$(document).ready(function(){
  $('.about-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev btn"><span class="sr-only">Previous</span></button>',
    nextArrow: '<button type="button" class="slick-next btn"><span class="sr-only">Next</span></button>'
  });

  $('.qualifications-carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    swipeToSlide: true,
    prevArrow: '<button type="button" class="slick-prev btn"><span class="sr-only">Previous</span></button>',
    nextArrow: '<button type="button" class="slick-next btn"><span class="sr-only">Next</span></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});