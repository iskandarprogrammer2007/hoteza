let backTop = document.querySelector(".back-top");
let header = document.querySelector(".header");
let body = document.querySelector("body");


function showBackTop() {
  if (scrollY > 100) {
    backTop.classList.add("show__back-top");
  } else {
    backTop.classList.remove("show__back-top");
  }
}
function showHeaderShrink() {
  if (scrollY > 0) {
    header.classList.add("show__header__shrink");
  } else {
    header.classList.remove("show__header__shrink");
  }
}
