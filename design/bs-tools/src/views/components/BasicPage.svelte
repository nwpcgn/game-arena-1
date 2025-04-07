<script lang="ts">
	import svelteLogo from '../../assets/svelte.svg'
	import viteLogo from '../../assets/vite.svg'
	import Counter from '../../lib/Counter.svelte'
</script>

<section class="page-layer nwp">
	<article class="container p-5">
		<div>
			<a href="https://vite.dev" target="_blank" rel="noreferrer">
				<img src={viteLogo} class="logo" alt="Vite Logo" />
			</a>
			<a href="https://svelte.dev" target="_blank" rel="noreferrer">
				<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
			</a>
		</div>
		<h1>Vite + Svelte</h1>

		<div class="d-flex gap-2 py-4">
			<Counter />
		</div>
	</article>
</section>
