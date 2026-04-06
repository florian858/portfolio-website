const btn = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
