const menuToggle = document.getElementById("menu-toggle");
const burgerMenu = document.getElementById("burger-menu");
const bar = document.querySelectorAll(".bar");

menuToggle.addEventListener("click", function () {
  burgerMenu.classList.toggle("hidden");
  bar.forEach((bar) => bar.classList.toggle("active"));
});
