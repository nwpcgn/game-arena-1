<script>
	const nav = [
		{
			name: 'Start',
			href: '/',
			icon: 'icon-start'
		},
		// {
		// 	name: 'Game',
		// 	href: '/game',
		// 	icon: 'nwp-game'
		// },
		// {
		// 	name: 'Kontra',
		// 	href: '/kontra',
		// 	icon: 'nwp-game'
		// }
		// {
		// 	name: 'Game 3',
		// 	href: '/game/3',
		// 	icon: 'nwp-game'
		// },
		// {
		// 	name: 'Game 4',
		// 	href: '/game/4',
		// 	icon: 'nwp-game'
		// }
	]
</script>

<nav class="navbar bg-base-100 shadow-sm">
	<div class="flex-1">
		<a href="#/" class="btn btn-ghost text-xl">nwp-studio</a>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#each nav as { name, href, icon }}
				<li><a href="#{href}">
					<span>{name}</span>
				</a></li>
			{/each}
		</ul>
	</div>
</nav>
