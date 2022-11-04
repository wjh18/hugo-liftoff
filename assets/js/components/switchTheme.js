// Adapted from https://github.com/CodyHouse/dark-light-mode-switch

function switchTheme() {
  let themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) {
    initTheme();

    themeSwitch.addEventListener('change', () => {
      resetTheme();
    });

    function initTheme() {
      let lsItem = localStorage.getItem('themeSwitch');
      let darkThemeSelected = (lsItem !== null && lsItem === 'dark');

      themeSwitch.checked = darkThemeSelected;
      darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
    }

    function resetTheme() {
      if (themeSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('themeSwitch', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('themeSwitch');
      } 
    }
  }
}

const switcher = (() => {
  switchTheme();
})();

export { switcher };