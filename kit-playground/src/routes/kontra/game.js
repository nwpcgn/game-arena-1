import {
	init,
	setDataPath,
	setImagePath,
	setAudioPath,
	on,
	load,
	imageAssets,
	audioAssets,
	Sprite,
	SpriteSheet,
    GameLoop
} from 'kontra'



setImagePath('./img/cp/')
setAudioPath('./audio/')

on('assetLoaded', (asset, url) => {
	progress.loaded = progress.loaded + 1
	pBar.value = progress.loaded / progress.total
	// percent.innerHTML = Math.round(pBar.value * 100) + '%'
	console.log(
		'Asset loaded. Loaded ' + progress.loaded + ' of ' + progress.total
	)
})

load('bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', [
	'Digital_Forest.ogg',
	'audio/Digital_Forest.mp3'
]).then(function () {
	showPlayButton()
	audioAssets.Digital_Forest.loop = true
	audioAssets.Digital_Forest.volume = 0.5

	// create the sprite sheet and its animation
	let spriteSheet = SpriteSheet({
		image: imageAssets.character_walk_sheet,
		frameWidth: 72,
		frameHeight: 97,
		animations: {
			walk: {
				frames: '0..10', // frames 0 through 10
				frameRate: 30
			}
		}
	})

	// pass the animations to the sprite
	let sprite = Sprite({
		width: 72 * 2,
		height: 97 * 2,
		anchor: {
			x: 0.5,
			y: 0.5
		},
		x: 300,
		y: 200,
		animations: spriteSheet.animations
	})

	// set the animation to play
	sprite.playAnimation('walk')

	// create the game loop to update and render the sprite
	let loop = GameLoop({
		update: function () {
			sprite.update()
		},
		render: function () {
			sprite.render()
		}
	})
})

function showPlayButton() {
	var playButton = document.getElementById('play')
	playButton.style.visibility = 'visible'
	playButton.onclick = function () {
		document.getElementById('progress').style.display = 'none'
		document.getElementById('game').style.background = '#333331'
		// start the loop
		audioAssets.Digital_Forest.play()
		loop.start()
	}
}
