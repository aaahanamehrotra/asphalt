const hamburger = document.querySelector(".ham");
const navMenu = document.querySelector(".right");
hamburger.addEventListener("click", toggleFunc);

function toggleFunc() {
  navMenu.classList.toggle("active");
  console.log(navMenu.classList);
}
