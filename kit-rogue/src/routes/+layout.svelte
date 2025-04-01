<script lang="ts">
	import '../assets/scss/game/game.scss'
	import '../app.css'
	import Sprites from '$lib/icons/index.svelte'
	import Header from '$lib/Header.svelte'

	let { children } = $props()
</script>

<Header />

<main class="main">
	{@render children?.()}
</main>

<Sprites />
