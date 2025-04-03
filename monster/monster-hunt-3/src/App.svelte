<script lang="ts">
	import Sprite from './lib/icons/index.svelte'
	import Game from './game/Game.svelte'
</script>

<main class="main grid place-content-center">
	<Game></Game>
</main>

<style>
	main {
		background-image: url(./img/bg-land.png);
		background-repeat: no-repeat;
		background-size: 100% aauto;
	}
</style>
