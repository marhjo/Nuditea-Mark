window.addEventListener("load", viewFavorit);

function viewFavorit() {
  console.log("viewFavorit");
  document.querySelector("#fruit").classList.add("hide");
  document.querySelector("#milk").classList.add("hide");
  document.querySelector("#bubble").classList.add("hide");
  document.querySelector("#warm").classList.add("hide");

  document.querySelector("#fav").classList.remove("hide");
  document.querySelector("#favknap").setAttribute("class", "active astro-IJXPF4R4");

  document.querySelector("#fruitknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#milkknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#bubbleknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#warmknap").setAttribute("class", "default astro-IJXPF4R4");

  document.querySelector("#fruitknap").addEventListener("click", viewFruit);
  document.querySelector("#milkknap").addEventListener("click", viewMilk);
  document.querySelector("#bubbleknap").addEventListener("click", viewBubble);
  document.querySelector("#warmknap").addEventListener("click", viewWarm);
}

function viewFruit() {
  console.log("viewFruit");
  document.querySelector("#fav").classList.add("hide");
  document.querySelector("#milk").classList.add("hide");
  document.querySelector("#bubble").classList.add("hide");
  document.querySelector("#warm").classList.add("hide");

  document.querySelector("#fruit").classList.remove("hide");
  document.querySelector("#fruitknap").setAttribute("class", "active astro-IJXPF4R4");

  document.querySelector("#favknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#milkknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#bubbleknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#warmknap").setAttribute("class", "default astro-IJXPF4R4");

  document.querySelector("#favknap").addEventListener("click", viewFavorit);
  document.querySelector("#milkknap").addEventListener("click", viewMilk);
  document.querySelector("#bubbleknap").addEventListener("click", viewBubble);
  document.querySelector("#warmknap").addEventListener("click", viewWarm);
}

function viewMilk() {
  console.log("viewMilk");
  document.querySelector("#fav").classList.add("hide");
  document.querySelector("#fruit").classList.add("hide");
  document.querySelector("#bubble").classList.add("hide");
  document.querySelector("#warm").classList.add("hide");

  document.querySelector("#milk").classList.remove("hide");
  document.querySelector("#milkknap").setAttribute("class", "active astro-IJXPF4R4");

  document.querySelector("#favknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#fruitknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#bubbleknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#warmknap").setAttribute("class", "default astro-IJXPF4R4");

  document.querySelector("#favknap").addEventListener("click", viewFavorit);
  document.querySelector("#fruitknap").addEventListener("click", viewFruit);
  document.querySelector("#bubbleknap").addEventListener("click", viewBubble);
  document.querySelector("#warmknap").addEventListener("click", viewWarm);
}
function viewBubble() {
  console.log("viewBubble");
  document.querySelector("#fav").classList.add("hide");
  document.querySelector("#fruit").classList.add("hide");
  document.querySelector("#milk").classList.add("hide");
  document.querySelector("#warm").classList.add("hide");

  document.querySelector("#bubble").classList.remove("hide");
  document.querySelector("#bubbleknap").setAttribute("class", "active astro-IJXPF4R4");

  document.querySelector("#favknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#fruitknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#milkknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#warmknap").setAttribute("class", "default astro-IJXPF4R4");

  document.querySelector("#favknap").addEventListener("click", viewFavorit);
  document.querySelector("#fruitknap").addEventListener("click", viewFruit);
  document.querySelector("#milkknap").addEventListener("click", viewMilk);
  document.querySelector("#warmknap").addEventListener("click", viewWarm);
}
function viewWarm() {
  console.log("viewWarm");
  document.querySelector("#fav").classList.add("hide");
  document.querySelector("#fruit").classList.add("hide");
  document.querySelector("#milk").classList.add("hide");
  document.querySelector("#bubble").classList.add("hide");

  document.querySelector("#warm").classList.remove("hide");
  document.querySelector("#warmknap").setAttribute("class", "active astro-IJXPF4R4");

  document.querySelector("#favknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#fruitknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#bubbleknap").setAttribute("class", "default astro-IJXPF4R4");
  document.querySelector("#milkknap").setAttribute("class", "default astro-IJXPF4R4");

  document.querySelector("#favknap").addEventListener("click", viewFavorit);
  document.querySelector("#fruitknap").addEventListener("click", viewFruit);
  document.querySelector("#milkknap").addEventListener("click", viewMilk);
  document.querySelector("#bubbleknap").addEventListener("click", viewBubble);
}
