const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


window.onscroll = function() {
    const docScrollTop = document.documentElement.scrollTop;
    if (window.innerWidth > 0) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}


function myFunction() {
	document.getElementById("Form").reset();
  }