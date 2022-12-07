// Navbar
/*==================== Menampilkan Menu ====================*/
const navMenu   = document.getElementById('nav-menu'),
    navToggle   = document.getElementById('nav-toggle'),
    navClose    = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== Menghilangkan Menu Mobile ====================*/
const navLink = document.querySelectorAll('.nav__link');

// function remove show-menu class ketika kita klik nav__link
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== Mengubah Background Header ====================*/
function scrollHeader(){
    const header = document.getElementById('header');
    // Menambahkan  scroll-header class ke header tag ketika scroll lebih dari 65vh
    if(this.scrollY >= 65) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// End Nav


/* =================== Slider ==================== */
const   slider          = document.querySelector(".slider"),
        nextBtn         = document.querySelector(".next-btn"),
        prevBtn         = document.querySelector(".prev-btn");
const   slides          = document.querySelectorAll(".slide"),
        slideIcons      = document.querySelectorAll(".slide-icon");
const   numberOfSlides  = slides.length;
let     slideNumber     = 0;

//nextBtn slider
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    } 

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//prevBtn slider
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//autoplay-slider
let playSlider;

let repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();

//stop autoplay slider ketika mouse diarahkan kedalam slider
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

// start autoplay slider ketika mouse diarahkan keluar dari slider
slider.addEventListener("mouseout", () => {
    repeater();
});

/* =================== End Slider ==================== */

/* =================== Scroll Up ==================== */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    // ketika scroll sudah lebih dari 250vh --> menambahkan class show-scroll 
    if (this.scrollY >= 250) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/* =================== End Scroll Up ==================== */