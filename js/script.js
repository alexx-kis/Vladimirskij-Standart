'use strict';

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