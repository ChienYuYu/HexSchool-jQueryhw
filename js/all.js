$(document).ready(function(){
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.d-menu').slideToggle();
    });

    //swiper---------------------------
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

    //.goTop-------------------------
    $('.goTop a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},800);
    });

    $('.goDown').click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:999},800);
    });
      
      
});