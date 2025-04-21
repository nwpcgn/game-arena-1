<script lang="ts">
	import gArr from '../lib/utils/gArr.js'
	import dungeons from './dungeons.json'
	let selected = $state(0)
	let map = $derived(dungeons[selected])
	let height = $derived(map.length)
	let width = $derived(map[0].length)
	const ctrl = gArr(dungeons.length)
	let gridStyle = ` --cols: ${width}; --rows: ${height}; --width: 20px; --height: 20px; --gap: 1px;`
</script>

<div class="bg-base-100">
	<header>
		<h1 class="text-2xl font-bold">Game</h1>
		<p>{width} / {height}</p>
		<nav class="flex gap-1 py-2">
			<div class="join">
				{#each ctrl as item, i}
					<button
						onclick={() => {
							selected = i
						}}
						class="btn btn-sm btn-square join-item"
						class:btn-neutral={i == selected}>{item}</button>
				{/each}
			</div>
		</nav>
	</header>
	<div class="roguelike-grid bg-base-300" style={gridStyle}>
		{#each map as row, y}
			{#each row as col, x}
				{#if col === 1}
					<span class="bg-neutral">
						<span class="sr-only">X</span>
					</span>
				{:else}
					<span class="bg-base-100"><span></span></span>
				{/if}
			{/each}
		{/each}
	</div>
</div>
