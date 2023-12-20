const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Event Listener flèche gauche
arrowLeft.addEventListener("click", function () {
	currentIndex = (currentIndex - 1);
	updateCarousel(currentIndex, "left");
	updateDots(currentIndex);
});

// Event Listener flèche droite
arrowRight.addEventListener("click", function () {
	currentIndex = (currentIndex + 1);
	updateCarousel(currentIndex, "right");
	updateDots(currentIndex);
});

// Bullets points (dots)
function updateDots(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

