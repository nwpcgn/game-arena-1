import './scss/retro.scss'
import './style.css'
function flatten(paginatedArray: Array = []) {
	return paginatedArray.flat()
}
function paginate(arr: Array, size: Number) {
	return arr.reduce((acc, val, i) => {
		let idx = Math.floor(i / size)
		let page = acc[idx] || (acc[idx] = [])
		page.push(val)

		return acc
	}, [])
}

function copyToClip(text: string = '') {
	// const text = "Example text to appear on clipboard";
	return navigator.clipboard.writeText(text).then(
		function () {
			console.log('Copying to clipboard was successful!', text.length)
			return ['Copying to clipboard was successful!', text.length]
		},
		function (err) {
			console.error('Async: Could not copy text: ', err)
			return ['Copying to clipboard was successful!', err]
		}
	)
}

let maps = []

var el = document.getElementById('view')
const config = {
	maxRoomSize: 7,
	minRoomSize: 7,
	padding: 2,
	rooms: 25,
	rows: 31,
	cols: 41
}

const generateArray = (array) => {
	const flat = flatten(array)
	let m = flat.map((el) => {
		return el.cellType === 'wall' ? 1 : 0
	})
	let out = paginate(m, config.cols)
	maps.push(out)
	document.querySelector('#code').value = JSON.stringify(maps)
	document.querySelector('#count').innerHTML = maps.length
}

function append(el, text) {
	var p = document.createElement('p')
	var t = document.createTextNode(text)
	p.appendChild(t)
	el.appendChild(p)
}

function updateMap(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild)
	}
	var floorMap = DungeonGenerator.generate(config)

	console.log({ floorMap })
	generateArray(floorMap)

	floorMap.forEach(function (e) {
		var txt = e
			.map(function (cell) {
				return cell.cellType === 'wall' ? 'x' : '\u00a0'
			})
			.join('')
		append(el, txt)
	})
}

document.getElementById('generate').addEventListener('click', function () {
	updateMap(el)
})
document.getElementById('copy').addEventListener('click', function () {
	copyToClip(JSON.stringify(maps))
})
document.getElementById('clear').addEventListener('click', function () {
    maps = []
	document.querySelector('#code').value = ''
    document.querySelector('#count').innerHTML = '0'
})