<script lang="ts">
	import KontraGame from './KontraGame.svelte'

	let { data } = $props()
</script>

<section class="page-layer center nwp game-bg">
	<div class="bg-base-100 relative overflow-hidden">
		<KontraGame></KontraGame>
	</div>
</section>

<svelte:head><title>Kontra.JS</title></svelte:head>
