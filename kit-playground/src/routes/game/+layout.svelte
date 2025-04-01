<script lang="ts">
	import BgLayer from '$lib/BgLayer.svelte'
	let { children } = $props()
</script>

<BgLayer></BgLayer>
{@render children?.()}
