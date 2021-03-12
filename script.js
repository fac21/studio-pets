
//Initialise variables for html elements
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const links = document.getElementsByClassName("nlink");

//Initialise variables for Javascript commented out as not needed

menuToggle.addEventListener("click", function() {
   let menuOpen = menu.classList.contains("active");
   let newMenuOpenStatus= !menuOpen;
   menuToggle.setAttribute("aria-expanded", newMenuOpenStatus)
   menu.classList.toggle("active")
});

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function() {
      menu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", false)
   });
}
