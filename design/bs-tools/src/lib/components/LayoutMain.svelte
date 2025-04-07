<script lang="ts">
	import { route } from '@mateothegreat/svelte5-router'
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
	const linkConfig = { active: { class: 'text-error' } }
</script>

<footer class="flex justify-center p-3">
	<nav class="rounded-box bg-base-300 flex justify-center gap-4 px-4 py-2">
		{#each links as { name, href, icon }}
			<a use:route={linkConfig} {href}>
				<div class="flex flex-col items-center" style="--fs: 24px;">
					{@render iconT(icon)}
					<span class="fomt-thin text-xs">{name}</span>
				</div>
			</a>
		{/each}
	</nav>
</footer>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
