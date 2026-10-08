const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active"); // 👈 NIEUW
});





let positie = 0;

function volgendeFoto() {
    const track = document.querySelector(".slider-track");
    const fotos = document.querySelectorAll(".slider-track img");

    if (positie < fotos.length - 2) {
        positie++;
    } else {
        positie = 0;
    }

    track.style.transform = `translateX(-${positie * 50}%)`;
}

function vorigeFoto() {
    const track = document.querySelector(".slider-track");
    const fotos = document.querySelectorAll(".slider-track img");

    if (positie > 0) {
        positie--;
    } else {
        positie = fotos.length - 1;
    }

    track.style.transform = `translateX(-${positie * 100}%)`;
}