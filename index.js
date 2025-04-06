document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById('slider');
	const prevBtn = document.getElementById('prev');
	const nextBtn = document.getElementById('next');
	let currentIndex = 1;
	const items = document.querySelectorAll('.slider-item');
	const totalItems = items.length;

	items.forEach(element => {
		if(element.id !== `item-${currentIndex}`) {
			element.style.transform = `translateX(100%)`;
		}
	});

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
	}

	prevBtn.addEventListener('click', () => {
		if (currentIndex === 1) {
			return false;
		}

		hiddenSlideRightDirection(currentIndex);

		currentIndex = currentIndex - 1;

		currentSlide(currentIndex);
	});

	nextBtn.addEventListener('click', () => {
		if (currentIndex === totalItems) {
			return false;
		}

		hiddenSlideLeftDirection(currentIndex);

		currentIndex = currentIndex + 1;

		currentSlide(currentIndex);
	});
});