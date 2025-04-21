<script lang="ts">
	import '../assets/scss/retro.scss'
	import '../app.css'
	import Sprites from '$lib/icons/index.svelte'
	import Header from '$lib/Header.svelte'

	let { children } = $props()
</script>

<Header />

{@render children?.()}

<Sprites />
