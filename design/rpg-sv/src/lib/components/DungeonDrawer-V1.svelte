<script lang="ts">
	import { dungeon } from '$lib'

	let { close } = $props()
	let OP = $state({
		width: 50,
		height: 50,
		minRoomSize: 5,
		maxRoomSize: 20
	})

	const save = () => {
		const obj = { ...OP }
		dungeon.setSettings(obj)
		close()
		dungeon.create()
	}

	$effect(() => {
		const obj = dungeon.getSettings()
		OP = { ...obj }
	})
</script>

<ul class="menu bg-base-200 text-base-content min-h-full w-80 gap-2 p-4">
	<li class="menu-title">
		<span>Dungeon Params</span>
	</li>
	{#each Object.entries(OP) as [slug, val]}
		<li>
			<label class="input input-sm">
				<span class="label">{slug}</span>
				<input type="number" bind:value={OP[slug]} />
				<span class="label">px</span>
			</label>
		</li>
	{/each}
	<li>
		<button class="btn btn-info btn-sm" onclick={save}>Save</button>
	</li>
	<li>
		<button class="btn btn-ghost btn-sm" onclick={close}>Close</button>
	</li>
</ul>
