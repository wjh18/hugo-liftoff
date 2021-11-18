// Test JavaScript
console.log('JavaScript is loaded!')

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navBar = document.getElementById('js-navbar');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active-nav');
    navBar.classList.toggle('active-nav');
});