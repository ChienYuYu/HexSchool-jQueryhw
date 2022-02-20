$(document).ready(function(){
    
    //原始寫的收合選單↓--------------------------------
//     $('.dropdown').click(function(event){
//         event.preventDefault();
//         $('.dropdown').toggleClass('active');
//         $('.d-menu').slideToggle();
//     });
    
    
    //助教建議的↓---------------------------
//     $('.menu a').click(function(event){
//     event.preventDefault();
//     $('.dropdown').toggleClass('active');
//     $('.d-menu').slideToggle();
//     $(this).parent().siblings().find('.d-menu').slideUp();
//     });
    
    //因為我menu多加了一個li，所以我又寫了這個版本↓-----------
    $('.menu a').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('.d-menu').slideToggle();
    $(this).parent().siblings().find('a').removeClass('active');
    $(this).parent().siblings().find('.d-menu').slideUp();
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

    //.goTop 向上捲-------------------------
    $('.goTop a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},800);
    });
    
     //gotop按鈕淡入淡出-------------------------
  function showBtnCondition() {
    if ($(this).scrollTop() > 300) {
      $('.goTop a').fadeIn();
    } else {
      $('.goTop a').fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);
    
    //.goDown 向下捲-------------------------
    $('.goDown').click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:999},800);
    });
      
      
});
