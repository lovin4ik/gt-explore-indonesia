/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	theme: {
		extend: {
			colors: {
				'main-red': '#DD2242',
				'main-blue': '#010a20',
				lighten: '#e0e0e0',
				'grey-reduced': '#85a3b2',
				'paragrapg-dark': '#6f7787'
			},
			screens: {
				sm: '375px',
				'sm-max': { max: '375px' },
				md: '768px',
				'md-max': { max: '768px' },
				lg: '992px',
				'lg-max': { max: '992px' },
				xl: '1200px',
				'xl-max': { max: '1200px' },
				'2xl': '1320px',
				'2xl-max': { max: '1320px' },
				'3xl': '1600px',
				'3xl-max': { max: '1600px' },
				'4xl': '1900px',
				'4xl-max': { max: '1900px' }
			},
			fontFamily: {
				'dm-sans': ['DM Sans', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			},
			backgroundImage: {
				'hero-bg': 'url(../images/hero-bg.png)',
				'walk-bg':
					'linear-gradient(360deg, #010A20 0%, rgba(1, 10, 32, 0.9) 100%), url(../images/walk.png)',
				'palm-bg':
					'linear-gradient(180deg, #010A20 0%, rgba(1, 10, 32, 0.9) 100%), url(../images/palm.png)',
				'explore-bg': 'url(../images/explore-bg.png)',
				'numbers-bg':
					'linear-gradient(180deg, rgba(1, 10, 32, 0.9) 0%, rgba(1, 10, 32, 0.9) 100%), url(../images/explore-bg.png)',
				'map-bg':
					'url(../images/map-sec-bg.svg), url(../images/map-sec-bg-second.svg)'
			},
			backgroundPosition: {
				'map-pos': 'left top, right bottom'
			}
		}
	},
	plugins: []
}
