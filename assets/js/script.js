const navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    document.querySelector('.menu-btn').classList.toggle('active');
    document.querySelector('.search-btn').classList.remove('active')
}

const searchForm = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    document.querySelector('.search-btn').classList.toggle('active');
    document.querySelector('.menu-btn').classList.remove('active')
}

// const body = document.querySelector('body')
// document.querySelector('#theme-btn').onclick = () => {
//     body.classList.toggle('active')
// }

const themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
});