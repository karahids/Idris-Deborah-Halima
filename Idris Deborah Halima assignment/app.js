document.addEventListener("DOMContentLoaded", function() {
  // Create and append the menu button
  const menuButton = document.createElement('button');
  menuButton.textContent = "☰"; // This is a string
  menuButton.classList.add('menu-btn');
  const navbar = document.querySelector('.navbar');
  navbar.appendChild(menuButton);

  const navLinks = document.querySelectorAll('.navbar a');
  menuButton.addEventListener('click', function() {
      navLinks.forEach(link => {
          link.classList.toggle('show');
      });
  });

  // Dynamically create project list
  const projects = [
      { title: "Project 1", description: "A front-end project using HTML, CSS, and JavaScript." },
      { title: "Project 2", description: "A web design project showcasing my UX/UI skills." },
      { title: "Project 3", description: "A full-stack project integrating front-end and back-end development." }
  ];

  // Create project elements dynamically and insert into the DOM
  const projectList = document.getElementById('project-list');

  projects.forEach(project => {
      // Sanitize: Ensure the title and description are both strings
      const title = (typeof project.title === 'string' && project.title) ? project.title : '';
      const description = (typeof project.description === 'string' && project.description) ? project.description : '';

      // Log to verify the types and values of the title and description
      console.log("Title:", title, "Type:", typeof title);
      console.log("Description:", description, "Type:", typeof description);

      // If the title or description isn't a string, we can't insert it
      if (typeof title !== 'string' || typeof description !== 'string') {
          console.error('Error: Non-string values detected in project:', project);
          return;  // Skip this project if there's an issue
      }

      // Create a new div for the project and insert it as HTML content
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.innerHTML = `
          <h3>${title}</h3>
          <p>${description}</p>
      `;

      // Append the project to the project list
      projectList.appendChild(projectDiv);
  });
});
