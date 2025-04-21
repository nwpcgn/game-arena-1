<script lang="ts">
	function createTilemap() {
		// Define the tilemap grid representing the game world
		const tilemap = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 1, 'H', 1, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0]
		]

		// Hero's initial position
		let heroPosition = { x: 2, y: 2 }

		// Function to move the hero within the tilemap
		function moveHero(direction) {
			switch (direction) {
				case 'up':
					if (tilemap[heroPosition.y - 1][heroPosition.x] !== 0) {
						heroPosition.y--
					}
					break
				case 'down':
					if (tilemap[heroPosition.y + 1][heroPosition.x] !== 0) {
						heroPosition.y++
					}
					break
				case 'left':
					if (tilemap[heroPosition.y][heroPosition.x - 1] !== 0) {
						heroPosition.x--
					}
					break
				case 'right':
					if (tilemap[heroPosition.y][heroPosition.x + 1] !== 0) {
						heroPosition.x++
					}
					break
				default:
					console.log(
						'Invalid direction. Please use "up", "down", "left", or "right".'
					)
			}
		}

		// Function to find items on the tilemap
		function findItems() {
			// Logic to find items on the tilemap
			console.log('Searching for items...')
		}

		// Function to battle enemies on the tilemap
		function battleEnemies() {
			// Logic to battle enemies on the tilemap
			console.log('Battling enemies...')
		}

		// Return functions and data for external use
		return {
			tilemap,
			heroPosition,
			moveHero,
			findItems,
			battleEnemies
		}
	}

	// Example of using the createTilemap function
	let gameMap = createTilemap()
	let map = $state()
	map = gameMap.tilemap
	console.log(gameMap.tilemap)
	gameMap.moveHero('up')
	console.log('Hero moved up:', gameMap.heroPosition)
	gameMap.findItems()
	gameMap.battleEnemies()

	let height = $state(5)
	let width = $state(5)
	let gridStyle = ` --ro-cols: ${width}; --ro-rows: ${height}; --ro-width: 40px; --ro-height: 40px; --ro-gap: 1px;`
</script>

<svelte:head><title>NWP-Dungeon-Game</title></svelte:head>

<section class="page-layer nwp">
	<article class="content">
		<h1>Start</h1>
		<div class="roguelike-grid bg-base-300" style={gridStyle}>
			{#each map as row, y}
				{#each row as col, x}
					{#if col.tile === 1}
						<span class="tile-31">
							<span class="sr-only">X</span>
						</span>
					{:else}
						<span class="bg-base-100">
							{#if col.room}
								<span class="tile-1"></span>
							{:else}
								<span class="tile-0"></span>
							{/if}
						</span>
					{/if}
				{/each}
			{/each}
		</div>
	</article>
</section>
