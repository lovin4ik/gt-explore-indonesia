const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	speed: 500,
	spaceBetween: 31,
	autoplay: {
		delay: 5000
	},

	breakpoints: {
		1400: {
			slidesPerView: 3,
			spaceBetween: 0
		},
		1200: {
			spaceBetween: 0,
			slidesPerView: 2
		}
	},

	pagination: {
		el: '.swiper-pagination'
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})
