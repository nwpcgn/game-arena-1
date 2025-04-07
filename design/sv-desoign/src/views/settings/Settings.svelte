<script lang="ts">
	import svelteLogo from '../../assets/svelte.svg'
	import viteLogo from '/vite.svg'
	let { route } = $props()
	let { title } = route?.route.props
</script>

<section class="page-layer nwp">
	<article class="content">
		<div class="flex justify-around p-4">
			<span>
				<img src={viteLogo} class="logo" alt="Vite Logo" />
			</span>
			<span>
				<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
			</span>
		</div>
		<div class="flex flex-col justify-between gap-2">
			<hgroup>
				<h1>{title ? title : 'Page'}</h1>
			</hgroup>

			<p class="text-xl font-semibold">
				Check out <em>SvelteKit</em>, the official Svelte app framework powered
				by Vite!
			</p>

			<p class="text-lg">Click on the Vite and Svelte logos to learn more</p>
		</div>
	</article>
</section>
