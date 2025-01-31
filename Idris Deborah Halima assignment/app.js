document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.createElement('button');
  menuButton.textContent = "☰"; // This is a string, no problem here
  menuButton.classList.add('menu-btn');
  const navbar = document.querySelector('.navbar');
  navbar.appendChild(menuButton);

  const navLinks = document.querySelectorAll('.navbar a');
  menuButton.addEventListener('click', function() {
      navLinks.forEach(link => {
          // Toggle class, ensure the content is still valid HTML or text
          link.classList.toggle('show');
      });
  });
});
