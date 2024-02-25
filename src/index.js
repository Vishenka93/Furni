import "./style.scss";
const root = document.getElementById("root");
const button = document.querySelector(".burger-menu");
const item = document.querySelector(".nav__menu");
const header = document.querySelector(".header");

button.onclick = (e) => {
    button.classList.toggle("menu-open");
    item.classList.toggle("active");
    header.classList.toggle("active");
    document.body.classList.toggle("_block");
};

window.addEventListener("scroll", function () {
    scrollY > 0
        ? header.classList.add("scroll")
        : header.classList.remove("scroll");
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 20,
});
