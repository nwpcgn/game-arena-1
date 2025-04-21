// Game state
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

// Key press handler
document.addEventListener('keydown', (e) => {
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
})

// Initial render
renderMap()
