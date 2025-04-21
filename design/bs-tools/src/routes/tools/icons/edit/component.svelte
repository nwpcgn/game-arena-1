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
				<button class="btn btn-primary btn-lg" type="button"
					>Example button</button>
			</div>

			<div class="row">
				<div class="col">
					<h3>Column title</h3>
					<p>
						Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
						id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
						ultricies vehicula ut id elit.
					</p>
				</div>
				<div class="col text-center">
					<div class="icon-grid">
						{#each value as { name, id }}
							<figure class="align-items-center d-flex flex-column gap-2 p-2">
								{@render iconT(id)}
								<span>{name}</span>
							</figure>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
{/await}
