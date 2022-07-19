// $(document).ready(function () {
//     var scroll_pos = 210;
//     $("#left-panel").scroll(function () {
//         scroll_pos = $(this).scrollTop();
//         if (scroll_pos > 210) {
//             $("#sidepanel").css('fill', '#1A1A1A');
//         } else {
//             $("#sidepanel").css('fill', '#FFA501');
//         }
//         console.log(scroll_pos);
//     });
// });


const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

