const grid = document.querySelector('.grid')
const url0 = 'https://api.thecatapi.com/v1/images/search?format=json&limit=4'
const url1 = 'https://api.thecatapi.com/v1/images/search?breed_ids=rblu&limit=4'
const url2 = 'https://api.thecatapi.com/v1/images/search?breeds&limit=4'
const url3 = 'https://api.thecatapi.com/v1/breeds'
const arrUrl = [url0, url1, url2]
let i = 0
const more = document.querySelector('.more')
more.addEventListener('click', () => {
	grid.innerHTML = ''
	i = i + 1
	if (i > 2) {
		i = 0
	}
	getData()
})
async function getData() {
	const response = await fetch(arrUrl[i])
	const data = await response.json()
	console.log(data)
	data.forEach(element => {
		const item = document.createElement('div')
		item.classList.add('item')
		item.innerHTML = `<img src="${element.url}" alt="cat">
	<p>${element.id}</p>`
		grid.appendChild(item)
	})
}
getData()