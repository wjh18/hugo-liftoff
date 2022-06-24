import toggleToc from './components/toc';
import { addCopyButtons } from './components/clipboard';
import { Header } from './layouts/header';

// Codeblock copy button
if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
}

// Activate toggles for nav/menu
Header.toggleNav();
Header.toggleMobileMenu();