const NavBar = document.getElementById("barIcon");
const nav = document.querySelector("nav");
const barIcon = document.getElementById("barIcon");

const resturantName = document.querySelector(".resturantName");
let clickChecketr = false;
NavBar.addEventListener("click", () => {
  nav.style.display = "flex";
  nav.style.transition = "200ms ease";
  resturantName.style.display = "none";
  if (barIcon.className == "fa fa-bars fa-2x") {
    barIcon.setAttribute("class", "fa fa-times fa-2x");
  } else if (barIcon.className == "fa fa-times fa-2x") {
    nav.style.display = "none";
    resturantName.style.display = "block";
    barIcon.setAttribute("class", "fa fa-bars fa-2x");
    clickChecketr = false;
  }
});
