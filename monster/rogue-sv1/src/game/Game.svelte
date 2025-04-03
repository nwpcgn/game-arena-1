<script lang="ts">
	import sleep from '../lib/utils/sleep'

	const viewStyle = {
		init: 'bg-success text-success-content',
		ready: 'bg-info text-info-content',
		running: 'bg-warning text-warning-content',
		ended: 'bg-error text-error-content'
	}
	let views = $state({
		init: {
			title: 'Init',
			component: template1
		},
		ready: {
			title: 'Ready',
			component: template1
		},
		running: {
			title: 'Running',
			component: template1
		},
		ended: {
			title: 'Game Over',
			component: template1
		}
	})

	let current = $state('init')

	const changeView = async (e) => {
		const slug = e.currentTarget.dataset.next

		if (views[slug]) {
			current = slug
		} else {
			console.error(slug)
		}
	}

	sleep(3300).then(() => {
		current = 'ready'
	})
</script>

<div class="main-game">
	{#each Object.entries(views) as [slug, { title }]}
		{#if current === slug}
			{#await sleep(500) then _}
				{@render template1({ title })}
			{/await}
		{/if}
	{/each}
</div>

{#snippet template1({ title })}
	<section
		class="page transition-all duration-599 ease-in {viewStyle[current]}">
		<div class="p-8">
			<header class="py-4">
				<h2 class="text-4xl font-extrabold">{title}</h2>
			</header>
			<nav class="py-4">
				{#if current === 'ready'}
					<button
						onclick={changeView}
						class="btn btn-neutral"
						data-next="running"
						><span>Start Game</span>
					</button>
				{/if}

				{#if current === 'running'}
					<button onclick={changeView} class="btn btn-neutral" data-next="ended"
						><span>End Game</span>
					</button>
				{/if}
				{#if current === 'ended'}
					<button onclick={changeView} class="btn btn-neutral" data-next="ready"
						><span>Restart</span>
					</button>
				{/if}
			</nav>
		</div>
	</section>
{/snippet}
