const buttonCreateCandy = document.getElementById('createCandy')
const createCandyPreview = document.getElementById('createCandyPreview')

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
	const nameCandy = document.getElementById('nameCandy').value
	const typeCandy = document.getElementById('typeCandy').value
	const colorCandy = document.getElementById('colorCandy').value
	const powerCandy = document.getElementById('powerCandy').value
	const priceCandy = document.getElementById('priceCandy').value
	
	if(nameCandy !== undefined && typeCandy !== '0'&& powerCandy !== '' && priceCandy !== '0'){
		const candy = new CreateCandy({
			name: nameCandy,
			type: typeCandy,
			color: colorCandy,
			power: powerCandy,
			price: Number(priceCandy)
		})
		const totalCandys = JSON.parse(localStorage.getItem('TotalCandys')) || []
		console.log(totalCandys)
		
		
		
		const transJson = JSON.stringify(candy)

		totalCandys.push(transJson)
		localStorage.setItem('TotalCandys', JSON.stringify(totalCandys))

	}else{
		console.error('Faltan Datos del Caramelo')
	}
}