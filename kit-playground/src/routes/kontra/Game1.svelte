<script lang="ts">
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
		Scene,
		GameLoop
	} from 'kontra'
	let canvasEl = $state()

	let options = $state({
		imgSize: {
			width: 1152,
			height: 648
		},
		frameSize: {
			width: 1000,
			height: 640
		},
		bglayer: ['cpbg-1', 'cpbg-2', 'cpbg-3', 'cpbg-4', 'cpbg-5']
	})
	const getBgLayer = (slug = 'mapbg1', x = 0) => {
		let sprite = Sprite({
			x: x,
			y: 0,
			dx: 5,
			width: 1152,
			height: 648,
			anchor: { x: 0, y: 0 },
			image: imageAssets[slug]
		})
		return sprite
	}
	const run = (canvas) => {
		const w = canvas.width
		const h = canvas.height
		console.log({ w, h })

		// let bgLayer = Sprite({
		// 	x: 0,
		// 	y: 0,
		// 	dx: 1,
		// 	anchor: { x: 0, y: 0 },
		// 	image: imageAssets['mapbg1']
		// })
		let bgLayer1 = getBgLayer('cpbg-2', 0)
		let bgLayer2 = getBgLayer('cpbg-2', -options.imgSize.width)

		let loop = GameLoop({
			update: function () {
				bgLayer1.update()
				bgLayer2.update()
				// reset the sprites position when it reaches the edge of the game
				if (bgLayer1.x > canvas.width) {
					bgLayer1.x = -bgLayer1.width
				}
				if (bgLayer2.x > canvas.width) {
					bgLayer2.x = bgLayer1.x - bgLayer1.width
				}
			},
			render: function () {
				bgLayer1.render()
				bgLayer2.render()
			}
		})

		loop.start()
	}

	$effect(() => {
		if (canvasEl) {
			init(canvasEl)
			run(canvasEl)
		}
	})
</script>

<canvas bind:this={canvasEl} {...options.frameSize}></canvas>
