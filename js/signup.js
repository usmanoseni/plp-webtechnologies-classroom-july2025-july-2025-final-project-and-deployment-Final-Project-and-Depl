// JS validation
const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("passwordError");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  errorMessage.textContent = ""; // reset error

  if (password.value !== confirmPassword.value) {
    errorMessage.textContent = "Passwords do not match!";
    return;
  }

  if (password.value.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters!";
    return;
  }

  // Success case
  alert(`Welcome ${document.getElementById("name").value}, your account has been created!`);
  form.reset();
});

// Toggle password visibility
document.querySelectorAll(".togglePassword").forEach(icon => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const targetInput = document.getElementById(targetId);

    if (targetInput.type === "password") {
      targetInput.type = "text";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    } else {
      targetInput.type = "password";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    }
  });
});
