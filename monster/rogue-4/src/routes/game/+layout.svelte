<script lang="ts">
	import { dungeon } from '$lib'

	let { children } = $props()
	let winW = $state(0)
	let winH = $state(0)

	$effect(() => {
		if (winH && winW) {
			const saveSize = Math.min(winW, winH)
			dungeon.area = saveSize
		}
	})
</script>

<main
	class="main game-bg flex flex-col"
	bind:clientHeight={winH}
	bind:clientWidth={winW}>
	{@render children()}
</main>
