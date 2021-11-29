import renderCandy from './renderCandys.js'

const inputDelete = document.getElementById('deleteCandy')
const deleteView = document.querySelector('.deleteCandy')
const button = document.getElementById('deleteCandyButton')

inputDelete.addEventListener('change', () => {
	deleteView.innerHTML = ''
	const stringCandys = localStorage.getItem('TotalCandys')
	const bruteCandys = JSON.parse(stringCandys)
	const Candys = bruteCandys.map(candy => JSON.parse(candy))

	const candy = Candys.filter(candy => candy.name === inputDelete.value)
	const render = candy[0]
	renderCandy(deleteView,render.type,render.color)

	button.addEventListener('click', () => {

		const newArray = Candys.filter(({name}) => name !== inputDelete.value)
		const newItem = newArray.map(item => JSON.stringify(item))

		const transJson = JSON.parse(JSON.stringify(newItem))
		localStorage.setItem('TotalCandys', JSON.stringify(transJson))
		inputDelete.value = ''
		deleteView.innerHTML = ''
	})
})
