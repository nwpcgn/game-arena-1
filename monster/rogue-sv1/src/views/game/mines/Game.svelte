<script lang="ts">
	import { router, links } from '../../lib/router'
	let name = $derived(router.params?.title)
	import { gArr, paginate } from './utils'
	let board = $state([])
	let rows = $state(8)
	let columns = $state(8)
	let minesCount = $state(10)
	let minesLocation = $state([])
	let tilesClicked = $state(0)
	let flagEnabled = $state(false)
	let gameOver = $state(false)
	function setMines() {
		let minesLeft = minesCount
		while (minesLeft > 0) {
			let r = Math.floor(Math.random() * rows)
			let c = Math.floor(Math.random() * columns)
			let id = [r, c]

			if (!minesLocation.includes(id)) {
				minesLocation.push(id)
				board[r][c] = 1
				minesLeft -= 1
			}
		}
	}

	board = paginate(gArr(rows * columns), columns)

	setMines()

	$inspect(minesLocation, board)
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

	<article class="content flex justify-center">
		<div class="grid grid-cols-8 gap-1">
			{#each board as row, y}
				{#each row as col, x}
					<button
						data-x={x}
						data-y={y}
						class="bg-base-300 grid aspect-square w-10 place-content-center">
						<span class="text-xs font-thin">{col}</span>
					</button>
				{/each}
			{/each}
		</div>
	</article>
</section>
