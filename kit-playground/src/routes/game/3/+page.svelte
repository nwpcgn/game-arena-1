<script lang="ts">
	import loadImage from '$lib/utils/loadImage.js'
	import {
		init,
		Sprite,
		GameLoop,
		load,
		setImagePath,
		imageAssets
	} from 'kontra'
	const assets = [
		{
			slug: 'el_button_start',
			src: 'el_button_start.png'
		},
		{
			slug: 'el_close',
			src: 'el_close.png'
		},
		{
			slug: 'el_icon_blue',
			src: 'el_icon_blue.png'
		},
		{
			slug: 'el_icon_green',
			src: 'el_icon_green.png'
		},
		{
			slug: 'el_illustration',
			src: 'el_illustration.png'
		},
		{
			slug: 'el_level',
			src: 'el_level.png'
		},
		{
			slug: 'el_level_blank',
			src: 'el_level_blank.png'
		},
		{
			slug: 'el_roll',
			src: 'el_roll.png'
		},
		{
			slug: 'el_score_menu',
			src: 'el_score_menu.png'
		},
		{
			slug: 'el_the_task',
			src: 'el_the_task.png'
		},
		{
			slug: 'el_user 2',
			src: 'el_user 2.png'
		},
		{
			slug: 'el_user 3',
			src: 'el_user 3.png'
		},
		{
			slug: 'el_user 4',
			src: 'el_user 4.png'
		},
		{
			slug: 'el_world_tab',
			src: 'el_world_tab.png'
		},
		{
			slug: 'skeleton_bg',
			src: 'skeleton_bg.png'
		}
	]
	let imgs = $state([])
	let canvas = $state()

	let sprite = Sprite({
		image: imageAssets['skeleton_bg'],
		x: 100, // starting x,y position of the sprite
		y: 80,
		color: 'red', // fill color of the sprite rectangle
		width: 414, // width and height of the sprite rectangle
		height: 736,
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
	setImagePath('./img/mobil/')
	load(
		'el_button_start.png',
		'el_close.png',
		'el_icon_blue.png',
		'el_icon_green.png',
		'el_illustration.png',
		'el_level.png',
		'el_level_blank.png',
		'el_roll.png',
		'el_score_menu.png',
		'el_the_task.png',
		'el_user 2.png',
		'el_user 3.png',
		'el_user 4.png',
		'el_world_tab.png',
		'skeleton_bg.png'
	).then((assets) => {
		imgs = [...assets]
	})

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
<section class="page-layer nwp">
	<article class="content">
		<div class="img-grid">
			{#each assets as { slug, src }}
				<figure>
					<img class="aspect-square" src="./img/mobil/{src}" alt="" />
				</figure>
			{/each}

			
		</div>
	</article>
</section>

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
