<script lang="ts">
	import { dungeon, DungeonDrawer } from '$lib'
	// const set1 = new Set()
	let isOpen = $state(false)
</script>

{#snippet drawerBtn(label = 'Open', style = '')}
	<label for="my-drawer-4" class="drawer-button btn btn-sm join-item {style}"
		>{label}</label>
{/snippet}

{#snippet dungeonHeader()}
	<header class="bg-base-300">
		<div class="flex flex-col gap-4 p-4">
			<hgroup>
				<h2>Dungeon Generator</h2>
			</hgroup>
			<nav class="flex items-center justify-between gap-4">
				<div class="join">
					{@render drawerBtn('Options', 'btn-info')}
					<button class="btn btn-sm btn-info" onclick={() => dungeon.create()}
						>Generate</button>
				</div>

				<div>
					<label class="input input-sm">
						<span class="label">css</span>
						<input type="text" value={dungeon?.style} />
					</label>
				</div>
			</nav>
		</div>
	</header>
{/snippet}

{#snippet pageContent()}
	{@render dungeonHeader()}
	<section class=" flex flex-col items-center">
		<div class="bg-base-300 rounded-box p-2">
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
	</section>
{/snippet}

<svelte:head><title>NWP-Dungeon-Generator</title></svelte:head>

<div class="drawer drawer-end">
	<input
		id="my-drawer-4"
		type="checkbox"
		bind:checked={isOpen}
		class="drawer-toggle" />
	<div class="drawer-content">
		<div class="mx-auto flex w-full max-w-3xl flex-col gap-4 py-4">
			{@render pageContent()}
		</div>
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
