<script lang="ts">
  import GotGen from './GotGen.svelte';

	import svelteLogo from '../../assets/svelte.svg'
	import viteLogo from '/vite.svg'
	let { route } = $props()
	let { title } = route?.route.props
</script>

<section class="page-layer center nwp">
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
				<h2>{title ? title : 'Page'}</h2>
			</hgroup>


		</div>
	</article>

	<GotGen></GotGen>
</section>
