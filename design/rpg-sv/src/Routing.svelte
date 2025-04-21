<script lang="ts">
	import { Router, type RouteConfig } from '@mateothegreat/svelte5-router'

	const routes: RouteConfig[] = [
		{
			component: Start
		},
		{
			path: '/p1',
			component: Game
		},
		{
			path: '/p2',
			component: Generator
		}
	]
	const nav = [
		{
			name: 'Start',
			href: '/',
			icon: 'nwp-home',
			hidden: false
		},
		{
			name: 'Game',
			href: '/page/1',
			icon: 'nwp-game',
			hidden: false
		},
		{
			name: 'Game',
			href: '/page/2',
			icon: 'nwp-game',
			hidden: false
		},
		{
			name: 'Settings',
			href: '/page/3',
			icon: 'nwp-options',
			hidden: false
		}
	]
</script>

<main class="main">
	<Router {routes} />
</main>

{#snippet Start()}
	<section class="page-layer nwp">
		<article class="content">
			<h1>Start</h1>
		</article>
	</section>
{/snippet}

{#snippet Game()}
	<section class="page-layer nwp">
		<article class="content">
			<h1>Game</h1>
		</article>
	</section>
{/snippet}

{#snippet Generator()}
	<section class="page-layer nwp">
		<article class="content">
			<h1>Generator</h1>
		</article>
	</section>
{/snippet}
