// -----------------------------------
// VARIABLES
// -----------------------------------

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const pictures = document.querySelectorAll(".pictures-wrap img.img");
const allCircles = document.querySelectorAll(".circle");

let index = 0;

// GESTION DU DEFILEMENT DES SLIDES AVEC LES FLECHES

// droite
arrowRight.addEventListener("click", nextSlide);

function nextSlide() {
	if (index < 2) {
		pictures[index].classList.remove("active");
		index++;
		pictures[index].classList.add("active");
	} else if (index === 2) {
		pictures[index].classList.remove("active");
		index = 0;
		pictures[index].classList.add("active");
	}
	// faire concorder les cercles avec les images qui défilent
	for (let i = 0; i < allCircles.length; i++) {
		if (allCircles[i].getAttribute("data-index") == index) {
			// console.log(allCircles[i].getAttribute("data-index"));
			allCircles[i].classList.add("active-circle");
		} else {
			allCircles[i].classList.remove("active-circle");
		}
	}
}

// gauche
arrowLeft.addEventListener("click", previousSlide);

function previousSlide() {
	if (index > 0) {
		pictures[index].classList.remove("active");
		index--;
		pictures[index].classList.add("active");
		console.log(index);
	} else if (index === 0) {
		pictures[index].classList.remove("active");
		index = pictures.length - 1;
		pictures[index].classList.add("active");
		console.log(index);
	}
	// faire concorder les cercles avec les images qui défilent
	for (let i = 0; i < allCircles.length; i++) {
		if (allCircles[i].getAttribute("data-index") == index) {
			// console.log(allCircles[i].getAttribute("data-index"));
			allCircles[i].classList.add("active-circle");
		} else {
			allCircles[i].classList.remove("active-circle");
		}
	}
}

// GESTION DU DEFILEMENT AVEC LES FLECHES CLAVIER
document.addEventListener("keydown", keypressed);

function keypressed(e) {
	console.log(e.keyCode);
	if (e.keyCode === 39) {
		nextSlide();
	} else if (e.keyCode === 37) {
		previousSlide();
	}
}
// cercles
// on n'utilise pas de fonction félcéhée car on veut utiliser this = contexte appelant
// il faut donc utiliser une fonction classique
allCircles.forEach((circle) => {
	circle.addEventListener("click", function () {
		// il faut d'abord supprimer la classe active de tous les cercles
		for (let i = 0; i < allCircles.length; i++) {
			allCircles[i].classList.remove("active-circle");
		}
		console.log(this);
		this.classList.add("active-circle");
		pictures[index].classList.remove("active");
		index = parseInt(this.getAttribute("data-index"));
		pictures[index].classList.add("active");
		console.log(index);
	});
});
