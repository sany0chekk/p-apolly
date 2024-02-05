'use strict';

const burger = document.querySelector('[data-burger]');
const burgerLink = document.querySelectorAll('[data-burger-link]');
const burgerSocial = document.querySelectorAll('[data-social-link]');
const burgerOpen = document.querySelector('[data-burger-open]');
const burgerClose = document.querySelector('[data-burger-close]');

burgerOpen.addEventListener('click', () => {
	burger.classList.add('header-burger-active');
	burgerLink.forEach((e, index) => {
		setTimeout(() => {
			e.classList.add('header-burger-item-active');
		}, index * 200);
	});
	setTimeout(() => {
		burgerSocial.forEach((e, index) => {
			setTimeout(() => {
				e.classList.add('header-burger-social-item-active');
			}, index * 200);
		});
	}, 1000);
});

burgerClose.addEventListener('click', () => {
	burger.classList.remove('header-burger-active');
	burgerLink.forEach((e) => {
		e.classList.remove('header-burger-item-active');
	});
	burgerSocial.forEach((e) => {
		e.classList.remove('header-burger-social-item-active');
	});
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
