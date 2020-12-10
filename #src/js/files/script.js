
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

});