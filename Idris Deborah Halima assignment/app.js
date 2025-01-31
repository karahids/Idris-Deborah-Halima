document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const formDataString = new URLSearchParams(formData).toString(); // Convert FormData to a string
  
  fetch('your-server-endpoint', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // Specify content type for URL encoded data
      },
      body: formDataString // Sending the stringified form data
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

