const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("loginError");

// Form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessage.textContent = "";

  if (!email.value.includes("@")) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.value.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Success case
  alert(`Welcome back, ${email.value}! 🎉`);
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
