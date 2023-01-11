const navSearchInput = document.querySelector('.nav-search-input');
const navSearchRightIcon = document.querySelector('.icon-right');
const searchInputContainer = document.querySelector('.nav__right--search-container__search-input-container')
const searchContainer = document.querySelector('.nav__right--search-container')
const searchContainerButton = document.querySelector('.nav__right--search-container__btn')



navSearchInput.addEventListener('input', function() {
	// const inputValue = this.value;
	if (this.value) {
		navSearchRightIcon.classList.add('show-icon');
	} else {
		navSearchRightIcon.classList.remove('show-icon');
	};
});

navSearchRightIcon.addEventListener('click', function() {
	navSearchInput.value = '';
});

searchContainerButton.addEventListener('click', function() {
	searchInputContainer.classList.toggle('show-search');
});

// searchContainerButton.addEventListener('blur', function() {
// 	searchInputContainer.classList.remove('show-search');
// });