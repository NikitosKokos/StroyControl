
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll',() => {
        if(window.pageYOffset > 96){
            header.classList.add('header_active');
        }else{
            header.classList.remove('header_active');
        }
      });
      if(window.pageYOffset > 0){
        header.classList.add('header_active');
        }else{
            header.classList.remove('header_active');
        }

    // scroll animate
    const scrollITems = document.querySelectorAll('.animate');
    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 1.2) + window.scrollY;
        scrollITems.forEach(element => {
            let scrollOffset = element.offsetTop + (element.offsetHeight / 2);
            if(windowCenter >= scrollOffset){
                element.classList.add('_animate');
            }
        });

    }
    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });

    let commentsSlider = new Swiper('.slider-comments__body', {
        slideClass: 'slider-comments__slide',
        slidesPerView: 1,
        pagination: {
          el: '.slider-comments__dotts',
          clickable: true,
        },
  
      })


});