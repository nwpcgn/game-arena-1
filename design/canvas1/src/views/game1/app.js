function copyToClip(text) {
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

function flatten(paginatedArray) {
	return paginatedArray.flat()
}

const out = document.getElementById('out')
const el = document.getElementById('view')
const dialog = document.getElementById('dialog')

const grabMap = (a = []) => {
	const rows = a.length
	const cols = a[0].length

	const b = flatten(a).map((d) => (d.cellType === 'wall' ? 1 : 0))
	const o = JSON.stringify({ rows, cols, map: b })
	out.value = o
	dialog.showModal()

	return { rows, cols, map: b }
}

function append(el, text) {
	const p = document.createElement('p')
	const t = document.createTextNode(text)
	p.appendChild(t)
	el.appendChild(p)
}

function updateMap(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild)
	}
	const floorMap = DungeonGenerator.generate({
		maxRoomSize: 7,
		minRoomSize: 7,
		padding: 2,
		rooms: 25,
		rows: 41,
		cols: 61
	})
	grabMap(floorMap)
	floorMap.forEach(function (e) {
		const txt = e
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

updateMap(el)
