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
const dotsParent = document.querySelector("#dots");

let currentIndex = 0;

// Boucle slides et création dots chaque slides
// Ajout EventListener sur chaque dot pour changer de slides après chaque clique
for (let i = 0, l = slides.length; i < l; i++) {
	const dot = document.createElement('div')
	dot.addEventListener('click', function () {
		currentIndex = i
		updateCarousel()
		updateDots(i)
	})
	dot.classList.add('dot')
	if (i === 0) {
		dot.classList.add('dot_selected')
	}
	dotsParent.appendChild(dot)
}

const dots = document.querySelectorAll(".dot")

// Event Listener flèche gauche
arrowLeft.addEventListener("click", function () {
	if (currentIndex === 0) {
		currentIndex = slides.length - 1;
	} else {
		currentIndex--
	}
	updateCarousel();
	updateDots(currentIndex);
});

// Event Listener flèche droite
arrowRight.addEventListener("click", function () {
	if (currentIndex === slides.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex++
	}
	updateCarousel();
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

// Fonction mise à jour Caroussel
function updateCarousel() {
	// Ajout image
	const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImg.src = imagePath;
	bannerImg.alt = `Slide ${currentIndex + 1}`;

	// Ajout texte
	const tagLine = slides[currentIndex].tagLine;
	document.querySelector('p').innerHTML = tagLine;
}


