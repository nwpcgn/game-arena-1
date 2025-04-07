<script lang="ts">
	import { dungeon } from './generator.svelte.ts'
</script>

<div class="flex flex-col gap-2 p-2">
	<header class="bg-base-300 rounded-box p-2">
		<button class="btn btn-info" onclick={() => dungeon.create()}
			>Generate</button>
	</header>
	{#if dungeon.map}
		{@render gridTemp(dungeon)}
	{/if}
</div>

{#snippet gridTemp(dungeon)}
	<div class="bg-base-300 rounded-box p-2">
		<div class="rogue-grid" style={dungeon?.style}>
			{#if dungeon?.map.length}
				{#each dungeon.map as row, y}
					{#each row as col, x}
						<div class="rogue-tile t-{col}">
							<span class="text-xs font-thin">{col}</span>
						</div>
					{/each}
				{/each}
			{/if}
		</div>
	</div>
{/snippet}
