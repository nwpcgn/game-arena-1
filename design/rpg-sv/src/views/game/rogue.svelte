<script lang="ts">
	// Game state
	let gameContainer = $state()
	let currentFloor = 1
	let maps = {}
	let playerX = 2
	let playerY = 2
	let playerHealth = 100
	let playerMaxHealth = 100
	let playerInventory = {}
	let equippedItems = {}

	function generateRandomMap() {
		let newMap = []
		for (let y = 0; y < 20; y++) {
			let row = ''
			for (let x = 0; x < 40; x++) {
				if (x === 0 || x === 39 || y === 0 || y === 19) {
					row += '#'
				} else {
					row += ' '
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
				rooms.push({ x, y, width, height })
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
		gameContainer.textContent = '¦¦' + currentFloor + '¦¦\n' + map.join('\n')
		healthEl.textContent = playerHealth
		inventoryEl.textContent = formatInventory()
		floorEl.textContent = currentFloor
		equippedEl.textContent = formatEquipped()
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
				row[playerX] = ' '
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
		actionText.textContent = 'You encountered: ' + symbol
		actionButtons.innerHTML = ''

		switch (symbol) {
			case 'D':
				addActionButton('Open Door', () => {
					actionText.textContent = 'You opened the door.'
					clearActionButtons()
				})
				break
			case 'C':
				addActionButton('Open Chest', () => {
					generateText(
						'Choose what you find in the chest: Gold, Potion or Armor.'
					).then((loot) => {
						addToInventory(loot, '') // No description for AI-generated loot
						actionText.textContent = 'You found ' + loot + ' in the chest!'
						clearActionButtons()
						renderMap()
					})
				})
				break
			case 'M':
				addActionButton('Fight Monster', () => {
					let damage = Math.floor(Math.random() * 10) + 15 // 15-24 damage
					if (equippedItems['Sword']) damage = Math.floor(damage / 2) // Reduce damage if sword is equipped
					playerHealth -= damage
					if (playerHealth <= 0) {
						gameOver()
					} else {
						actionText.textContent = `You fought the monster and lost ${damage} health!`
						clearActionButtons()
						renderMap()
					}
				})
				addActionButton('Run Away', () => {
					actionText.textContent = 'You ran away from the monster.'
					clearActionButtons()
				})
				break
			case 'N':
				addActionButton('Talk to NPC', () => {
					generateText('What item does the NPC give you?').then((item) => {
						actionText.textContent = 'The NPC gives you ' + item + '.'
						addToInventory(item, '') // No description for AI-generated item
						clearActionButtons()
						renderMap()
					})
				})
				break
			case 'W':
				addActionButton('Pick up Weapon', () => {
					addToInventory('Sword', 'A sharp blade for combat.')
					actionText.textContent = 'You picked up a sword!'
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
						actionText.textContent = 'You collected ' + selectedLoot + '!'
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
					actionText.textContent = 'AI generated encounter: ' + encounterDetails
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
					actionText.textContent = 'You ascended to floor ' + currentFloor + '.'
					clearActionButtons()
					renderMap()
				})
				break
		}

		// Add use potion option if player has a potion and needs healing
		if (playerInventory['Potion'] && playerHealth < playerMaxHealth) {
			addActionButton('Use Potion', () => {
				useItem('Potion')
			})
		}
	}

	function addActionButton(text, onClick) {
		let button = document.createElement('button')
		button.textContent = text
		button.onclick = onClick
		button.style.margin = '5px'
		button.style.padding = '5px 10px'
		actionButtons.appendChild(button)
	}

	function clearActionButtons() {
		actionButtons.innerHTML = ''
	}

	function gameOver() {
		actionText.textContent = 'Game Over! You died.'
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
			actionText.textContent = 'Choose your action:'
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
				actionText.textContent = `You unequipped ${item}.`
			} else {
				equippedItems[item] = true
				playerInventory[item].equipped = true
				actionText.textContent = `You equipped ${item}.`
			}
			renderMap()
		}
	}

	// Use item function
	function useItem(item) {
		if (playerInventory[item]) {
			if (item === 'Potion') {
				let healAmount = 30
				playerHealth = Math.min(playerMaxHealth, playerHealth + healAmount)
				actionText.textContent = `You used a Potion and healed ${healAmount} health!`

				// Remove the potion after use
				playerInventory[item].count--
				if (playerInventory[item].count <= 0) {
					delete playerInventory[item]
				}
			}
			renderMap()
			clearActionButtons()
		}
	}

	// New function to handle loot selection
	async function selectLoot() {
		return new Promise((resolve) => {
			actionText.textContent = 'Choose your loot:'
			clearActionButtons()

			const lootOptions = ['Gold', 'Gem', 'Artifact', 'Potion']
			lootOptions.forEach((loot) => {
				addActionButton(loot, () => {
					resolve(loot)
				})
			})
		})
	}

	function handleKeyDown(e) {
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
	// Initial render
	// renderMap()
</script>

<div class="grid h-full w-full grid-cols-[1fr_auto] grid-rows-[1fr]">
	<div class="relative overflow-hidden">
		<section class="nwp">
			<article class="content">
				<div>
					<h1>Roguelike Game Map</h1>

					<div
						id="gameContainer"
						bind:this={gameContainer}
						style="font-family: monospace; white-space: pre">
					</div>

					<!-- Player stats and inventory -->
					<div
						id="playerStats"
						style="margin-top: 20px; border: 1px solid #ccc; padding: 10px; max-width: 500px; margin-left: auto; margin-right: auto">
						<h3>Player Stats</h3>
						<p>Health: <span id="healthEl">100</span>/100</p>
						<p>Inventory: <span id="inventoryEl"></span></p>
						<p>Floor: <span id="floorEl">1</span></p>
						<p>Equipped: <span id="equippedEl"></span></p>
					</div>

					<!-- Action window -->
					<div
						id="actionWindow"
						style="margin-top: 20px; border: 1px solid black; padding: 10px; max-width: 500px; margin-left: auto; margin-right: auto; min-height: 100px">
						<p id="actionText">Choose your action:</p>
						<div id="actionButtons"></div>
					</div>

					<h2>Game Controls</h2>
					<p>
						Use arrow keys to move the player (@) around the map. On mobile, use
						the on-screen arrow buttons.
					</p>

					<h2>Map Legend</h2>
					<ul
						style="list-style-type: none; padding: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px">
						<li>@ - Player</li>
						<li># - Wall</li>
						<li>D - Door</li>
						<li>C - Chest</li>
						<li>M - Monster</li>
						<li>N - NPC</li>
						<li>W - Weapon</li>
						<li>L - Loot</li>
						<li>? - AI Decide</li>
						<li>S - Stairs (to next floor)</li>
					</ul>
				</div>
			</article>
		</section>
	</div>
	<aside
		class="relative flex w-[260px] flex-col items-center justify-center overflow-hidden p-8 shadow">
		<figure class="relative inline-grid overflow-hidden">
			<!-- <svg
				width="136"
				height="136"
				viewBox="0 0 136 136"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g>
					<rect width="136" height="136" />
					<path
						d="M83.6026 3.76588C83.6026 1.2553 82.3473 0 79.8367 0C79.8367 0 41.4247 0 41.4247 0C38.9141 0 37.6588 1.2553 37.6588 3.76588C37.6588 3.76588 37.6588 37.6588 37.6588 37.6588C37.6588 37.6588 3.76588 37.6588 3.76588 37.6588C1.25529 37.6588 0 38.9141 0 41.4247C0 41.4247 0 79.8367 0 79.8367C0 82.3473 1.25529 83.6026 3.76588 83.6026C3.76588 83.6026 37.6588 83.6026 37.6588 83.6026C37.6588 83.6026 37.6588 116.705 37.6588 116.705C37.6588 119.215 38.9141 120.471 41.4247 120.471C41.4247 120.471 79.8367 120.471 79.8367 120.471C82.3473 120.471 83.6026 119.215 83.6026 116.705C83.6026 116.705 83.6026 83.6026 83.6026 83.6026C83.6026 83.6026 116.705 83.6026 116.705 83.6026C119.215 83.6026 120.471 82.3473 120.471 79.8367C120.471 79.8367 120.471 41.4247 120.471 41.4247C120.471 38.9141 119.215 37.6588 116.705 37.6588C116.705 37.6588 83.6026 37.6588 83.6026 37.6588C83.6026 37.6588 83.6026 3.76588 83.6026 3.76588Z"
						fill="#383838"
						transform="translate(3.765 3.765)" />
					<g transform="translate(15.062 15.062)">
						<g>
							<path
								d="M97.9191 49.7128C97.9191 49.537 97.8438 49.3738 97.6931 49.2232C97.6931 49.2232 93.8893 45.4194 93.8893 45.4194C93.6634 45.1934 93.3997 45.1432 93.0984 45.2687C92.7971 45.3943 92.6465 45.6202 92.6465 45.9466C92.6465 45.9466 92.6465 53.5165 92.6465 53.5165C92.6465 53.8429 92.7971 54.0689 93.0984 54.1944C93.1989 54.2195 93.2993 54.2321 93.3997 54.2321C93.5755 54.2572 93.7387 54.1944 93.8893 54.0438C93.8893 54.0438 93.8893 54.0061 93.8893 54.0061C93.8893 54.0061 97.6931 50.24 97.6931 50.24C97.8438 50.0894 97.9191 49.9136 97.9191 49.7128C97.9191 49.7128 97.9191 49.7128 97.9191 49.7128ZM54.0061 93.8893C54.2321 93.6633 54.2823 93.3997 54.1568 93.0984C54.0312 92.7971 53.8053 92.6465 53.4789 92.6465C53.4789 92.6465 45.909 92.6465 45.909 92.6465C45.5826 92.6465 45.3566 92.7971 45.2311 93.0984C45.206 93.1989 45.1934 93.2993 45.1934 93.3997C45.1683 93.5755 45.2311 93.7387 45.3817 93.8893C45.3817 93.8893 45.4194 93.8893 45.4194 93.8893C45.4194 93.8893 49.1855 97.6931 49.1855 97.6931C49.3361 97.8437 49.5119 97.9191 49.7127 97.9191C49.8885 97.9191 50.0517 97.8437 50.2023 97.6931C50.2023 97.6931 54.0061 93.8893 54.0061 93.8893C54.0061 93.8893 54.0061 93.8893 54.0061 93.8893ZM0.225958 49.2232C0.075327 49.3738 0 49.537 0 49.7128C0 49.9136 0.075327 50.0894 0.225958 50.24C0.225958 50.24 4.02975 54.0061 4.02975 54.0061C4.02975 54.0061 4.02975 54.0438 4.02975 54.0438C4.18038 54.1944 4.34359 54.2572 4.51934 54.2321C4.61977 54.2321 4.7202 54.2195 4.82063 54.1944C5.12191 54.0689 5.27256 53.8429 5.27256 53.5165C5.27256 53.5165 5.27256 45.9466 5.27256 45.9466C5.27256 45.6202 5.12191 45.3943 4.82063 45.2687C4.51934 45.1432 4.25571 45.1934 4.02975 45.4194C4.02975 45.4194 0.225958 49.2232 0.225958 49.2232C0.225958 49.2232 0.225958 49.2232 0.225958 49.2232ZM50.2023 0.225969C50.0517 0.075327 49.8885 0 49.7127 0C49.5119 0 49.3361 0.075327 49.1855 0.225969C49.1855 0.225969 45.4194 4.02975 45.4194 4.02975C45.4194 4.02975 45.3817 4.02975 45.3817 4.02975C45.2311 4.18039 45.1683 4.34359 45.1934 4.51934C45.1934 4.61977 45.206 4.7202 45.2311 4.82063C45.3566 5.12192 45.5826 5.27256 45.909 5.27256C45.909 5.27256 53.4789 5.27256 53.4789 5.27256C53.8053 5.27256 54.0312 5.12192 54.1568 4.82063C54.2823 4.51934 54.2321 4.25572 54.0061 4.02975C54.0061 4.02975 50.2023 0.225969 50.2023 0.225969Z"
								fill="#666666" />
							<path
								d="M6.02579 2.63628C5.92536 1.95837 5.63663 1.36835 5.15959 0.866203C4.557 0.288734 3.84145 0 3.0129 0C2.20945 0 1.50645 0.288734 0.903877 0.866203C0.401737 1.36835 0.11298 1.95837 0.0376511 2.63628C0.0125504 2.76183 0 2.88736 0 3.0129C0 3.81633 0.301285 4.51934 0.903877 5.12193C1.50645 5.72451 2.20945 6.02579 3.0129 6.02579C3.84145 6.02579 4.557 5.72451 5.15959 5.12193C5.73706 4.51934 6.02579 3.81633 6.02579 3.0129C6.02579 2.88736 6.02579 2.76183 6.02579 2.63628Z"
								fill="#666666"
								transform="translate(45.947 45.947)" />
						</g>
					</g>
					<rect width="49" height="39" transform="translate(44 4)" />
					<rect width="40" height="51" transform="translate(4 43)" />
					<rect width="49" height="38" transform="translate(44 94)" />
					<rect width="39" height="51" transform="translate(93 43)" />
				</g>
			</svg> -->

			<!-- <div class="absolute inset-0 grid grid-rows-3" id="mobileControls">
				<button class="btn" id="upBtn" onclick={() => movePlayer(0, -1)}>↑</button>
				<div>
					<button id="leftBtn" onclick={() => movePlayer(-1, 0)}>←</button>
					<button id="rightBtn" onclick={() => movePlayer(1, 0)}>→</button>
				</div>
				<button class="btn" id="downBtn" onclick={() => movePlayer(0, 1)}>↓</button>
			</div> -->
		</figure>
		<figure
			class="relative inline-grid place-content-center overflow-hidden"
			style="width: 168px; aspect-ratio: 1/1;">
			<svg
				width="136"
				height="136"
				viewBox="0 0 136 136"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g>
					<rect width="136" height="136" />
					<path
						d="M83.6026 3.76588C83.6026 1.2553 82.3473 0 79.8367 0C79.8367 0 41.4247 0 41.4247 0C38.9141 0 37.6588 1.2553 37.6588 3.76588C37.6588 3.76588 37.6588 37.6588 37.6588 37.6588C37.6588 37.6588 3.76588 37.6588 3.76588 37.6588C1.25529 37.6588 0 38.9141 0 41.4247C0 41.4247 0 79.8367 0 79.8367C0 82.3473 1.25529 83.6026 3.76588 83.6026C3.76588 83.6026 37.6588 83.6026 37.6588 83.6026C37.6588 83.6026 37.6588 116.705 37.6588 116.705C37.6588 119.215 38.9141 120.471 41.4247 120.471C41.4247 120.471 79.8367 120.471 79.8367 120.471C82.3473 120.471 83.6026 119.215 83.6026 116.705C83.6026 116.705 83.6026 83.6026 83.6026 83.6026C83.6026 83.6026 116.705 83.6026 116.705 83.6026C119.215 83.6026 120.471 82.3473 120.471 79.8367C120.471 79.8367 120.471 41.4247 120.471 41.4247C120.471 38.9141 119.215 37.6588 116.705 37.6588C116.705 37.6588 83.6026 37.6588 83.6026 37.6588C83.6026 37.6588 83.6026 3.76588 83.6026 3.76588Z"
						fill="#383838"
						transform="translate(3.765 3.765)" />
					<g transform="translate(15.062 15.062)">
						<g>
							<path
								d="M97.9191 49.7128C97.9191 49.537 97.8438 49.3738 97.6931 49.2232C97.6931 49.2232 93.8893 45.4194 93.8893 45.4194C93.6634 45.1934 93.3997 45.1432 93.0984 45.2687C92.7971 45.3943 92.6465 45.6202 92.6465 45.9466C92.6465 45.9466 92.6465 53.5165 92.6465 53.5165C92.6465 53.8429 92.7971 54.0689 93.0984 54.1944C93.1989 54.2195 93.2993 54.2321 93.3997 54.2321C93.5755 54.2572 93.7387 54.1944 93.8893 54.0438C93.8893 54.0438 93.8893 54.0061 93.8893 54.0061C93.8893 54.0061 97.6931 50.24 97.6931 50.24C97.8438 50.0894 97.9191 49.9136 97.9191 49.7128C97.9191 49.7128 97.9191 49.7128 97.9191 49.7128ZM54.0061 93.8893C54.2321 93.6633 54.2823 93.3997 54.1568 93.0984C54.0312 92.7971 53.8053 92.6465 53.4789 92.6465C53.4789 92.6465 45.909 92.6465 45.909 92.6465C45.5826 92.6465 45.3566 92.7971 45.2311 93.0984C45.206 93.1989 45.1934 93.2993 45.1934 93.3997C45.1683 93.5755 45.2311 93.7387 45.3817 93.8893C45.3817 93.8893 45.4194 93.8893 45.4194 93.8893C45.4194 93.8893 49.1855 97.6931 49.1855 97.6931C49.3361 97.8437 49.5119 97.9191 49.7127 97.9191C49.8885 97.9191 50.0517 97.8437 50.2023 97.6931C50.2023 97.6931 54.0061 93.8893 54.0061 93.8893C54.0061 93.8893 54.0061 93.8893 54.0061 93.8893ZM0.225958 49.2232C0.075327 49.3738 0 49.537 0 49.7128C0 49.9136 0.075327 50.0894 0.225958 50.24C0.225958 50.24 4.02975 54.0061 4.02975 54.0061C4.02975 54.0061 4.02975 54.0438 4.02975 54.0438C4.18038 54.1944 4.34359 54.2572 4.51934 54.2321C4.61977 54.2321 4.7202 54.2195 4.82063 54.1944C5.12191 54.0689 5.27256 53.8429 5.27256 53.5165C5.27256 53.5165 5.27256 45.9466 5.27256 45.9466C5.27256 45.6202 5.12191 45.3943 4.82063 45.2687C4.51934 45.1432 4.25571 45.1934 4.02975 45.4194C4.02975 45.4194 0.225958 49.2232 0.225958 49.2232C0.225958 49.2232 0.225958 49.2232 0.225958 49.2232ZM50.2023 0.225969C50.0517 0.075327 49.8885 0 49.7127 0C49.5119 0 49.3361 0.075327 49.1855 0.225969C49.1855 0.225969 45.4194 4.02975 45.4194 4.02975C45.4194 4.02975 45.3817 4.02975 45.3817 4.02975C45.2311 4.18039 45.1683 4.34359 45.1934 4.51934C45.1934 4.61977 45.206 4.7202 45.2311 4.82063C45.3566 5.12192 45.5826 5.27256 45.909 5.27256C45.909 5.27256 53.4789 5.27256 53.4789 5.27256C53.8053 5.27256 54.0312 5.12192 54.1568 4.82063C54.2823 4.51934 54.2321 4.25572 54.0061 4.02975C54.0061 4.02975 50.2023 0.225969 50.2023 0.225969Z"
								fill="#666666" />
							<path
								d="M6.02579 2.63628C5.92536 1.95837 5.63663 1.36835 5.15959 0.866203C4.557 0.288734 3.84145 0 3.0129 0C2.20945 0 1.50645 0.288734 0.903877 0.866203C0.401737 1.36835 0.11298 1.95837 0.0376511 2.63628C0.0125504 2.76183 0 2.88736 0 3.0129C0 3.81633 0.301285 4.51934 0.903877 5.12193C1.50645 5.72451 2.20945 6.02579 3.0129 6.02579C3.84145 6.02579 4.557 5.72451 5.15959 5.12193C5.73706 4.51934 6.02579 3.81633 6.02579 3.0129C6.02579 2.88736 6.02579 2.76183 6.02579 2.63628Z"
								fill="#666666"
								transform="translate(45.947 45.947)" />
						</g>
					</g>
					<rect width="49" height="39" transform="translate(44 4)" />
					<rect width="40" height="51" transform="translate(4 43)" />
					<rect width="49" height="38" transform="translate(44 94)" />
					<rect width="39" height="51" transform="translate(93 43)" />
				</g>
			</svg>
			<div
				class="absolute inset-0 flex flex-col gap-1 p-1 p-2"
				id="mobileControls">
				<button class="flex-1" id="upBtn">↑</button>
				<div class="grid flex-1 grid-cols-2 gap-1">
					<button id="leftBtn" class="h-full">←</button>
					<button id="rightBtn" class="h-full">→</button>
				</div>
				<button class="flex-1" id="downBtn">↓</button>
			</div>
		</figure>
	</aside>
</div>

<svelte:window onkeydown={handleKeyDown} />
