<script lang="ts">
	import Sprite from './lib/icons/index.svelte'
	import { onMount } from 'svelte'
	import Start from './views/start/Start.svelte'
	import Game from './views/game/Game.svelte'
	import Settings from './views/settings/Settings.svelte'
	import { Router, router } from './lib/router'
	let routes = $state.raw({
		'/': { component: Start },
		'/game': { component: Game },
		'/settings': { component: Settings }
	})
	onMount(() => {
		location.hash = '#/'
	})
</script>



<main class="main">
	<Router {routes}></Router>
</main>
<Sprite></Sprite>
