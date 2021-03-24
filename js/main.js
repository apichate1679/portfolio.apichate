const mySwiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})
window.addEventListener('scroll',function(){
    var header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>0);
});
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}