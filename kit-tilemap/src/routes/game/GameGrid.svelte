<script lang="ts">
	let { gridMap } = $props()
	let gridStyle = ''
</script>

<article class="flex justify-center p-4">
	<div class="roguelike-grid" style={gridStyle}>
		{#each gridMap.map as row, y}
			{#each row as { tile }, x}
				<span class="tile-{tile}">
					<small>{tile}</small>
				</span>
			{/each}
		{/each}
	</div>
</article>
