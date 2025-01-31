document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  fetch('your-server-endpoint', {
      method: 'POST',
      body: formData // Automatically formats the body as multipart form-data
  })
  .then(response => response.json())
  .then(data => {
      alert("Thank you for your message! I'll get back to you soon.");
      document.getElementById("contactForm").reset();
  })
  .catch(error => {
      console.error('Error:', error);
  });
});

