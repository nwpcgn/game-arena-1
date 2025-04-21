import './scss/game/rpg.scss'
import './style.css'

async function loadImage(src: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve(img)
		img.onerror = (err) => reject(err)
		img.src = src
	})
}

class Loader {
	images = {}

	load(key: string, src: string) {
		loadImage(src).then((img) => {
			this.images[key] = img
		})
	}
	getImage(key) {
		return key in this.images ? this.images[key] : null
	}
}

let loader = new Loader()

// Loader.getImage = function (key) {
// 	return key in this.images ? this.images[key] : null
// }

//
// Keyboard handler
//


//
// Game object
//
