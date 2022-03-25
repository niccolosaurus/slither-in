const signupUser = async (event) => {
    event.preventDefault();
  
    // JRM: Gathers the user's login credentials to be created.
    const username = document.getElementById('name-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
  
    // JRM: If values are present for the name, email, and password fields, a POST request is sent to save these credentials.
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // JRM: If the POST is successful, the user is redirected to their dashboard page. Otherwise, they receive an error alert.
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

// JRM: Event listener for the signup button.
const signupBtn = document.getElementById('signup-button');
signupBtn.addEventListener('click', signupUser);
