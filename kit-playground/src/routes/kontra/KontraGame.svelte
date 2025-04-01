<script lang="ts">
	import sleep from '$lib/utils/sleep.js'
	import Game1 from './Game1.svelte'
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

	let options = $state({
		bgimgs: [
			'cpbg-1.png',
			'cpbg-2.png',
			'cpbg-3.png',
			'cpbg-4.png',
			'cpbg-5.png'
		],
		imgPath: './img/cp/',
		imgSize: {
			width: 1152,
			height: 648
		},
		frameSize: {
			width: 1152,
			height: 648
		}
	})

	const loadAssets = async () => {
		await sleep(3000)
		await load(
			'cpbg-1.png',
			'cpbg-2.png',
			'cpbg-3.png',
			'cpbg-4.png',
			'cpbg-5.png',
			'mapbg1.png',
			'mapbg2.png',
			['Digital_Forest.ogg', 'audio/Digital_Forest.mp3']
		)
		return true
	}
</script>

{#await loadAssets()}
	<div class="page-layer center bg-info text-info-content">
		<div class="progress-wrapper">
			<div>Downloading: <span id="percent"></span></div>
			<progress id="progress-bar" value="0"></progress>
		</div>
	</div>
{:then value}
	<Game1></Game1>
{/await}
