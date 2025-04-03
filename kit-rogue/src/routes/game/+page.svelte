<script lang="ts">
	import {
		dungeon,
		DungeonDrawer,
		getTile,
		distance,
		checkCollide,
		groupArray
	} from '$lib'
	let isOpen: Boolean = $state(false)
	const fogSize = 5
	let map: (number[] | null)[] | null = $derived(dungeon.map)
	let rooms: number[] = $derived(groupArray(map).sort())
	let pos = $state({
		x: 1,
		y: 1
	})
	let activeRoom = $derived(getTile(map, pos.x, pos.y))

	const checkPlayer = (x: number, y: number): boolean =>
		checkCollide(pos.x, pos.y, x, y)

	const checkNoFog = (x: number, y: number): boolean =>
		distance(pos.x, pos.y, x, y) <= fogSize


</script>

{#snippet roomTile({ col, x, y })}
	{#if checkPlayer(x, y)}
		<div class="player"><span class="sr-only">{col}</span></div>
	{:else}
		<span class:fog={checkNoFog(x, y) && activeRoom == col}
			><span class="sr-only">{col}</span></span>
	{/if}
{/snippet}
{#snippet playerT({ col, x, y })}
	{#if col == 1}
		<section
			data-label={col}
			data-x={x}
			data-y={y}
			aria-label={col}
			class="tile tile-{col}">
		</section>
	{:else if col == 0}
		<div
			data-label={col}
			data-x={x}
			data-y={y}
			aria-label={col}
			class="tile tile-{col}">
		</div>
	{:else}
		<button
			data-label={col}
			data-x={x}
			data-y={y}
			aria-label={col}
			class="tile tile-{col}">{@render roomTile({ col, x, y })}</button>
	{/if}
{/snippet}

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
				{#if map.length}
					{#each map as row, y}
						{#each row as col, x}
							{@render playerT({ col, x, y })}
						{/each}
					{/each}
				{/if}
			</div>
		</div>
		<!-- <div>{rooms.join(', ')}</div> -->
		<div><pre>{JSON.stringify(rooms)}</pre></div>
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


