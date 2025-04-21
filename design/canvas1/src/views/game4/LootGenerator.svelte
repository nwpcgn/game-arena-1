<script lang="ts">
	type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
	type Category = 'weapon' | 'armor' | 'potion' | 'material' | 'special'

	type LootItem = {
		name: string
		rarity: Rarity
		category: Category
		dropChance: number
	}

	const masterLootTable: LootItem[] = [
		{
			name: 'Rusty Sword',
			rarity: 'common',
			category: 'weapon',
			dropChance: 40
		},
		{
			name: 'Iron Axe',
			rarity: 'uncommon',
			category: 'weapon',
			dropChance: 30
		},
		{ name: 'Flame Bow', rarity: 'rare', category: 'weapon', dropChance: 20 },
		{
			name: 'Shadow Dagger',
			rarity: 'epic',
			category: 'weapon',
			dropChance: 7
		},
		{
			name: 'Blade of Eternity',
			rarity: 'legendary',
			category: 'weapon',
			dropChance: 3
		},

		{
			name: 'Leather Armor',
			rarity: 'common',
			category: 'armor',
			dropChance: 50
		},
		{
			name: 'Iron Plate',
			rarity: 'uncommon',
			category: 'armor',
			dropChance: 25
		},
		{ name: 'Magic Robe', rarity: 'rare', category: 'armor', dropChance: 15 },
		{
			name: 'Dragon Scale Armor',
			rarity: 'epic',
			category: 'armor',
			dropChance: 7
		},
		{
			name: 'Aegis of the Ancients',
			rarity: 'legendary',
			category: 'armor',
			dropChance: 3
		},

		{
			name: 'Health Potion',
			rarity: 'common',
			category: 'potion',
			dropChance: 60
		},
		{
			name: 'Mana Potion',
			rarity: 'common',
			category: 'potion',
			dropChance: 20
		},
		{
			name: 'Stamina Elixir',
			rarity: 'uncommon',
			category: 'potion',
			dropChance: 10
		},
		{
			name: 'Potion of Invincibility',
			rarity: 'epic',
			category: 'potion',
			dropChance: 5
		},
		{
			name: 'Elixir of Time',
			rarity: 'legendary',
			category: 'potion',
			dropChance: 5
		},

		{
			name: 'Iron Ore',
			rarity: 'common',
			category: 'material',
			dropChance: 40
		},
		{
			name: 'Enchanted Wood',
			rarity: 'uncommon',
			category: 'material',
			dropChance: 30
		},
		{
			name: 'Soul Shard',
			rarity: 'rare',
			category: 'material',
			dropChance: 20
		},
		{
			name: 'Mystic Crystal',
			rarity: 'epic',
			category: 'material',
			dropChance: 7
		},
		{
			name: 'Void Essence',
			rarity: 'legendary',
			category: 'material',
			dropChance: 3
		},

		{
			name: 'Mystery Key',
			rarity: 'uncommon',
			category: 'special',
			dropChance: 50
		},
		{
			name: 'Treasure Map',
			rarity: 'rare',
			category: 'special',
			dropChance: 25
		},
		{
			name: 'Teleport Scroll',
			rarity: 'rare',
			category: 'special',
			dropChance: 15
		},
		{ name: 'Pet Egg', rarity: 'epic', category: 'special', dropChance: 7 },
		{
			name: 'Ancient Relic',
			rarity: 'legendary',
			category: 'special',
			dropChance: 3
		}
	]

	const rarityColors: Record<Rarity, string> = {
		common: '#aaa',
		uncommon: '#4caf50',
		rare: '#2196f3',
		epic: '#9c27b0',
		legendary: '#ffc107'
	}

	function getLoot(table: LootItem[]): LootItem | null {
		const roll = Math.random() * 100
		let accumulated = 0

		for (const item of table) {
			accumulated += item.dropChance
			if (roll <= accumulated) {
				return item
			}
		}

		return null
	}

	function generateRandomLoot(): LootItem | null {
		const categories: Category[] = [
			'weapon',
			'armor',
			'potion',
			'material',
			'special'
		]
		const randomCategory =
			categories[Math.floor(Math.random() * categories.length)]
		const filteredTable = masterLootTable.filter(
			(item) => item.category === randomCategory
		)
		return getLoot(filteredTable)
	}

	let lastDrop: LootItem | null = null
	let history: LootItem[] = []

	function openLootBox() {
		const drop = generateRandomLoot()
		lastDrop = drop
		if (drop) history.unshift(drop)
	}
</script>

<section class="page-layer nwp center">
	<div class="lootbox">
		<h2>🎁 Loot Generator</h2>

		<button on:click={openLootBox}>Loot öffnen</button>

		{#if lastDrop}
			<div class="item" style="color: {rarityColors[lastDrop.rarity]}">
				Du hast <span class="rarity">{lastDrop.name}</span> gefunden!
				<br />
				<small>({lastDrop.rarity}, {lastDrop.category})</small>
			</div>
		{/if}

		{#if history.length > 0}
			<div class="log">
				<h4>📜 Letzte Drops:</h4>
				<ul>
					{#each history.slice(0, 5) as item}
						<li style="color: {rarityColors[item.rarity]}">
							{item.name} ({item.rarity}, {item.category})
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>

<style>
	.lootbox {
		padding: 1rem;
		border: 2px dashed #555;
		border-radius: 1rem;
		background: #111;
		color: white;
		max-width: 400px;
		margin: 0 auto;
		text-align: center;
	}

	.item {
		font-weight: bold;
		margin: 0.5rem 0;
	}

	.log {
		margin-top: 1rem;
		max-height: 200px;
		overflow-y: auto;
		font-size: 0.9rem;
		text-align: left;
	}

	.rarity {
		font-weight: bold;
		padding: 0.2rem 0.5rem;
		border-radius: 0.3rem;
	}

	button {
		margin-top: 1rem;
		background: #333;
		color: white;
		padding: 0.6rem 1.2rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	button:hover {
		background: #555;
	}
</style>
