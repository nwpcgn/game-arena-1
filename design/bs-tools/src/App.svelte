<script lang="ts">
	import Sprites from './lib/icons/index.svelte'
	import { onMount } from 'svelte'
	import {
		Router,
		type RouteConfig,
		route
	} from '@mateothegreat/svelte5-router'
	onMount(async () => await import('bootstrap'))
	const nav = [
		{
			name: 'Start',
			href: '/',
			icon: 'nwp-home',
			hidden: false
		},
		{
			name: 'Icons',
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
			component: async () => import('./routes/start/component.svelte'),
			props: {
				title: 'Start'
			}
		},
		{
			path: '/tools/icons',
			component: async () => import('./routes/tools/icons/component.svelte'),
			props: {
				title: 'Icons'
			}
		},
		{
			path: '/tools/icons/select',
			component: async () =>
				import('./routes/tools/icons/select/component.svelte'),
			props: {
				title: 'Select'
			}
		},
		{
			path: '/tools/icons/edit',
			component: async () =>
				import('./routes/tools/icons/edit/component.svelte'),
			props: {
				title: 'Edit'
			}
		},
		{
			path: '/tools/icons/output',
			component: async () =>
				import('./routes/tools/icons/output/component.svelte'),
			props: {
				title: 'Ouput'
			}
		},
		{
			path: '/tools/settings',
			component: async () => import('./routes/tools/settings/component.svelte'),
			props: {
				title: 'Settings'
			}
		}
	]
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">nwp-studio</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarResponsive"
			aria-controls="navbarResponsive"
			aria-expanded="false"
			aria-label="Toggle navigation"
			><span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<nav class="navbar-nav ms-auto">
				{#each nav as { name, href, icon }}
					<a use:route class="nav-link" {href}><span>{name}</span></a>
				{/each}
			</nav>
		</div>
	</div>
</nav>
<main class="main">
	<Router {routes} />
</main>

<Sprites />
