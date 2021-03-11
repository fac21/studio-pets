
//Initialise variables for html elements
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

//Initialise variables for Javascript commented out as not needed

/* const enterKeyCode = 13;
const spaceKeyCode = 32; */


menuToggle.addEventListener("click", function(event) {
   /* if(event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) { */
        // let menuOpen = menu.checked;
        let menuOpen = menu.classList.contains("active");
        let newMenuOpenStatus= !menuOpen;
       
        menuToggle.setAttribute("aria-expanded", newMenuOpenStatus)
        menu.classList.toggle("active")
   console.log(newMenuOpenStatus)
   
   // }
});