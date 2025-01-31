// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.createElement('button');
  menuButton.textContent = "☰"; // Hamburger icon
  menuButton.classList.add('menu-btn');
  const navbar = document.querySelector('.navbar');
  navbar.appendChild(menuButton);

  const navLinks = document.querySelectorAll('.navbar a');
  menuButton.addEventListener('click', function() {
      navLinks.forEach(link => {
          link.classList.toggle('show');
      });
  });
});
