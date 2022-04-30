const grid = document.querySelector('.grid')

const url3 = 'https://api.thecatapi.com/v1/breeds'

async function getBreeds() {
	const response = await fetch(url3)
	const data = await response.json()
	console.log(data)
	data.forEach(element => {
		const item = document.createElement('div')
		item.classList.add('item')
		item.innerHTML = `<img src="${element.image.url}" alt="cat">
	<p>${element.name}</p>`
		grid.appendChild(item)
	})
}
else{
	const item = document.createElement('div')
	item.classList.add('item')
	item.innerHTML = `<p>No breeds found</p>`
	grid.appendChild(item)
}
}
getBreeds()