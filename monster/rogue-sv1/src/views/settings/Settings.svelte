<script lang="ts">
	import { router, links } from '../../lib/router'
	let name = router.params?.title
</script>

<section class="page-layer nwp">
	<article class="content">
		<div>
			<ul class="menu bg-base-200 rounded-box w-56">
				<li class="menu-title">{name ? name : 'Menu'}</li>
				{#each links as { name, href }}
					{#if router.path !== href.split('?')[0]}
						<li><a href="#{href}">{name}</a></li>
					{/if}
				{/each}
			</ul>
		</div>
	</article>
</section>
