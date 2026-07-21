const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active"); }

);

const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", () => {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;


        if (revealTop < windowHeight - 100) {

            item.classList.add("active");

        }

    });

});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;


        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });



    navLinks.forEach((link)=>{

        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });


});

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


});

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";

});

