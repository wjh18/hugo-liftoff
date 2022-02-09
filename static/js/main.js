// Responsive mobile navbar

let navBar = document.getElementById('js-navbar');
let mainMenu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar__toggle');

navBarToggle.addEventListener('click', function () {
    navBar.classList.toggle('navbar--active');
    mainMenu.classList.toggle('navbar--active');    
});