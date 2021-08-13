const btn = document.querySelector(".btn-hamburger");
const img = btn.querySelector("img");
const ulNav = document.querySelector(".nav-links ul");
const overflow = document.querySelector(".overflow-shadow");
let state = false;
btn.addEventListener("click", function (e) {
  e.preventDefault();
  ulNav.classList.toggle("active");
  overflow.classList.toggle("active");
  state = !state;
  if (state) {
    img.setAttribute("src", "./images/icon-close.svg");
    console.log("hat");
  } else {
    img.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
