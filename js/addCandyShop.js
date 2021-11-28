import renderCandy from "./renderCandys.js"


const stringCandys = localStorage.getItem('TotalCandys')
const bruteCandys = JSON.parse(stringCandys)
const Candys = bruteCandys.map(candy => JSON.parse(candy))
const container = document.getElementById('shop__container')
console.log(container)
console.log(Candys)


class CreateCard{
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
	createHTML() {
		const card = document.createElement('article')
		card.className = 'card'
		card.innerHTML += `
		<section class="card__image candyView">
			<span class="card__price">$${this.price}</span>
		</section>
		<section class="card__description">
			<h5 class="card__title">${this.name}</h5>
			<p class="card__text">${this.power}</p>
		</section>
		<button class="card__button">Comprar</button>
		`

		container.appendChild(card)
	}
	viewCandy(view,type,color){
		renderCandy(view,type,color)
	}
}

Candys.forEach(({name,color,power,price,type},index) => {
	const candy = new CreateCard({
		name,
		color,
		power,
		price,
		type,
	})
	candy.createHTML()
	const candyView = document.querySelectorAll('.candyView')
	candy.viewCandy(candyView[index],type, color)
})