const toggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.hidden__menu');
const close = document.querySelector('.fa-circle-xmark');
const navLink = document.querySelectorAll('.link');
const navLogo = document.querySelector('.nav__logo');

// running parallax js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


// for open nav__menu
toggle.onclick = function () {
      menu.classList.add("open");
  }
  
  // for close nav__menu
  close.onclick = function () {
      menu.classList.remove("open");
  }
  
  // when nav__link click -> close nav__menu
  function linkClick(){
      // When we click on each nav__link, we remove the show-menu class
      menu.classList.remove('open')
  }
  navLink.forEach(n => n.addEventListener('click', linkClick))

//   when nav logo click -> close sideBar
navLogo.onclick = function () {
      menu.classList.remove('open')
}
//  when user click outside the sidebar -> close sidebar
document.addEventListener('mouseup', function(e) {
    // var container = document.getElementById('container');
    if (!menu.contains(e.target)) {
        menu.classList.remove("open");
    }
});


// typer
var message = ["Front End Developer"];
var textPositions = 0;
var speed = 120;

typewriter = () => {
    document.querySelector('#profession').innerHTML = message[0].substring(0, textPositions)
        + "<span>\u25ae</span>";
    
    if (textPositions++ != message[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
  


  // change navbar background while scroll
  function scrollHeader(){
      const header = document.getElementById('navbar')
      // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
      if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)

  function scrollSideBar(){
    const header = document.getElementById('sidebar')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) header.classList.add('scroll-sidebar'); else header.classList.remove('scroll-sidebar')
}
window.addEventListener('scroll', scrollSideBar)



// Project Filter

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project__box");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("btn__container");
var btns = btnContainer.getElementsByClassName("menu__list");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}