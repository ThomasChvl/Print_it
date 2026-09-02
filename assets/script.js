// Donnees utilisees par le carrousel
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Elements du carrousel presents dans la page
const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

let currentSlideIndex = 0;

// Cree un point pour chaque slide et active le premier
slides.forEach((_, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");

	if (index === currentSlideIndex) {
		dot.classList.add("dot_selected");
	}

	dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Actualise l'image, le texte et le point actif du carrousel
function updateSlide() {
	const currentSlide = slides[currentSlideIndex];

	bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;
	bannerTagLine.innerHTML = currentSlide.tagLine;

	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentSlideIndex);
	});
}

// Passe a la slide precedente ou revient a la derniere
leftArrow.addEventListener("click", () => {
	if (currentSlideIndex === 0) {
		currentSlideIndex = slides.length - 1;
	} else {
		currentSlideIndex--;
	}

	updateSlide();
});

// Passe a la slide suivante ou revient a la premiere
rightArrow.addEventListener("click", () => {
	if (currentSlideIndex === slides.length - 1) {
		currentSlideIndex = 0;
	} else {
		currentSlideIndex++;
	}

	updateSlide();
});
