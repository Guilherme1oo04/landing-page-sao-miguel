function hiddenSlideRightDirection(num_item) {
	const item = document.getElementById(`item-${num_item}`);
	item.style.transform = `translateX(${(num_item - 1) * 100}%)`;
}

function hiddenSlideLeftDirection(num_item) {
	const item = document.getElementById(`item-${num_item}`);
	item.style.transform = `translateX(-${(num_item) * 100}%)`;
}

function currentSlide(num_item) {
	const item = document.getElementById(`item-${num_item}`);
	item.style.transform = `translateX(-${(num_item - 1) * 100}%)`;
	window.scrollTo({
		top: 70,
		behavior: 'smooth'
	});
}

function prevBtn() {
	if (currentIndex === 1) {
		return false;
	}

	hiddenSlideRightDirection(currentIndex);

	currentIndex = currentIndex - 1;

	currentSlide(currentIndex);
}

function nextBtn() {
	if (currentIndex === totalItems) {
		return false;
	}

	hiddenSlideLeftDirection(currentIndex);

	currentIndex = currentIndex + 1;

	currentSlide(currentIndex);
}

let currentIndex = 1;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

document.addEventListener("DOMContentLoaded", function () {
	items.forEach(element => {
		if(element.id !== `item-${currentIndex}`) {
			element.style.transform = `translateX(100%)`;
		}
	});
});