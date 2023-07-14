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
		responsive:
			[
				{
					breakpoint: 1200,
					settings: {
						variableWidth: true,
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 650,
					settings: {
						variableWidth: true,
						slidesToShow: 1,
					}
				},
				// {
				// 	breakpoint: 550,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		dragable: true,
				// 	}
				// },
			],
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

// ; (function () {
// 	let link1 = document.querySelector('.');

// })();



/*==================================== Animation ====================================*/

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll); //событие при котором будет происходить анимация
	function animOnScroll() {		//создаём функцию
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];			// получаем каждый элемент в цикле
			let animItemHeight = animItem.offsetHeight; //получаем высоту этого элемента
			let animItemOffset = offset(animItem).top;	//позиция элемента относительно верха
			let animStart = 4 //коэффициент, который будет регулировать момент старта анимации
			//Настройка момента старта анимации:
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			//Бывает, что элемент выше окна, поэтому нужно проверить:
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
				if (animItem.classList.contains('sm__drop-1') || animItem.classList.contains('cat__drop')) {
					animItem.classList.add('animation');
				}
				
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}

