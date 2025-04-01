<script lang="ts">
	import { init, Sprite, GameLoop } from 'kontra'
	import { onMount } from 'svelte'

	let canvas = $state()

	let sprite = Sprite({
		x: 100, // starting x,y position of the sprite
		y: 80,
		color: 'red', // fill color of the sprite rectangle
		width: 20, // width and height of the sprite rectangle
		height: 40,
		dx: 2 // move the sprite 2px to the right every frame
	})

	let loop = GameLoop({
		// create the main game loop
		update: function () {
			// update the game state
			sprite.update()

			// wrap the sprites position when it reaches
			// the edge of the screen
			if (sprite.x > 800) {
				sprite.x = -sprite.width
			}
		},
		render: function () {
			// render the game state
			sprite.render()
		}
	})

	// loop.start()

	$effect(() => {
		init(canvas)
		loop.start()
	})

	let sb = $state(false)
	const toggle = () => {
		sb = !sb
	}
</script>

<svelte:head>
	<title>Kontra.js</title>
</svelte:head>

<div class="page-layer nwp center">
	<canvas width={800} height={600} bind:this={canvas}></canvas>
</div>

<aside
	class="absolute inset-y-4 transform transition-transform duration-400 ease-in"
	class:right-12={!sb}
	class:right-4={sb}
	class:translate-x-full={!sb}>
	<div class="flex items-start gap-2">
		<div>
			<button onclick={toggle} class="btn btn-square" style="--fs: 16px;">
				<svg class="nwp-icon"><use xlink:href="#nwp-burger"></use></svg>
			</button>
		</div>

		<div class="rounded-box bg-base-100 w-56 p-4 shadow-sm">
			<h1>Sidebar</h1>
		</div>
	</div>
</aside>
