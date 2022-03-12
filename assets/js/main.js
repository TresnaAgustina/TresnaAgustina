const toggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.hidden__menu');
const close = document.querySelector('.fa-circle-xmark');
const navLink = document.querySelectorAll('.link');

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
  
  
//   // change navbar background while scroll
//   function scrollHeader(){
//       const header = document.getElementById('header')
//       // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//       if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
//   }
//   window.addEventListener('scroll', scrollHeader)

