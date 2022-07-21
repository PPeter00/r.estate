 const mySwiper = new swiper("#property-slider .swiper-container",{

    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        640:{
            slidesPerView: 1,
            spaceBetween: 10
        },
        760:{
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
  });


let myswiper = new swiper('#testimonial-slider .swiper-container',{
   loop: true
});
  