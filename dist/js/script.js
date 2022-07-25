// Скрипт, чтобы эллемент менял цвет после определенного количества прокрутки
const linkStyle = document.querySelectorAll('.sidepanel__link svg path')
//Коллекция дом элементов, т.е все элементы, у которых есть такой класс 
//Вешаем обработчик событий на все окно, как только достигнем 500 пикселей, добавим всем элементам инлайн стилей
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=500){
    linkStyle.forEach(el => el.style.fill = 'black')
  }else{
    linkStyle.forEach(el => el.style.fill='')
  }
})
const TextMenu = document.querySelectorAll('.sidepanel__text span')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=300){
    TextMenu.forEach(el => el.style.color = 'black')
  }else{
    TextMenu.forEach(el => el.style.color='')
  }
})
const MenuDevider = document.querySelectorAll('.sidepanel__divider')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=400){
    MenuDevider.forEach(el => el.style.backgroundColor = 'black')
  }else{
    MenuDevider.forEach(el => el.style.backgroundColor='')
  }
})

// Hamburger
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

// scale
const counters = document.querySelectorAll('.skills__wrapper-progress-item_h4 span'), 
  lines = document.querySelectorAll('.scale');

  counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
  });