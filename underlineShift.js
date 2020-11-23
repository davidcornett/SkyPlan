/*
CITATION: modified from:
https://webdesign.tutsplus.com/tutorials/how-to-build-a-shifting-underline-hover-effect-with-css-and-javascript--cms-28510
*/
const target = document.querySelector(".target");
const links = document.querySelectorAll(".topnav a");
var inactiveOpacity = "0.25";
var activeOpacity = "1";

document.addEventListener('DOMContentLoaded', setCurrentNav);
window.addEventListener("resize", resizeFunc);  // adjust when screen resizes

function setCurrentNav() {
  //set up link event listeners
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
    if (links[i].classList.contains("currentPage")) {
      //links[i].style.backgroundColor = "#283747";  //indicate current nav item
      links[i].style.opacity = "1";  //indicate current nav item
      links[i].addEventListener("click", function(e) {
       e.preventDefault()}); //don't reload current page
    } else {
        links[i].style.opacity = inactiveOpacity; //makes menu items translucent except for current item
    }
  }
}

function mouseenterFunc() {
  for (let i = 0; i < links.length; i++) {
    if (links[i].parentNode.classList.contains("active")) {
      links[i].parentNode.classList.remove("active");
    }
    if (links[i].classList.contains("currentPage")) {
      links[i].style.opacity = activeOpacity;  
    } else {
      links[i].style.opacity = inactiveOpacity;
    }
  }
   
  this.parentNode.classList.add("active");
  this.style.opacity = activeOpacity;  // makes current menu item opaque
   
  // creates rectangular object for which underline position can be calculated by x and y axis offset
  const width = this.getBoundingClientRect().width;
  const height = this.getBoundingClientRect().height;
  const left = this.getBoundingClientRect().left + window.pageXOffset;
  const top = this.getBoundingClientRect().top + window.pageYOffset;
  
  // set underline color: default is dark green; only first 2 menu item underlines are specified otherwise
  if (this == links[0]) {
  	const color = "#003366";
  	target.style.borderColor = color;
  }
  else if (this == links[1]) {
  	const color = "orange";
  	target.style.borderColor = color;
}
  else {
  	const color = "#0E6655";
  	target.style.borderColor = color;
  }
 
  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  target.style.transform = "none";
}

//makes underlining work properly when screen resizes
function resizeFunc() {
  const active = document.querySelector(".topnav li.active");
   
  if (active) {
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;
 
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
  }
}
//-------------------------------- END OF shifting underline code------------------------------------------
