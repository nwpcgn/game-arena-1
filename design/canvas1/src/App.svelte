<script lang="ts">
	import Sprites from './lib/icons/index.svelte'
	import {
		Router,
		type RouteConfig,
		route
	} from '@mateothegreat/svelte5-router'
	const nav = [
		{
			name: 'Start',
			href: '/',
			icon: 'nwp-home',
			hidden: false
		},
		{
			name: 'Spaceship',
			href: '/tools/icons',
			icon: 'nwp-game',
			hidden: false
		},
		{
			name: 'Select',
			href: '/tools/icons/select',
			icon: 'nwp-chart',
			hidden: false
		},
		{
			name: 'Edit',
			href: '/tools/icons/edit',
			icon: 'nwp-tag',
			hidden: false
		},
		{
			name: 'Ouput',
			href: '/tools/icons/output',
			icon: 'nwp-map-1',
			hidden: false
		},
		{
			name: 'Settings',
			href: '/tools/settings',
			icon: 'nwp-options',
			hidden: false
		}
	]

	const routes: RouteConfig[] = [
		{
			path: '/',
			component: async () => import('./views/start/index.svelte'),
			props: {
				title: 'Start'
			}
		},
		{
			path: '/tools/icons',
			component: async () => import('./views/game1/index.svelte'),
			props: {
				title: 'Game 1'
			}
		},
		{
			path: '/tools/icons/select',
			component: async () => import('./views/game2/index.svelte'),
			props: {
				title: 'Select'
			}
		},
		{
			path: '/tools/icons/edit',
			component: async () => import('./views/game3/index.svelte'),
			props: {
				title: 'Edit'
			}
		},
		{
			path: '/tools/icons/output',
			component: async () => import('./views/game4/index.svelte'),
			props: {
				title: 'Ouput'
			}
		},
		{
			path: '/tools/settings',
			component: async () => import('./views/game5/index.svelte'),
			props: {
				title: 'Settings'
			}
		}
	]
</script>

<div class="navbar bg-neutral text-neutral-content shadow-lg">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-6 w-6 stroke-current">
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"></path>
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
			</svg>
		</button>
	</div>
	<div class="mx-2 flex-none px-2">
		<a use:route href="/" class="text-lg font-bold"> DaisyUI </a>
	</div>
	<div class="mx-2 flex flex-1 justify-center px-2">
		<div class="hidden items-stretch lg:flex">
			{#each nav as { name, href }}
				{#if href !== '/'}
					<a use:route {href} class="btn btn-ghost btn-sm rounded-btn">
						{name}</a>
				{/if}
			{/each}
		</div>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-6 w-6 stroke-current">
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				></path>
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
			</svg>
		</button>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-6 w-6 stroke-current">
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
				<!---->
			</svg>
		</button>
	</div>
</div>

<main class="main" data-theme="retro">
	<Router {routes} />
</main>
<Sprites></Sprites>
