<script lang="ts">
	let { route } = $props()
	const url = '/sprites/nwp-icons.json'

	const getIcons = async () => {
		const res = await fetch(url)
		const data = await res.json()
		return data
	}
</script>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}

{#await getIcons() then value}
	<section class="page-layer nwp">
		<div class="container-fluid p-4">
			<div class="mb-4 bg-bo py-5">
				<h1 class="display-5 fw-bold">{route.route.props?.title}</h1>
				<p class="col-md-8 fs-4">
					{value?.length} Icons fetched.
				</p>
				<button class="btn btn-primary btn-lg" data-bs-toggle="collapse" data-bs-target="#all-icons"  type="button"
					>Show Icons</button>
			</div>
			<div class="collapse" id="all-icons">
				<div class="icon-grid">
					{#each value as { name, id }}
						<button class="btn align-items-center d-flex flex-column gap-2 p-2">
							{@render iconT(id)}
							<span>{name}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/await}
