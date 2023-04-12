const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('active');
  menuToggle.classList.toggle('menu-toggle-click')
});
