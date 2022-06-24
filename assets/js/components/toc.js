// Show or hide toc on click of toggle
const toggleToc = (() => {
  let tocToggle = document.getElementById('js-toc__toggle');
  let tocContents = document.getElementById('js-toc__contents');

  if (tocToggle) {
    tocToggle.addEventListener('click', function () {
      tocContents.classList.toggle('toc__contents--active');
    });
  }
})();

export default toggleToc;