/**
 * Smoothly scrolls to a target element.
 * @param {string} selector - The CSS selector for the target element (e.g., '#about').
 */
export function smoothScroll(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Smooth scroll target not found: ${selector}`);
  }
}
