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
      let darkThemeSelected = false;
      if (lsItem !== null) {
        darkThemeSelected = lsItem === 'dark';
      } else {
        darkThemeSelected = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      themeSwitch.checked = darkThemeSelected;
      resetTheme();
    }

    function resetTheme() {
      if (themeSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('themeSwitch', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('themeSwitch', 'light');
      }

      // Reset Disqus to match new color scheme
      if (typeof DISQUS !== "undefined") {
          DISQUS.reset({ reload: true });
      }
    }
  }
}

const switcher = (() => {
  switchTheme();
})();

export { switcher };