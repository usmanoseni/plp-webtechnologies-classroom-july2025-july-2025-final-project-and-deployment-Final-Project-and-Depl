  // Select the menu icon and nav-links
  const menuIcon = document.getElementById("icon-mobile");
  const mobileMenu = document.getElementById("mobile-container");

  menuIcon.addEventListener("click", () => {
    // Toggle between block and none
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  })