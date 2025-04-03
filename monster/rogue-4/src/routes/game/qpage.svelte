<script lang="ts">
	import { dungeon, DungeonDrawer } from '$lib'
	import groupArray from '$lib/utils/groupArray'
	let isOpen: Boolean = $state(false)
	const fogSize = 5
	let map: (number[] | null)[] | null = $derived(dungeon.map)
	let rooms: number[] = $derived(groupArray(map).sort())
	let pos = $state({
		x: 1,
		y: 1
	})

	const getTile = (m: Array, x: Number, y: Number) => {
		const item: Number = m[y][x]
		if (item) {
			return item
		}
	}
	let activeRoom = $derived(getTile(map, pos.x, pos.y))

	const distance = (x1: Number, y1: Number, x2: Number, y2: Number) =>
		Math.hypot(x2 - x1, y2 - y1)
	const checkPlayer = (x1: Number, y1: Number, x2: Number, y2: Number) => {
		if (x1 == x2 && y1 == y2) {
			return true
		}
	}

	const checkCol = () => {}
</script>

{#snippet playerT({ col, x, y })}
	<div class="tile tile-{col}">
		{#if checkPlayer(pos.x, pos.y, x, y)}
			<span class="player"></span>
		{:else if distance(pos.x, pos.y, x, y) < fogSize}
			<span class="sr-only">{col}</span>
		{:else}
			<span class:fog={activeRoom == col}
				><span class="sr-only">{col}</span></span>
		{/if}
	</div>
{/snippet}

{#snippet pageContent()}
	<section class="flex flex-col items-center gap-2">
		<div class="join">
			<span class="join-item btn btn-sm">{activeRoom}</span>
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
							{@render playerT({ col, x, y })}
						{/each}
					{/each}
				{/if}
			</div>
		</div>
		<div>{rooms.join(', ')}</div>
		<div><pre>{JSON.stringify(rooms)}</pre></div>
	</section>
{/snippet}

<svelte:head><title>NWP-Dungeon-Game</title></svelte:head>

<section class="page-layer nwp center">
	{@render pageContent()}
</section>

<style>
	.fog {
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.2px);
		border: 1px solid rgba(255, 255, 255, 0.57);
	}
</style>
