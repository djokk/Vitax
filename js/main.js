$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="prev"><img src="./img/prev.png" alt=""></button>',
  nextArrow: '<button class="next"><img src="./img/next.png" alt=""></button>',
});

$('.share__slider').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="prev"><img src="./img/prev.png" alt=""></button>',
  nextArrow: '<button class="next"><img src="./img/next.png" alt=""></button>',
});

// document.querySelector('.red-light').querySelector('.prev').querySelector('img').src = './img/prev-gray.png';
// document.querySelector('.red-light').querySelector('.next').querySelector('img').src = './img/next-gray.png';


// document.querySelector('.red-light .prev img').src = './img/prev-gray.png';
// document.querySelector('.red-light .next img').src = './img/next-gray.png';

document.querySelectorAll('.red-light .prev img').src = './img/prev-gray.png';
document.querySelectorAll('.red-light .next img').src = './img/next-gray.png';
