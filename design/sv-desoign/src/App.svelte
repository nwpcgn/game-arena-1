<script lang="ts">
	import Start from './views/start/Start.svelte'
	import Sprites from './lib/icons/index.svelte'
	import { Router, type RouteConfig } from '@mateothegreat/svelte5-router'
	import LayoutMain from './lib/components/LayoutMain.svelte'
	const links = [
		{
			name: 'Start',
			href: '/',
			icon: 'nwp-home',
			hidden: false
		},
		{
			name: 'Game',
			href: '/p1',
			icon: 'nwp-game',
			hidden: false
		},
		{
			name: 'Maze',
			href: '/p2',
			icon: 'nwp-grid',
			hidden: false
		},
		{
			name: 'Rpgs',
			href: '/p3',
			icon: 'nwp-rows',
			hidden: false
		},
		{
			name: 'Wheel',
			href: '/p4',
			icon: 'nwp-archive',
			hidden: false
		},
		{
			name: 'Settings',
			href: '/p5',
			icon: 'nwp-options',
			hidden: false
		}
	]
	const routes: RouteConfig[] = [
		{
			path: '/',
			component: Start,
			props: {
				title: 'Startseite',
				userAgent: navigator.userAgent
			}
		},
		{
			path: '/p1',
			component: async () => import('./views/game1/Game.svelte'),
			props: {
				title: 'Gaming',
				userAgent: navigator.userAgent
			}
		},
		{
			path: '/p2',
			component: async () => import('./views/game2/Game2.svelte'),
			props: {
				title: 'Maze',
				userAgent: navigator.userAgent
			}
		},
		{
			path: '/p3',
			component: async () => import('./views/game3/Game3.svelte'),
			props: {
				title: 'Maze',
				userAgent: navigator.userAgent
			}
		},
		{
			path: '/p4',
			component: async () => import('./views/game4/Gam4.svelte'),
			props: {
				title: 'Wheel',
				userAgent: navigator.userAgent
			}
		},
		{
			path: 'settings',
			component: async () => import('./views/settings/Settings.svelte'),
			props: {
				title: 'Settings',
				userAgent: navigator.userAgent
			}
		}
	]

	location.hash = '/'
</script>

<main class="main">
	<Router {routes} />
</main>
<LayoutMain></LayoutMain>

<Sprites></Sprites>
