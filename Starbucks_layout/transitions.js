function changeBackground(color) {
	const circle = document.querySelector('.main__image-background');
	circle.style.backgroundColor = color;
}

function changeImage(img) {
	const mainImage = document.querySelector('.main__image__src');
	mainImage.src = img;
}