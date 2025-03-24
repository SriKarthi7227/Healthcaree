<script>
  document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents form submission

      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      // Dummy credentials for testing
      let validEmail = "user@example.com";
      let validPassword = "password123";

      if (email === validEmail && password === validPassword) {
          alert("Login successful! Redirecting...");
          window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
          alert("Invalid email or password. Please try again.");
      }
  });
</script>



