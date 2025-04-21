import './scss/retro.scss'
import './style.css'
import { signal, component } from 'reefjs'
import kontra from 'kontra'

let daten = signal({
	width: 640,
	height: 480
})

document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
<section class="page-layer nwp center">
    <div class="bg-base-200">
  <canvas id="canvas" width="${daten.width}"  height="${daten.height}"></canvas>
    </div>
</section>
`

import {
	init,
	Sprite,
	GameLoop,
	load,
	setImagePath,
	setDataPath,
	SpriteSheet,
	imageAssets
} from 'kontra'

let { canvas } = init()

setImagePath('./img/game/')
load('knight-idle1-sheet.png', 'knight-run1-sheet.png').then(() => initGame())

const initGame = () => {


	let knightAni = SpriteSheet({
		image: imageAssets['knight-idle1-sheet'],
		frameWidth: 128,
		frameHeight: 128,
		animations: {
			idle: {
				frames: '0..11',
				frameRate: 10
			},
			run: {
				frames: '0..7',
				frameRate: 10
			}
		}
	})

	let knight = Sprite({
		width: 128,
		height: 128,
		anchor: {
			x: 0.5,
			y: 1
		},
		x: 100,
		y: canvas.height,
		animations: knightAni.animations
	})
	knight.playAnimation('idle')
	

	let runningMan = Sprite({
		x: 290,
		y: 0,
		dx: 3,
		dy: 0,
		width: 20,
		height: 100,
		color: 'red'
	})


	let mainLoop = GameLoop({
		update: function () {
			runningMan.update()
			knight.update()

			if (runningMan.x > canvas.width) {
				runningMan.x = -runningMan.width
			}
		},
		render: function () {
			runningMan.render()
			knight.render()
		}
	})

	mainLoop.start()
}

window.addEventListener('load', () => {
	console.log('Document Ready')
})
