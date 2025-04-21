<script lang="ts">
	import Dock from './Dock.svelte'
	let { data } = $props()
</script>

<svelte:head><title>NWP-Dungeon-Generator</title></svelte:head>

<div
	class="grid h-full w-full grid-cols-1 overflow-hidden md:grid-cols-[auto_1fr]">
	<aside class="bg-info text-info-content flex flex-col">
		<Dock></Dock>
	</aside>
	<main class="relative overflow-hidden">
		<section class="page-layer nwp">
			<article class="content"></article>
		</section>
	</main>
</div>
