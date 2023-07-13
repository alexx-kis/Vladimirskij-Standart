'use strict';

/*==================================== MENU ====================================*/

; (function () {
	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.header__menu');
	let menuText1 = document.querySelector('.header__button-text-1');
	let menuText2 = document.querySelector('.header__button-text-2');
	
	let overlay = document.querySelector('.header__overlay');
	
	burger.addEventListener('click', function () {
		overlay.classList.toggle('header__overlay--show');
		burger.classList.toggle('burger--open');
		menuText2.classList.toggle('header__button-text-2--open');
		menuText1.classList.toggle('header__button-text-1--open');
		menu.classList.toggle('header__menu--open');
	});
	
	
})();

$(function () {
	$('.cat__slider').slick({
		arrows: false,
		slidesToShow: 3,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		// responsive:
		// 	[
		// 		{
		// 			breakpoint: 1100,
		// 			settings: {
		// 				slidesToShow: 3,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 750,
		// 			settings: {
		// 				slidesToShow: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 550,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				dragable: true,
		// 			}
		// 		},
		// 	],
		arrows: false,
		dots: false,
		// appendDots: ('.block__dots'),
		waitForAnimate: false,
	})
})

$('.cat__arrow-prev').on('click', function (e) {
	$('.cat__slider').slick('slickPrev')
})
$('.cat__arrow-next').on('click', function (e) {
	$('.cat__slider').slick('slickNext')
})

/*------------------------------ POP-UP SLIDER------------------------------*/

$(function () {
	$('.pop-up__slider').slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		// responsive:
		// 	[
		// 		{
		// 			breakpoint: 1100,
		// 			settings: {
		// 				slidesToShow: 3,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 750,
		// 			settings: {
		// 				slidesToShow: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 550,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				dragable: true,
		// 			}
		// 		},
		// 	],
		arrows: false,
		dots: false,
		// appendDots: ('.block__dots'),
		waitForAnimate: false,
	})
})

$('.pop-up__slide-arrow--prev').on('click', function (e) {
	$('.pop-up__slider').slick('slickPrev')
})
$('.pop-up__slide-arrow--next').on('click', function (e) {
	$('.pop-up__slider').slick('slickNext')
})

	/*------------------------------ POP-UP MODAL ------------------------------*/

	; (function () {
		let link1 = document.querySelector('.');

	})();