<script lang="ts">
	let canvas = $state()
	const imgPath = '/img'

	function createAnimatedCanvas(
		canvas,
		imageSrc,
		frameWidth,
		frameHeight,
		frameCount,
		fps,
		scale = 1
	) {
		// const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		// document.body.appendChild(canvas)

		const img = new Image()
		img.src = `.${imgPath}/${imageSrc}`

		let currentFrame = 0
		canvas.width = frameWidth * scale
		canvas.height = frameHeight * scale

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.drawImage(
				img,
				currentFrame * frameWidth,
				0,
				frameWidth,
				frameHeight,
				0,
				0,
				frameWidth * scale,
				frameHeight * scale
			)

			currentFrame = (currentFrame + 1) % frameCount
			setTimeout(() => requestAnimationFrame(animate), 1000 / fps)
		}

		img.onload = () => animate()
	}

	let player = $state({
		animations: {
			idle: {
				imageSrc: 'knight-idle1-sheet.png',
				frameCount: 12,
				frameWidth: 128,
				frameHeight: 128,
				fps: 12,
				scale: 1
			},
			walk: {
				imageSrc: 'knight-walk1-sheet.png',
				frameCount: 8,
				frameWidth: 128,
				frameHeight: 128,
				fps: 12,
				scale: 1
			},
			run: {
				imageSrc: 'knight-run1-sheet.png',
				frameCount: 6,
				frameWidth: 128,
				frameHeight: 128,
				fps: 12,
				scale: 1
			}
		}
	})
	let slug = $state('idle')
	let config = $derived(player.animations[slug])

	$effect(() => {
		if (canvas) {
			const { imageSrc, frameWidth, frameHeight, frameCount, fps, scale } =
				config
			createAnimatedCanvas(
				canvas,
				imageSrc,
				frameWidth,
				frameHeight,
				frameCount,
				fps,
				scale
			)
		}
	})
</script>

<section class="page-layer nwp center">
	<article class="border border-red-500">
		<div>
			<select onchange={(e) => {
                slug = e.currentTarget.value
            }} class="select">
				{#each Object.keys(player.animations) as animation}
					<option value={animation}>{animation}</option>
				{/each}
			</select>
		</div>
		<canvas
			width={config.frameWidth * config.scale}
			height={config.frameHeight * config.scale}
			bind:this={canvas}></canvas>
	</article>
</section>
