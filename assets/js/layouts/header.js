// Show or hide nav on click of menu burger
function toggleNav() {
  let mainMenu = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('menu--active');
    removeSubMenus();
  });
}

// Show or hide menu items on mobile
function toggleMobileMenu() {
  let menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function(item) {
    item.addEventListener('click', () => {
      let subMenu = item.querySelector('.sub-menu');
      if (subMenu.classList.contains('sub-menu--active')) {
        subMenu.classList.remove('sub-menu--active');
      } else {
        removeSubMenus();
        subMenu.classList.add('sub-menu--active');
      }
    });
  });
}

// Collapse submenus
function removeSubMenus() {
  let subMenus = document.querySelectorAll('.sub-menu');
  subMenus.forEach(function(sub) {
    if (sub.classList.contains('sub-menu--active')) {
      sub.classList.remove('sub-menu--active');
    }
  });
}

const header = (() => {
  toggleNav();
  toggleMobileMenu();
})();

export { header };