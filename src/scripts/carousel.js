window.addEventListener("load", windowLoad);

function windowLoad() {
  console.log("Forbindelse til carousel.js");
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper button");
  const firstInstaWidth = carousel.querySelector(".instapic").offsetWidth; //vi får den første instapics width
  const carouselChildrens = [...carousel.children]; //array af karrusellens "children" aka. <li> elementerne.

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  //få nummeret af pics som kan passe inde i karrusellen på én gang ved at bruge "Math.round()" som runder op til nærmeste heltal så vi får sat hele billeder ind
  let cardPerView = Math.round(carousel.offsetWidth / firstInstaWidth);

  //indsætter kopier af de sidste par insta pics i begyndelsen af karrusllen + infite scrolling
  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

  //indsætter kopier af de første par insta pics i begyndelsen af karrusllen + infite scrolling
  carouselChildrens.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // tilføj eventlisteners for at få arrow-knapperne til at scrolle højre og venstre.
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.id);
      //  -- tjekker at knapperne virker i console
      carousel.scrollLeft += btn.id === "left" ? -firstInstaWidth : firstInstaWidth;
      //
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //registrerer den indledende markør (mus) og rulleposition/koordinater ift. hvor den er i karrusellen ⤵️ ned til const dragging =>
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return; // if isDragging er "false" 'return' herfra.
    // console.log(e.pageX);
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    //opdatere scroll positionen af karrusellen ift. musens bevægelser.
  };
  //e.pageX retunere den horisontale koordinater for musen => når man console.log'er den så fortæller den i console hvor musens koordinater er.
  //scrollLeft indstiller eller returnerer antallet af pixels et elements (div i denne case) indhold er scrollet til siden horisontalt.

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
    //få musen til at stoppe med at "scrolle med" når man ikke klikker og holder den inde / => så den kun bevæger sig når man har fingeren på skærmen eller holder klikken inde.
  };

  const autoPlay = () => {
    if (window.innerWidth < 800) return; // return til start hvis mindre end 800
    //auto-play af karrusellen hvert 3 sek (3000ms)
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstInstaWidth), 3000);
  };
  autoPlay();

  const infiniteScroll = () => {
    // ---- hvis karrusellen er ved starten => scroll til enden
    if (carousel.scrollLeft === 0) {
      //   console.log("You've reached to the left end");
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    // ---- hvis karrusellen er ved slutte => scroll til starten
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      //   console.log("You've reached to the right end");
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }

    // fjerner eksiterende timeout og begynder autoPlay hvis musen ikke "hover" på karrusellen
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);
}
