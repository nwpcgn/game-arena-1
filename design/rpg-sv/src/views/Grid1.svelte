<script lang="ts">
	import { getDungeon, CONFIG } from '../lib/dungeon'
	import { getTile, groupArray, checkCollide, distance } from '../lib'

	class World {
		fogSize: number = $state(4.5)
		width: number = $state()
		height: number = $state()
		map: (number[] | null)[] | nul = $state()
		rooms: number[] = $state([])
		position = $state({ x: 1, y: 1 })
		currentRoom: number | null = $derived(
			getTile(this.map, this.position.x, this.position.y)
		)

		constructor(width: number, height: number) {
			this.width = width
			this.height = height
		}

		generate() {
			const res = getDungeon({
				width: this.width,
				height: this.height,
				minRoomSize: 6,
				maxRoomSize: 20
			})
			this.map = res
			this.rooms = groupArray(res)
		}

		isPlayer(x: number, y: number) {
			return checkCollide(this.position.x, this.position.y, x, y)
		}

		isFoggy(x: number, y: number) {
			return distance(this.position.x, this.position.y, x, y) <= this.fogSize
		}
	}

	let game = new World(24, 30)
	let gridStyle = $derived(` --cols: ${game.width}; --rows: ${game.height};`)

	let start = $state({ x: 1, y: 1 })
	let end = $state({ x: 8, y: 8 })

	function createBoard() {
		console.log('creatwBoard')
		game.generate()
	}

	function updatePlayerPosition(newX: number, newY: number) {
		game.position.x = newX
		game.position.y = newY
	}

	function movePlayer(x: number, y: number) {
		const newX = game.position.x + x
		const newY = game.position.y + y
		if (game.map[newY][newX] !== 1) {
			updatePlayerPosition(newX, newY)
		}
	}

	const onKeyDown = (e) => {
		switch (e.key) {
			case 'ArrowUp':
				movePlayer(0, -1)
				break
			case 'ArrowDown':
				movePlayer(0, 1)
				break
			case 'ArrowLeft':
				movePlayer(-1, 0)
				break
			case 'ArrowRight':
				movePlayer(1, 0)
				break
		}
	}

	$effect(() => {
		createBoard()
	})
</script>

<svelte:window onkeydown={onKeyDown} />

<svelte:head><title>NWP-Dungeon-Game</title></svelte:head>

<section class="page-layer nwp">
	<article class="content" style="--size: var(--page-width);">
		<div>
			<div class="flex items-center gap-4">
				<div>Position:</div>
				<div>
					{game.position.x} / {game.position.y}
				</div>
			</div>
		</div>

		<div class="roguelike-grid bg-neutral" style={gridStyle}>
			{#each game?.map as row, y}
				{#each row as col, x}
					{#if col === 1}
						<span class="tile wAll tile-1"></span>
					{:else if col == 0}
						<span class="tile floor tile-0">
							<span class:player={game.isPlayer(x, y)}></span>
						</span>
					{:else}
						<div class:tile={game.isFoggy(x, y) && col == game.currentRoom}>
							<span class:player={game.isPlayer(x, y)}></span>
						</div>
					{/if}
				{/each}
			{/each}
		</div>
	</article>
</section>
