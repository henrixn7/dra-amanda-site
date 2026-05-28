const menuBtn = document.getElementById("menu-mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");
const fecharMenu = document.getElementById("fechar-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

fecharMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
});