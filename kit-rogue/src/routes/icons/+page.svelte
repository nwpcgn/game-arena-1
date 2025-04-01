<script lang="ts">
	import Selector from '../../lib/icons/Selector.svelte'

	import { dungeon, DungeonDrawer } from '$lib'
	// const set1 = new Set()
	let isOpen = $state(false)
</script>

<svelte:head><title>NWP-Icon-Generator</title></svelte:head>

<Selector></Selector>
