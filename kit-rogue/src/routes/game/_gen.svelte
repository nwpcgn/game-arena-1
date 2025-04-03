<script lang="ts">
	import { dungeon, DungeonDrawer } from '$lib'
	import groupArray from '$lib/utils/groupArray'

	let currentFloor = $state(1)
	let heading = $state('')
	let healthEl = $state('')
	let inventoryEl = $state('')
	let floorEl = $state('')
	let equippedEl = $state('')
	let actionText = $state('')
	let maps = $state({
		'1': [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 1],
			[1, 2, 2, 2, 2, 2, 2, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 0, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		]
	})
	let playerX = $state(2)
	let playerY = $state(2)
	let playerHealth = $state(100)
	let playerInventory = $state({})
	let equippedItems = $state({})
	let actionButtons = $state([])

	function generateRandomMap() {
		let newMap = []
		for (let y = 0; y < 20; y++) {
			let row = ''
			for (let x = 0; x < 40; x++) {
				if (x === 0 || x === 39 || y === 0 || y === 19) {
					row += '#'
				} else {
					row += '_'
				}
			}
			newMap.push(row)
		}

		// Generate rooms
		let rooms = generateRooms()

		// Add rooms to the map
		rooms.forEach((room) => {
			for (let y = room.y; y < room.y + room.height; y++) {
				for (let x = room.x; x < room.x + room.width; x++) {
					if (
						y === room.y ||
						y === room.y + room.height - 1 ||
						x === room.x ||
						x === room.x + room.width - 1
					) {
						newMap[y] =
							newMap[y].substring(0, x) + '#' + newMap[y].substring(x + 1)
					}
				}
			}
			// Add a door to each room
			let doorX = room.x + Math.floor(room.width / 2)
			let doorY = room.y + room.height - 1
			newMap[doorY] =
				newMap[doorY].substring(0, doorX) +
				'D' +
				newMap[doorY].substring(doorX + 1)
		})

		// Place encounters in rooms
		placeEncounters(newMap, rooms)

		// Add player and stairs
		newMap[2] = newMap[2].substring(0, 2) + '@' + newMap[2].substring(3)
		newMap[18] = newMap[18].substring(0, 38) + 'S' + newMap[18].substring(39)
		return newMap
	}

	function generateRooms() {
		let rooms = []
		let numRooms = Math.floor(Math.random() * 3) + 3 // 3-5 rooms

		for (let i = 0; i < numRooms; i++) {
			let width = Math.floor(Math.random() * 5) + 6 // 6-10 width
			let height = Math.floor(Math.random() * 3) + 4 // 4-6 height
			let x = Math.floor(Math.random() * (38 - width)) + 1
			let y = Math.floor(Math.random() * (18 - height)) + 1

			// Check for overlap with existing rooms
			let overlap = rooms.some(
				(room) =>
					x < room.x + room.width &&
					x + width > room.x &&
					y < room.y + room.height &&
					y + height > room.y
			)

			if (!overlap) {
				rooms.push({
					x,
					y,
					width,
					height
				})
			}
		}

		return rooms
	}

	function placeEncounters(map, rooms) {
		let encounterSymbols = ['C', 'M', 'N', 'W', 'L', '?']

		rooms.forEach((room) => {
			let encounters = 0
			for (let y = room.y + 1; y < room.y + room.height - 1; y++) {
				for (let x = room.x + 1; x < room.x + room.width - 1; x++) {
					if (encounters >= 3) break
					if (Math.random() < 0.3) {
						let symbol =
							encounterSymbols[
								Math.floor(Math.random() * encounterSymbols.length)
							]
						map[y] = map[y].substring(0, x) + symbol + map[y].substring(x + 1)
						encounters++
					}
				}
				if (encounters >= 3) break
			}
		})
	}

	function initializeMap() {
		if (!maps[currentFloor]) {
			maps[currentFloor] = generateRandomMap()
		}
		return maps[currentFloor]
	}

	let map = initializeMap()

	// Render function
	function renderMap() {
		heading = '¦¦' + currentFloor + '¦¦\n' + map.join('\n')
		healthEl = playerHealth
		inventoryEl = formatInventory()
		floorEl = currentFloor
		equippedEl = formatEquipped()
	}

	// Format inventory for display
	function formatInventory() {
		return Object.keys(playerInventory).join(', ')
	}

	// Format equipped items for display
	function formatEquipped() {
		return Object.keys(equippedItems).join(', ') || 'None'
	}

	// Move function
	function movePlayer(dx, dy) {
		let newX = playerX + dx
		let newY = playerY + dy

		if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length) {
			if (map[newY][newX] !== '#') {
				let row = map[playerY].split('')
				row[playerX] = '_'
				map[playerY] = row.join('')

				row = map[newY].split('')
				let encounterSymbol = row[newX]
				row[newX] = '@'
				map[newY] = row.join('')

				playerX = newX
				playerY = newY

				renderMap()
				handleEncounter(encounterSymbol)
			}
		}
	}

	// Handle encounter
	async function handleEncounter(symbol) {
		actionText = 'You encountered: ' + symbol
		actionButtons.innerHTML = ''

		switch (symbol) {
			case 'D':
				addActionButton('Open Door', () => {
					actionText = 'You opened the door.'
					clearActionButtons()
				})
				break
			case 'C':
				addActionButton('Open Chest', () => {
					generateText(
						'Choose what you find in the chest: Gold, Potion or Armor.'
					).then((loot) => {
						addToInventory(loot, 'A valuable item found in a chest.')
						actionText = 'You found ' + loot + ' in the chest!'
						clearActionButtons()
						renderMap()
					})
				})
				break
			case 'M':
				addActionButton('Fight Monster', () => {
					let damage = 20
					if (equippedItems['Sword']) damage = 10 // Reduce damage if sword is equipped
					playerHealth -= damage
					if (playerHealth <= 0) {
						gameOver()
					} else {
						actionText = `You fought the monster and lost ${damage} health!`
						clearActionButtons()
						renderMap()
					}
				})
				addActionButton('Run Away', () => {
					actionText = 'You ran away from the monster.'
					clearActionButtons()
				})
				break
			case 'N':
				addActionButton('Talk to NPC', () => {
					generateText('What item does the NPC give you?').then((item) => {
						actionText = 'The NPC gives you ' + item + '.'
						addToInventory(item, 'A gift from a friendly NPC.')
						clearActionButtons()
						renderMap()
					})
				})
				break
			case 'W':
				addActionButton('Pick up Weapon', () => {
					addToInventory('Sword', 'A sharp blade for combat.')
					actionText = 'You picked up a sword!'
					clearActionButtons()
					renderMap()
				})
				break
			case 'L':
				addActionButton('Collect Loot', () => {
					selectLoot().then((selectedLoot) => {
						addToInventory(
							selectedLoot,
							'Valuable treasure found during your adventure.'
						)
						actionText = 'You collected ' + selectedLoot + '!'
						clearActionButtons()
						renderMap()
					})
				})
				break
			case '?':
				addActionButton('Discover...', async () => {
					let encounterDetails = await generateText(
						'Choose an encounter: Monster, NPC, or find Loot.'
					)
					actionText = 'AI generated encounter: ' + encounterDetails
					clearActionButtons()
					renderMap()
				})
				break
			case 'S':
				addActionButton('Go to Next Floor', () => {
					currentFloor++
					map = initializeMap()
					playerX = 2
					playerY = 2
					actionText = 'You ascended to floor ' + currentFloor + '.'
					clearActionButtons()
					renderMap()
				})
				break
		}
	}

	function addActionButton(text, onClick) {
		let button = document.createElement('button')
		button = text
		button.onclick = onClick
		actionButtons.appendChild(button)
	}

	function clearActionButtons() {
		actionButtons.innerHTML = ''
	}

	function gameOver() {
		actionText = 'Game Over! You died.'
		clearActionButtons()
		addActionButton('Restart', () => {
			playerHealth = 100
			playerInventory = {}
			equippedItems = {}
			playerX = 2
			playerY = 2
			currentFloor = 1
			maps = {}
			map = initializeMap()
			renderMap()
			actionText = 'Choose your action:'
			clearActionButtons()
		})
	}

	// Add item to inventory (with stacking and description)
	function addToInventory(item, description) {
		if (playerInventory[item]) {
			playerInventory[item].count++
		} else {
			playerInventory[item] = {
				count: 1,
				description: description.slice(0, 25), // Limit description to 25 words
				equipped: false
			}
		}
		addActionButton(`Equip ${item}`, () => equipItem(item))
	}

	// Equip item
	function equipItem(item) {
		if (playerInventory[item]) {
			if (equippedItems[item]) {
				equippedItems[item] = false
				playerInventory[item].equipped = false
				actionText = `You unequipped ${item}.`
			} else {
				equippedItems[item] = true
				playerInventory[item].equipped = true
				actionText = `You equipped ${item}.`
			}
			renderMap()
		}
	}

	// New function to handle loot selection
	async function selectLoot() {
		return new Promise((resolve) => {
			actionText = 'Choose your loot:'
			clearActionButtons()

			const lootOptions = ['Gold', 'Gem', 'Artifact']
			lootOptions.forEach((loot) => {
				addActionButton(loot, () => {
					resolve(loot)
				})
			})
		})
	}

	const keySlugs = {
		ArrowUp: 'up',
		ArrowDown: 'down',
		ArrowLeft: 'left',
		ArrowRight: 'right'
	}

	const handleMove = (key) => {
		switch (key) {
			case 'up':
				movePlayer(0, -1)
				break
			case 'down':
				movePlayer(0, 1)
				break
			case 'left':
				movePlayer(-1, 0)
				break
			case 'right':
				movePlayer(1, 0)
				break
		}
	}

	const handleKeyDown = (e) => {
		const key = e.key
		if (keySlugs[key]) {
			const slug = keySlugs[key]
			handleMove(slug)
		}
	}

	// Initial render
	renderMap()
</script>

<svelte:head><title>NWP-Dungeon-Game</title></svelte:head>
<svelte:window onkeydown={handleKeyDown} />
<section class="page-layer nwp">
	<article class="content">
		<h1>Game</h1>
		<p>{playerX} / {playerY}</p>

		<div class="inline-grid grid-cols-2 gap-1">
			<span>CURRENTFLOOR</span><span>{currentFloor}</span>
			<!-- <span>HEADING</span><span>{heading}</span> -->
			<span>HEALTHEL</span><span>{healthEl}</span>
			<span>INVENTORYEL</span><span>{inventoryEl}</span>
			<span>FLOOREL</span><span>{floorEl}</span>
			<span>EQUIPPEDEL</span><span>{equippedEl}</span>
			<span>ACTIONTEXT</span><span>{actionText}</span>

			<span>X</span><span>{playerX}</span>
			<span>Y</span><span>{playerY}</span>
			<span>HEALTH</span><span>{playerHealth}</span>
		</div>
	</article>
</section>
