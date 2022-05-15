
// menu trigger
var menuButton = document.querySelector("#open-menu");
// the menu
var projectsMenu = document.querySelector("#projects_nav");

// data
var menuOpen = false;

// functions
function toggleMenu() {
  // if the menu is not showing...
  if (!menuOpen) {
    // show it
    projectsMenu.classList.add("show");
    menuOpen = true;
  } else {
    // otherwise...
    // hide it
    projectsMenu.classList.remove("show");
    menuOpen = false;
  }
    

}

// user interactions
// a user clicks the menu button
menuButton.addEventListener("click", toggleMenu)