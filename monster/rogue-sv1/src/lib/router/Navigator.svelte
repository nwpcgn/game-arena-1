<script lang="ts">
	import { router } from './navigator.svelte.ts'
	let { routes } = $props()
	let current = $derived(router.route)

	function parseHash(e) {
		const hash = location.hash.slice(1)
		const [path, queryString] = hash.split('?')

		const queryParams = {}
		if (queryString) {
			queryString.split('&').forEach((pair) => {
				const [key, value] = pair.split('=')
				queryParams[key] = decodeURIComponent(value)
			})
		}

		router.update({ path, queryParams })

		// router.path = path
		// router.props = queryParams
	}

	$effect(() => {
		parseHash()
	})
</script>

{@render routes[current]?.component()}

<svelte:window onhashchange={parseHash} />
