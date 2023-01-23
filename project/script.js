console.clear();
const bannerItem = document.querySelectorAll(".banner-item"),
    btn = document.querySelectorAll(".banner-btn"),
    next = document.querySelector(".next"),
    hamburger = document.querySelector(".hamburger"),
    html = document.querySelector("html"),
    navbar = document.querySelector(".navbar"),
    prev = document.querySelector(".prev");
let index = 0;
// hamburger 
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("nav-active");
    navbar.classList.toggle("nav-active");
    html.classList.toggle("scroll");
})
//  function for banner item
function bannerSlide(index) {
    const activeToggle = document.querySelector(".banner-active");
    activeToggle.classList.remove("banner-active");
    bannerItem[index].classList.add("banner-active");
    const btnActive = document.querySelector(".btn-active");
    btnActive.classList.remove("btn-active");
    btn[index].classList.add("btn-active");
}

// btn event 
next.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = bannerItem.length - 1;
    };
    bannerSlide(index);
});
prev.addEventListener("click", function () {
    index++;
    if (index > bannerItem.length - 1) {
        index = 0;
    };
    bannerSlide(index);
});

function removeClass() {
    for (let li of bannerItem) {
        li.classList.remove("banner-active");
    };
}

// event for slider btn
btn.forEach(function (element, idx) {
    element.addEventListener("click", function () {
        const btnActive = document.querySelector(".btn-active");
        btnActive.classList.remove("btn-active");
        btn[idx].classList.add("btn-active");
        index = idx;
        removeClass();
        bannerItem[idx].classList.add("active");
    });
});

$(document).ready(function () {
    $("#bannerCarousel").owlCarousel({
      loop: true,
      nav: true,
      items: 1,
    });
  });