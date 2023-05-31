window.addEventListener("load", windowLoad);

function windowLoad() {
  const burgermenu = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-buttons");
  const mainElement = document.querySelector("main");

  burgermenu.addEventListener("click", () => {
    console.log("hej1");
    burgermenu.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (mainElement.classList.contains("hide2")) {
      // Fjerner hide2 med 50 ms delay
      setTimeout(() => {
        mainElement.classList.toggle("hide2");
      }, 50);
    } else {
      // Tilføjer hide2 med 130ms delay
      setTimeout(() => {
        mainElement.classList.toggle("hide2");
      }, 130);
    }
  });

  document.querySelectorAll(".nav-button").forEach((n) =>
    n.addEventListener("click", () => {
      burgermenu.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}
