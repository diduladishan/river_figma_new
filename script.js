const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('navMenu');
const headerInfo = document.getElementById('headerInfo');

let isMenuOpen = false;

toggleBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;

  navMenu.classList.toggle('hidden', !isMenuOpen);
  headerInfo.classList.toggle('hidden', isMenuOpen);
});
