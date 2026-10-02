'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
const mobile = window.matchMedia('(max-width: 900px)');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.dataset.collapsed = String(mobile.matches);
}
toggle.hidden = false;
closeMenu();
toggle.addEventListener('click', () => {
  const opened = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(opened));
  navigation.dataset.collapsed = String(!opened);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
mobile.addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
