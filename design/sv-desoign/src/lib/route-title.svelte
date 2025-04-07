<script lang="ts">
	import type {
		RouteResult,
		RouterInstance
	} from '@mateothegreat/svelte5-router'

	export type RouteTitleProps = {
		router?: RouterInstance
		route?: RouteResult
		file?: string
		content?: any
		end?: boolean
	}

	let {
		router = $bindable(),
		route,
		file,
		content,
		end
	}: RouteTitleProps = $props()
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-3 rounded-md bg-slate-900/70 p-1.5 px-2">
		{#if router}
			<div
				class="flex flex-wrap items-center rounded-sm bg-gray-800 px-1.5 py-0.5 text-sm text-slate-500">
				<svg class="nwp-icon nwp-arrow-left"
					><use xlink:href="#nwp-arrow-left"></use></svg>
				{router.config.id}
				{#if router.navigating}
					<span class="px-1 py-0.5 text-red-400">(hooks firing)</span>
				{:else}
					<span class="px-1 py-0.5 text-slate-600">(idle)</span>
				{/if}
				routed the path
				<span class="px-1 py-0.5 text-green-400">
					{route?.absolute?.()}
				</span>
				and nesting&nbsp;
				{#if end}
					<span class="flex items-center gap-1 whitespace-nowrap">
						<span class="text-red-400">stopped</span>
						<svg class="nwp-icon nwp-close"
							><use xlink:href="#nwp-close"></use></svg>
					</span>
				{:else}
					<span
						class="flex items-center gap-1 whitespace-nowrap text-green-400">
						<span class="">continued</span>
						<svg class="nwp-icon nwp-arrow-right"
							><use xlink:href="#nwp-arrow-right"></use></svg>
					</span>
				{/if}
			</div>
		{/if}
		<span class="h-4 w-4 text-slate-500"
			><svg class="nwp-icon nwp-arrow-right"
				><use xlink:href="#nwp-arrow-right"></use></svg
			></span>
		<svg class="nwp-icon nwp-archive"
			><use xlink:href="#nwp-archive"></use></svg>
	</div>
	<div class="p-2">
		{#if content}
			{#if typeof content === 'string'}
				<div
					class="flex flex-col items-center gap-2 text-center text-slate-400">
					<div class="max-w-3xl text-sm text-slate-500">
						{content}
					</div>
				</div>
			{:else}
				<div class="flex items-center">
					{@render content()}
				</div>
			{/if}
		{/if}
	</div>
</div>
