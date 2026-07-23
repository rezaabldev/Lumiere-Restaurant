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


let currentImage = 0


const galleryImages = document.querySelectorAll(".gallery-item img"); 

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".close");


galleryImages.forEach((image,index)=>{

    image.addEventListener("click",(e)=>{

        currentImage = index;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

        lightboxImage.src = image.src;

    });

});


closeBtn.addEventListener("click",()=>{


    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

});

lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }


});

document.addEventListener("keydown",(e)=>{


    if(e.key === "Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }


});


document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {

        currentImage++;

        if (currentImage >= galleryImages.length) {

            currentImage = 0;

        }

        lightboxImage.src = galleryImages[currentImage].src;

    }

    if (e.key === "ArrowLeft") {

        currentImage--;

        if (currentImage < 0) {

            currentImage = galleryImages.length - 1;

        }

        lightboxImage.src = galleryImages[currentImage].src;

    }

});


const backToTop = document.querySelector(".back-to-top");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    loader.classList.add("hidden");

});

const reservationForm = document.querySelector("#reservationForm");

reservationForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = reservationForm.querySelectorAll("input");

    let isValid = true;

    inputs.forEach((input) => {

        if (input.value.trim() === "") {

            isValid = false;

        }

    });

    if (isValid) {

        const submitButton = reservationForm.querySelector("button");
    
        submitButton.disabled = true;
    
        submitButton.textContent = "Sending...";
    
        setTimeout(() => {
    
            alert("Your reservation request has been sent successfully!");
    
            reservationForm.reset();
    
            submitButton.disabled = false;
    
            submitButton.textContent = "Book Now";
    
        }, 1000);
    
    } 
    
    else {

        alert("Please fill in all fields.");

    }

});

