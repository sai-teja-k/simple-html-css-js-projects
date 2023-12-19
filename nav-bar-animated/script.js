const navbar = document.querySelector(".navbar");

function toggleMenu() {
    if (navbar.classList.contains("expanded")) {
      navbar.classList.remove("expanded");
    }
    else {
      navbar.classList.add("expanded");
    }
}  