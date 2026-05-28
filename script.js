const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("ativo");
  } else {
    header.classList.remove("ativo");
  }
});