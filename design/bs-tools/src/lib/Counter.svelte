<script lang="ts">
	let count: number = $state(0)
	const increment = () => {
		count += 1
	}
</script>

<button class="btn btn-dark" onclick={increment}>
	count is {count}
</button>
