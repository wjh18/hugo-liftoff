const toggleToc = (() => {
  let tocToggle = document.getElementById('js-toc-toggle');
  let tocContents = document.getElementById('js-toc-contents');

  if (tocToggle) {
    tocToggle.addEventListener('click', () => {
      tocContents.classList.toggle('toc-contents--active');
    });
  }
})();

export { toggleToc };