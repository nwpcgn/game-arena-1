<script lang="ts">
	import copyToClip from '$lib/utils/copyToClip.js'
	import daten from './selector.json'
	let list = $state(daten)
	let selList = $derived(list.filter((d) => d.selected))
	let activeSection = $state('section1')
</script>

{#snippet iconT(name, size = 20)}
	<svg class="nwp-icon" style="--fs: {size}px;"
		><use xlink:href="#{name}"></use></svg>
{/snippet}

<section class="page-layer nwp">
	<article class="content">
		<div class="bg-base-100 border-base-300 collapse border">
			<input
				type="radio"
				name="my-accordion-1"
				value="section1"
				bind:group={activeSection} />
			<div class="collapse-title font-semibold">
				<span class="font-semibold">Icon Selector</span>
			</div>
			<div class="collapse-content text-sm">
				Select your Icons from <kbd class="kbd kbd-sm">Icon List</kbd>. Selected
				Icons can be editted in
				<kbd class="kbd kbd-sm">Icon Editor</kbd>
			</div>
		</div>
		<div class="bg-base-100 border-base-300 collapse border">
			<input
				type="radio"
				name="my-accordion-1"
				value="section2"
				bind:group={activeSection} />
			<div class="collapse-title font-semibold">
				<span class="font-semibold">Icon List</span>
			</div>
			<div class="collapse-content">
				<div class="grid grid-cols-8 gap-4">
					{#each list as { slug, name, icon, selected }, i}
						<label
							class="rounded-box grid aspect-square place-content-center shadow-lg"
							class:text-info={selected}
							class:shadow-info={selected}>
							<input
								type="checkbox"
								class="sr-only"
								bind:checked={list[i].selected} />
							{@render iconT(icon, 32)}
						</label>
					{/each}
				</div>
			</div>
		</div>
		<div class="bg-base-100 border-base-300 collapse border">
			<input
				type="radio"
				name="my-accordion-1"
				value="section3"
				bind:group={activeSection} />
			<div class="collapse-title font-semibold">
				<span class="font-semibold">Icon Editor ({selList.length})</span>
			</div>
			<div class="collapse-content">
				<div class="grid grid-cols-2 gap-4">
					<div>
						<ul class="menu bg-base-200 rounded-box w-68">
							<li class="menu-title">List</li>
							{#each selList as { slug, name, icon }}
								<li>
									<span>
										{@render iconT(icon, 20)}
										<span>{name}</span>
										<span class="badge badge-sm">#{icon}</span>
									</span>
								</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-col gap-2">
						<textarea class="textarea" placeholder="Bio"
							>{JSON.stringify(selList)}</textarea>
						<button
							class="btn btn-sm"
							onclick={() => copyToClip(JSON.stringify(selList))}>Copy</button>
					</div>
				</div>
			</div>
		</div>
	</article>
</section>
