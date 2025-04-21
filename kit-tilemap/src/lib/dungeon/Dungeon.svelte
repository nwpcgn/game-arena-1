<script lang="ts">
	import MapEditor from './MapEditor.svelte'
	import { copyToClip, sleep } from './dugeonUtils.ts'
	import Grid from './Grid.svelte'
	let gridMaps = $state([])
	let run = $state(false)
	let tileSize = $state(20)
	let gridGap = $state(1)
	let rows = $state(27)
	let cols = $state(39)
	let rooms = $state(18)
	let config = $derived({ rooms, rows, cols })
	let gridObj = $derived({ config, tileSize, gridGap })
	const toggle = () => {
		run = !run
	}

	const clearMaps = () => {
		console.log('Clear Maps')
		gridMaps = []
	}

	const copyMaps = async () => {
		const text = JSON.stringify(gridMaps)
		await copyToClip(text)
		console.log('Maps Copied')
	}

	const buildGrid = async () => {
		await sleep(500)
		return gridObj
	}
	const rebuild = async () => {
		run = false
		await sleep(200)
		run = true
	}

	let promise = buildGrid()
</script>

{#if !run}
	<section class="page-layer nwp game-bg">
		<article class="content">
			<header class="flex flex-col items-center gap-4 p-4">
				<h4 class="text-4xl font-bold">Dungeon Generator</h4>
				<nav><button class="btn" onclick={toggle}>Generate</button></nav>
			</header>
			<div class="grid grid-cols-2 gap-1">
				<label class="input">
					<input
						min="21"
						max="99"
						step="2"
						type="number"
						class="grow"
						bind:value={cols} />
					<span class="badge badge-neutral badge-xs">Cols</span>
				</label>
				<label class="input">
					<input
						min="21"
						max="99"
						step="2"
						type="number"
						class="grow"
						bind:value={rows} />
					<span class="badge badge-neutral badge-xs">Rows</span>
				</label>
				<label class="input">
					<input
						min="8"
						max="30"
						type="number"
						class="grow"
						bind:value={rooms} />
					<span class="badge badge-neutral badge-xs">Rooms</span>
				</label>
				<label class="input">
					<input
						min="8"
						max="50"
						type="number"
						class="grow"
						bind:value={tileSize} />
					<span class="badge badge-neutral badge-xs">Size</span>
				</label>
				<label class="input">
					<input
						min="0"
						max="2"
						type="number"
						class="grow"
						bind:value={gridGap} />
					<span class="badge badge-neutral badge-xs">Gap</span>
				</label>
				<button class="btn" onclick={toggle}>Generate</button>
			</div>
		</article>
		<article class="content">
			<MapEditor {gridMaps} {clearMaps} {copyMaps}></MapEditor>
		</article>
	</section>
{:else}
	{#await promise then settings}
		<Grid
			{...settings}
			{toggle}
			{rebuild}
			bind:gridMaps
			{clearMaps}
			{copyMaps} />{/await}
{/if}
