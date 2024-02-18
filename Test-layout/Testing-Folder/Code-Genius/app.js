const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function working(){
const elements = document.querySelector(".elements");
const FixedImage = document.querySelector("#fixed")
const elem = document.querySelectorAll(".elem");
elements.addEventListener("mouseenter",(e)=>{
    e.preventDefault();
    FixedImage.style.display = "block"
});
elements.addEventListener("mouseleave",(e)=>{
    e.preventDefault();
    FixedImage.style.display = "none"
});
elem.forEach((single)=>{
    single.addEventListener("mouseenter",(e)=>{
    let elemAttribute = single.getAttribute("data-image");
    FixedImage.style.backgroundImage = `url(${elemAttribute})`    
});
});
};
working()

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function menu(){
const nav = document.querySelector("#full-div1 h5");
const menu = document.querySelector("nav h3");
const navHone = document.querySelector("#header img");
const full = document.querySelector("#full-sc")
let flag = 0;
menu.addEventListener("click",(e)=>{
    // e.preventDefault();
    if(flag == 0){
        full.style.top = 0
        navHone.style.opacity = 0
        flag = 1
        nav.style.display = "block"
    }else{
        full.style.top = "-100%"
        navHone.style.opacity = 1
        flag = 0
        nav.style.display = "none"
    }
   
})
}
const loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%"
},5000)

menu()
swiperAnimation()