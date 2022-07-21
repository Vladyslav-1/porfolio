$(document).ready(function(){
    $(window).scroll(function(){
      if (document.body.scrollTop >= 500) {
        $("sidepanel__link svg").css({
          'fill':'#000000'
        });
      };
    });
  });
  


const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});

