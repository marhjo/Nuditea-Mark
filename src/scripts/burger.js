const burgermenu = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-buttons");

burgermenu.addEventListener("click", () => {
  burgermenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-button").forEach((n) =>
  n.addEventListener("click", () => {
    burgermenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
