const whiteHeart = document.querySelector(".white-heart");
const redHeart = document.querySelector(".red-heart");

whiteHeart.addEventListener("click" , () => {
    redHeart.classList.add("animation");
    whiteHeart.classList.add("fill-color");
})

redHeart.addEventListener("click" , () => {
    redHeart.classList.remove("animation");
    whiteHeart.classList.remove("fill-color");
})