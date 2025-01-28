const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper .icon1");
arrowIcons = document.querySelectorAll(".wrapper .icon2");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 4;

arrowIcons.forEach(icon => {
icon.addEventListener("click", () => {
carousel.scrollLeft += icon.id == "icon1" ? -firstImgWidth : firstImgWidth;
});
});

const dragStart = (e) => {
isDragStart = true;
prevPageX = e.pageX;
prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
if(!isDragStart) return;
e.preventDefault();
carousel.classList.add("dragging");
let positionDiff = e.pageX - prevPageX;
carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
isDragStart = false;
carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);