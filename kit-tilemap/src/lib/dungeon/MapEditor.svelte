<script lang="ts">
	import { copyToClip } from './dugeonUtils.ts'
	let { gridMaps } = $props()
	let roomMap = $state({})

	const add = (id) => {
		const { rooms } = gridMaps[id]
		const res = [...gridMaps[id].map]
		console.log({ res })

		for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
			let r = rooms[roomIndex]
			for (let i = 0; i < r.h; i++) {
				for (let j = 0; j < r.w; j++) {
					const y = r.row + i
					const x = r.col + j
					res[y][x] = { tile: 0, room: roomIndex + 1 }
				}
			}
		}
		roomMap[id] = {
			map: res,
			rooms: gridMaps[id].rooms,
			config: gridMaps[id].config
		}
	}
</script>

<div>
	{#if gridMaps.length}
		<ul class="list bg-base-100 rounded-box shadow-md">
			<li class="p-4 pb-2 text-xs tracking-wide opacity-60">Grid Maps</li>
			{#each gridMaps as obj, i}
				<li class="list-row">
					<span class="text-4xl font-thin tabular-nums opacity-30"
						>#{i + 1}</span>
					<div>
						<div class="text-base">Map {i + 1}</div>
						<div class="text-sm font-semibold uppercase opacity-60">
							Size: {obj.config.cols} x {obj.config.rows}
						</div>
					</div>
					<button class="btn btn-square btn-ghost" onclick={() => add(i)}>
						{@render iconT('nwp-full')}
					</button>
					<button class="btn btn-square btn-ghost">
						{@render iconT('nwp-expand')}
					</button>
				</li>
			{/each}
			<li class="p-4 pb-2 text-xs tracking-wide opacity-60">
				Edited: {Object.values(roomMap).length}
			</li>
		</ul>
	{/if}

	{#if Object.values(roomMap).length}
		<div class="py-2 flax flex-col gap-2">
			<textarea class="textarea w-full"
				>{JSON.stringify(Object.values(roomMap))}</textarea>
                <button class="btn" onclick={() => copyToClip(JSON.stringify(Object.values(roomMap)))}>Copy Output</button>
		</div>
	{/if}
</div>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
