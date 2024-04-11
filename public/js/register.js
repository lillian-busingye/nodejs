document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      document.getElementById("message").innerHTML = '<p id="error">All fields are required.</p>';
      return;
    }
  
    // Here you can send the form data to your server using AJAX or fetch API
    // Example:
    /*
    fetch('your-server-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log(data);
      document.getElementById("message").innerHTML = '<p>Registration successful!</p>';
      document.getElementById("registrationForm").reset();
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
      document.getElementById("message").innerHTML = '<p id="error">Registration failed. Please try again later.</p>';
    });
    */
  
    // For the sake of this example, let's just show a success message without sending the data anywhere.
    document.getElementById("message").innerHTML = '<p>Registration successful!</p>';
    document.getElementById("registrationForm").reset();
  });
  