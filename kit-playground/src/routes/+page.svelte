<script lang="ts">
	import BgLayer from '$lib/BgLayer.svelte'
	let { data } = $props()
</script>

<BgLayer></BgLayer>

<section class="page-layer nwp">
	<article class="content">
		<h1>{data.title}</h1>
	</article>
</section>
