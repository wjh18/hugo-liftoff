// // Example imports
// import button from './components/button';
// import header from './layouts/header';
// import home from './pages/home';

// Show or hide nav on click of menu burger
let navBar = document.getElementById('js-navbar');
let mainMenu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar__toggle');

navBarToggle.addEventListener('click', function () {
    navBar.classList.toggle('main-nav--active');
    mainMenu.classList.toggle('main-nav--active');    
});

// Show or hide menu items on mobile
let menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(function(item) {
    item.addEventListener('click', function () {
        let subMenu = item.querySelector('.sub-menu');
        subMenu.classList.toggle('sub-menu--active');
    });
});

// Show or hide toc on click of toggle
let tocToggle = document.getElementById('js-toc__toggle');
let tocContents = document.getElementById('js-toc__contents');

if (tocToggle) {
    tocToggle.addEventListener('click', function () {
        tocContents.classList.toggle('toc__contents--active');
    });
}