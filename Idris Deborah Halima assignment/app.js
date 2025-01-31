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
      // Ensure both the title and description are explicitly strings
      const title = project.title ? String(project.title) : "";
      const description = project.description ? String(project.description) : "";

      // Log the values to ensure they are strings
      console.log("Project title:", title);
      console.log("Project description:", description);

      // Insert the values as strings into the HTML
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.innerHTML = `
          <h3>${title}</h3>
          <p>${description}</p>
      `;

      // Check if innerHTML is valid
      console.log("Generated HTML:", projectDiv.innerHTML);

      // Append the project to the list
      projectList.appendChild(projectDiv);
  });
});
