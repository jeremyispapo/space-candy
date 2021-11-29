import renderCandy from './renderCandys.js'

const inputConsult = document.getElementById('consultCandy')
const consultView = document.querySelector('.consultView')
const button = document.getElementById('consultCandyButton')

button.addEventListener('click', () => {
	const stringCandys = localStorage.getItem('TotalCandys')
	const bruteCandys = JSON.parse(stringCandys)
	const Candys = bruteCandys.map(candy => JSON.parse(candy))

	const candy = Candys.filter(candy => candy.name === inputConsult.value)
	candy.forEach(({type,color}) => console.log(type,color))
	const render = candy[0]
	renderCandy(consultView,render.type,render.color)
})