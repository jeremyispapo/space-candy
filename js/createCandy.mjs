import renderCandy from './renderCandys.js'


const candyView = document.querySelectorAll('.candyView')


const buttonCreateCandy = document.getElementById('createCandy')
// const createCandyPreview = document.getElementById('createCandyPreview')
const nameCandy = document.getElementById('nameCandy')
const typeCandy = document.getElementById('typeCandy')
const colorCandy = document.getElementById('colorCandy')
colorCandy.value = '#ffffff'
const powerCandy = document.getElementById('powerCandy')
const priceCandy = document.getElementById('priceCandy')

nameCandy.addEventListener('change', ()=>{
	if((nameCandy.value).length > 0) {
		typeCandy.removeAttribute('disabled')
	}
})

typeCandy.addEventListener('change', () => {
	candyView[0].innerHTML = ``
	// createCandyPreview.classList.remove('lollipop', 'gum', 'candy', '0')
	// createCandyPreview.classList.toggle(`${typeCandy.value}`)
	
	candyView[0].classList.remove('lollipop', 'gum', 'candy', '0')
	candyView[0].classList.toggle(`${typeCandy.value}`)
	

	renderCandy(candyView[0],typeCandy.value)

	if(typeCandy.value !== '0'){
		colorCandy.removeAttribute('disabled')
	}else {
		colorCandy.setAttribute('disabled', '')
	}
})

colorCandy.addEventListener('change', ()=>{
	const element = document.querySelectorAll('.colorCandy')
	element.forEach(el => {
		el.style.fill = colorCandy.value
	})

	if(colorCandy.value !== '#ffffff'){
		powerCandy.removeAttribute('disabled')
	}
	
})

powerCandy.addEventListener('change', ()=>{
	if((powerCandy.value).length > 0){
		priceCandy.removeAttribute('disabled')
	}
})

priceCandy.addEventListener('change', ()=>{
	if((priceCandy.value).length > 0){
		buttonCreateCandy.removeAttribute('disabled')
	}
	buttonCreateCandy.style.backgroundColor = '#4caf50'
})
class CreateCandy{
	constructor({
		name,
		type,
		color,
		power,
		price,
	}){
		this.name = name
		this.type = type
		this.color = color
		this.power = power
		this.price = price
	}
}

buttonCreateCandy.addEventListener('click', buttonCreate)

function buttonCreate() {
	
	if(nameCandy !== undefined && typeCandy !== '0'&& powerCandy !== '' && priceCandy !== '0'){
		const candy = new CreateCandy({
			name: nameCandy.value,
			type: typeCandy.value,
			color: colorCandy.value,
			power: powerCandy.value,
			price: Number(priceCandy.value)
		})
		const totalCandys = JSON.parse(localStorage.getItem('TotalCandys')) || []
		console.log(totalCandys)
		
		
		
		const transJson = JSON.stringify(candy)

		totalCandys.push(transJson)
		localStorage.setItem('TotalCandys', JSON.stringify(totalCandys))

		nameCandy.value = ''
		typeCandy.value = '0'
		typeCandy.setAttribute('disabled', '')
		colorCandy.value = '#ffffff'
		colorCandy.setAttribute('disabled', '')
		powerCandy.value = ''
		powerCandy.setAttribute('disabled', '')
		priceCandy.value = ''
		priceCandy.setAttribute('disabled', '')
		
		// createCandyPreview.innerHTML = ``
		candyView[0].innerHTML = ``
		
		buttonCreateCandy.removeAttribute('style')


	}else{
		console.error('Faltan Datos del Caramelo')
	}

}