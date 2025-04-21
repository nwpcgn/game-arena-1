<script lang="ts">
	let {
		links = [
			{ slug: 'start', name: 'Start', icon: 'nwp-game', action: null },
			{ slug: 'grid', name: 'Map', icon: 'nwp-grid', action: null },
			{ slug: 'player', name: 'Character', icon: 'nwp-player', action: null },
			{ slug: 'enemy', name: 'Battle', icon: 'nwp-skull-1', action: null },
			{
				slug: 'world',
				name: 'World',
				icon: 'nwp-pokeball',
				action: null
			},
			{ slug: 'db', name: 'Items', icon: 'nwp-db', action: null },
			{ slug: 'settings', name: 'Settings', icon: 'nwp-options', action: null }
		]
	} = $props()
</script>

<div class="grid gap-2 p-2">
	{#each links as { slug, name, icon, acction }}
		<button class="btn btn-ghost btn-square btn-xl"
			>{@render iconT(icon)}</button>
	{/each}
</div>

{#snippet iconT(name)}
	<span class="sr-only">name</span>
	<svg class="nwp-icon" style="--fs: 38px;"
		><use xlink:href="#{name}"></use></svg>
{/snippet}
