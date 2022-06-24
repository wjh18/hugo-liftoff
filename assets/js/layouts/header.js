// Show or hide nav on click of menu burger
export function toggleNav() {
  let mainMenu = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar__toggle');

  navBarToggle.addEventListener('click', function () {
    mainMenu.classList.toggle('menu--active');
  });
}

// Show or hide menu items on mobile
export function toggleMobileMenu() {
  let menuItems = document.querySelectorAll('.menu__item');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function () {
      let subMenu = item.querySelector('.sub-menu');
      subMenu.classList.toggle('sub-menu--active');
    });
  });
}

export const Header = {
  toggleNav,
  toggleMobileMenu
};