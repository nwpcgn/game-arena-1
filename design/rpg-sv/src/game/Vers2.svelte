<script lang="ts">
	import gArr from '../lib/utils/gArr.js'
	import dungeons from './dungeons2.json'
	let selected = $state(0)
	let map = $derived(dungeons[selected].map)
	let height = $derived(map.length)
	let width = $derived(map[0].length)
	const ctrl = gArr(dungeons.length)
	let gridStyle = ` --ro-cols: ${width}; --ro-rows: ${height}; --ro-width: 20px; --ro-height: 20px; --ro-gap: 1px;`

	class Game {}
</script>

<div class="bg-base-100 text-center">
	<header>
		<h1 class="text-2xl font-bold">Game</h1>
		<p>{width} / {height}</p>
		<nav class="flex justify-center gap-1 py-2">
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
				{#if col.tile === 1}
					<span class="tile-31">
						<span class="sr-only">X</span>
					</span>
				{:else}
					<span class="bg-base-100">
						{#if col.room}
							<span class="tile-1"></span>
						{:else}
							<span class="tile-0"></span>
						{/if}
					</span>
				{/if}
			{/each}
		{/each}
	</div>
</div>
