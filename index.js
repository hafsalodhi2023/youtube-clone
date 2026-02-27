const hamburger = document.getElementsByClassName("hamburger");
const aside = document.getElementsByTagName("aside")[0];
const overlay = document.getElementsByClassName("overlay")[0];

Array.from(hamburger).forEach((element) => {
  element.addEventListener("click", () => {
    aside.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

overlay.addEventListener("click", () => {
  aside.classList.toggle("active");
  overlay.classList.toggle("active");
});
