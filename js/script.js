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


/*==================================== SLIDER ====================================*/


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
						slidesToShow: 1,
					}
				},
			],
		arrows: false,
		dots: true,
		appendDots: ('.cat__dots'),
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

	; (function () {

		let slider = document.querySelector('.cat__slider');
		let popUpSlider = document.querySelector('.cat__pop-up');
		let popUpOverlay = document.querySelector('.pop-up-overlay');
		let backs = document.querySelectorAll('.pop-up__slide-back');


		slider.addEventListener('click', function () {
			popUpSlider.classList.add('cat__pop-up--active');
			popUpOverlay.classList.add('pop-up-overlay--show');

		});
		popUpOverlay.addEventListener('click', function () {
			popUpSlider.classList.remove('cat__pop-up--active');
			popUpOverlay.classList.remove('pop-up-overlay--show');
		});

		for (let back of backs) {
			back.addEventListener('click', function () {
				popUpSlider.classList.remove('cat__pop-up--active');
				popUpOverlay.classList.remove('pop-up-overlay--show');
			});
		}

	})();


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("pop-up__slide");
	let dots = document.getElementsByClassName("cat__slide");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slides[i].classList.remove('pop-up__slide--active');

	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" __active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " __active";
}




/*==================================== Animation ====================================*/

; (function () {

	let animItems = document.querySelectorAll('.anim-item');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let i = 0; i < animItems.length; i++) {
				let animItem = animItems[i];
				let animItemHeight = animItem.offsetHeight;
				let animItemOffset = offset(animItem).top;
				let animStart = 8;
				let animItemPoint = window.innerHeight - (animItemHeight / animStart);

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - (window.innerHeight / animStart);
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
					animItem.classList.add('anim-item--active');

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

})();


/*==================================== PARALLAX ====================================*/

/*------------------------------ ms ------------------------------*/

; (function () {
	let leaf1 = document.querySelector('.ms__leaf-1');
	let leaf2 = document.querySelector('.ms__leaf-2');
	let leaf3 = document.querySelector('.ms__leaf-3');
	let leaf4 = document.querySelector('.ms__leaf-4');
	let leaf5 = document.querySelector('.ms__leaf-5');

	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		leaf1.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf2.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf3.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf4.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf5.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
	});
})();

/*------------------------------ ss ------------------------------*/

; (function () {
	let leaf2 = document.querySelector('.ss__leaf-2');
	let leaf3 = document.querySelector('.ss__leaf-3');
	let leaf4 = document.querySelector('.ss__leaf-4');

	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		leaf2.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf3.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf4.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
	});
})();
/*------------------------------ sm ------------------------------*/

; (function () {
	let leaf1 = document.querySelector('.sm__leaf-1');
	let leaf2 = document.querySelector('.sm__leaf-2');
	let leaf3 = document.querySelector('.sm__leaf-3');
	let leaf4 = document.querySelector('.sm__leaf-4');

	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		leaf1.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf2.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf3.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
		leaf4.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
	});
})();


/*==================================== PRELOADER ====================================*/


window.onload = function () {

	setTimeout(function () {
		document.querySelector('.preloader').style.display = "none";
	}, 400);

};


/*==================================== SCROLL ====================================*/


// if (window.innerWidth <= 768) {
// 	document.querySelector('.sm').classList.remove('scroll');
// 	document.querySelector('.hero').classList.remove('scroll');
// 	document.querySelector('.ms').classList.remove('scroll');
// 	document.querySelector('.ss').classList.remove('scroll');
// 	document.querySelector('.cat').classList.remove('scroll');

// }
$.scrollify({
	section: ".scroll",
	interstitialSection: "",
	easing: "easeOutExpo",
	scrollSpeed: 1100,
	offset: 0,
	scrollbars: true,
	// standardScrollElements: ".cat",
	// standardScrollElements: ".footer",
	setHeights: true,
	overflowScroll: true,
	updateHash: true,
	touchScroll: true,
	before: function () { },
	after: function () { },
	afterResize: function () { },
	afterRender: function () { }
});


/*==================================== VIDEO ====================================*/

let videoBox = document.querySelector('.hero__video');
let video = document.querySelector('.hero__video video');
let videoBtn = document.querySelector('.hero__button');
let body = document.querySelector('body');
let logo = document.querySelector('.hero__heading');
let heroBg = document.querySelector('.hero__bg');



// logo.addEventListener('click', function logo() {
// 	video.play();
// 	this.style.display = 'none';
// 	videoBox.classList.remove('hero__video--off');
// 	video.setAttribute('controls', '');
// 	videoBtn.style.display = 'none';
// });

video.addEventListener('ended', function () {
	videoBox.classList.add('hero__video--off');
	logo.style.display = 'block';
	videoBtn.style.display = 'flex';
	heroBg.style.display = 'block';
	if (window.innerWidth <= 768) {
		heroBg.style.display = 'none';
	}
});


videoBtn.addEventListener('click', function (e) {
	video.play();
	logo.style.display = 'none';
	videoBtn.style.display = 'none';
	video.setAttribute('controls', '');
	videoBox.classList.remove('hero__video--off');
	heroBg.style.display = 'none';

});
if (window.innerWidth <= 768) {
	videoBox.classList.add('hero__video--off');
	heroBg.style.display = 'none';
	logo.removeEventListener('click', logo);
}





