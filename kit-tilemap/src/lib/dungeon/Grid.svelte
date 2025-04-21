<script lang="ts">
	import DungeonGenerator from './DungeonGenerator.js'
	let {
		config,
		tileSize,
		gridGap,
		gridMaps = $bindable(),
		toggle,
		rebuild,
		clearMaps,
		copyMaps
	} = $props()
	const generator = new DungeonGenerator(config)
	let tiles = $state([])
	let gridStyle = $derived(
		`--ro-width: ${tileSize}px; --ro-height: ${tileSize}px; --ro-gap: ${gridGap}px; --ro-cols: ${config.cols}; --ro-rows: ${config.rows};`
	)
	const saveMap = () => {
		const settings = { ...config, tileSize, gridGap }
		const rooms = generator.getRooms()

		gridMaps.push({ config: settings, rooms, map: tiles })



	}
	const actions = [
		{
			label: 'Configure',
			action: toggle
		},
		{
			label: 'Rebuild',
			action: rebuild
		},
		{
			label: 'Save',
			action: saveMap
		},
		{
			label: 'Copy',
			action: copyMaps
		},
		{
			label: 'Clear',
			action: clearMaps
		}
	]

	tiles = generator.generate()
</script>

<section class="page-layer nwp game-bg">
	{#if tiles.length}
		<header class="flex flex-col items-center gap-4 p-4">
			<h4 class="text-4xl font-bold">Dungeon Generator</h4>
			<nav class="join">
				{#each actions as { label, action }}
					<button class="btn join-item" onclick={action}>{label}</button>
				{/each}
			</nav>
		</header>
		<article class="flex justify-center p-4">
			<div class="roguelike-grid" style={gridStyle}>
				{#each tiles as row, y}
					{#each row as { tile }, x}
						<span class="tile-{tile}">
							<small>{tile}</small>
						</span>
					{/each}
				{/each}
			</div>
		</article>
	{/if}
</section>
