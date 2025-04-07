<script lang="ts">
	import Sprites from './lib/icons/index.svelte'
	import Generator from './views/tools/Generator.svelte'
	import { onMount } from 'svelte'
	onMount(async () => await import('bootstrap'))
</script>

<main class="main grid grid-cols-[1fr_1fr]">
	<article class="bg-primary"></article>
	<aside class="border-left bg-dangwr">
		<Generator></Generator>
	</aside>
</main>

<Sprites />
