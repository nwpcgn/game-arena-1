<script lang="ts">
	import { dungeon, DungeonDrawer } from '$lib'
	import groupArray from '$lib/utils/groupArray'
	let isOpen: Boolean = $state(false)
	let rooms: Array = $derived(groupArray(dungeon.map).sort())
	let player = $state({
		x: 1,
		y: 1
	})
</script>

{#snippet pageContent()}
	<section class="flex flex-col items-center gap-2">
		<div class="join">
			<label
				for="my-drawer-4"
				class="drawer-button btn btn-sm join-item btn-info">Options</label>
			<button class="btn btn-sm btn-info" onclick={() => dungeon.create()}
				>Generate</button>
		</div>
		<div class="bg-base-100 shadow-lg">
			<div
				class="rogue-grid"
				style="--size: {dungeon.frameSize}px; {dungeon?.style}">
				{#if dungeon?.map.length}
					{#each dungeon.map as row, y}
						{#each row as col, x}
							<div class="tile tile-{col}">
								<span class="text-xs font-thin">{col}</span>
							</div>
						{/each}
					{/each}
				{/if}
			</div>
		</div>
		<div>{rooms.join(', ')}</div>
	</section>
{/snippet}

<svelte:head><title>NWP-Dungeon-Game</title></svelte:head>

<div class="drawer drawer-end flex-1">
	<input
		id="my-drawer-4"
		type="checkbox"
		bind:checked={isOpen}
		class="drawer-toggle" />
	<div class="drawer-content relative">
		<section class="page-layer nwp center">
			{@render pageContent()}
		</section>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"
		></label>
		<DungeonDrawer
			close={() => {
				isOpen = false
			}}></DungeonDrawer>
	</div>
</div>
