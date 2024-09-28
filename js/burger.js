const btnOpen = document.getElementById('btnBurgerOpen')
const backdrop = document.querySelector('.backdrop')
const burgerMenu = document.querySelector('.burger')

const toggleMenu = () => {
	backdrop.classList.toggle('hidden')
	backdrop.classList.toggle('flex')
}

btnOpen.addEventListener('click', toggleMenu)
backdrop.addEventListener('click', () => {
	backdrop.classList.add('hidden')
	backdrop.classList.remove('flex')
})
burgerMenu.addEventListener('click', e => {
	e.stopPropagation()
})
