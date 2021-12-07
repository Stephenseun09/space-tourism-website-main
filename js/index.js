const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.style.right = 0;
});
closeMenu.addEventListener("click", () => {
  nav.style.right = "-100vw";
});
