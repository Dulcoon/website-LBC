import { gsap } from "gsap";

gsap.to("#logo-container", { x: 300, duration: 1 });


window.addEventListener("load", enableMobileMenu);
window.addEventListener("resize", enableMobileMenu);

function enableMobileMenu() {
  let menu = document.querySelector(".menu"),
    links = document.querySelector(".links");
  if (window.innerWidth <= 1024) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("opened");
      links.classList.toggle("show");
    });
  } else {
    if (menu.classList.contains("opened")) menu.classList.remove("opened");
    if (links.classList.contains("show")) links.classList.remove("show");
  }
}


