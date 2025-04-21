<script lang="ts">
	import ArmorIcon from './icons/loot-armor.svg'
	import MapIcon from './icons/loot-map.svg'
	import MaterialIcon from './icons/loot-material.svg'
	import PotionIcon from './icons/loot-potion.svg'
	import SpecialIcon from './icons/loot-special.svg'
	import WeaponIcon from './icons/loot-weapon.svg'
	import fetchData from '../utils/fetchData'
	import groupBy from '../utils/groupBy'
	import Modal from './Modal.svelte'

	let showModal = $state(false)

	type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
	type Category = 'weapon' | 'armor' | 'potion' | 'material' | 'special'

	type LootItem = {
		name: string
		rarity: Rarity
		category: Category
		dropChance: number
	}
	const katIcons = {
		armor: ArmorIcon,
		material: MaterialIcon,
		potion: PotionIcon,
		special: SpecialIcon,
		weapon: WeaponIcon
	}
	const dialogMap = {
		positive_event: { titel: 'Success', style: 'sussess' },
		negative_event: { titel: 'Error', style: 'error' },
		loot_found: { titel: 'Found Loot', style: 'info' },
		npc_dialogue: { titel: 'Citizen', style: 'warning' },
		combat_start: { titel: 'Battle Logs', style: 'info' },
		level_up: { titel: 'Levelup', style: 'success' },
		tutorial: { titel: 'Tutorial', style: 'warning' },
		quest_event: { titel: 'Quest', style: 'info' },
		ambient: { titel: 'Ambient', style: 'error' }
	}
	const lootKats = ['armor', 'material', 'potion', 'special', 'weapon']
	let activeKat = $state('')
	let dialogTable = $state([])
	let masterLootTable: LootItem[] = $state([])

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

	let lastDrop: LootItem | null = $state([])
	let history: LootItem[] = $state([])

	function openLootBox() {
		const drop = generateRandomLoot()
		lastDrop = drop
		if (drop) history.unshift(drop)
		showModal = true
	}

	const checkEngines = () => {
		console.log('checking engine')

		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				if (Math.random() > 0.9) {
					reject(new Error('Engine check failed'))
				} else {
					console.log('Engine check completed')
					resolve()
				}
			}, 400)
		})
	}

	const init = async () => {
		try {
			const prelaunchChecks = [
				fetchData('/data/lootTable.json'),
				fetchData('/data/dialoge.json'),
				checkEngines()
			]

			const [loots, dialoge, engine] = await Promise.all(prelaunchChecks)
			console.log('All systems go, ready to launch: 🚀')
			masterLootTable = loots
			dialogTable = groupBy(dialoge, 'type')
			console.log({ loots, dialoge })
		} catch (e) {
			console.error('Aborting launch: 🛑')
			throw new Error('Engine Check failed!', e)
		}
	}
</script>

{#await init() then value}
	<section class="page-layer nwp center">
		<div class="grid gap-4 md:grid-cols-[2fr_1fr]">
			<div class="bg-base-200 flex flex-col items-center gap-4 p-4">
				<figure>
					<img src={MapIcon} class="w-24" alt="" />
				</figure>
				<h2 class="rgb-title text-5xl font-bold">Loot Generator</h2>

				<nav class="flex justify-center gap-2 py-4">
					<button class="btn btn-info btn-lg btn-wide" on:click={openLootBox}
						>Loot öffnen</button>
				</nav>

				{#if history.length > 0}
					<div class="log self-stretch">
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

				<nav class="mt-auto grid grid-cols-5 gap-2">
					{#each lootKats as kat, i}
						<span
							class="bg-base-300 rounded-box border-info p-2"
							class:border={kat === activeKat}>
							<img class="h-12 w-12" src={katIcons[kat]} alt="" />
						</span>
					{/each}
				</nav>
			</div>
			<aside class="bg-base-200 flex flex-col gap-4">
				<ul class="list">
					<li class="p-4 pb-2 text-lg font-semibold tracking-wide">
						Dialog Texte
					</li>
					{#each Object.keys(dialogTable) as slug}
						<li class="list-row">
							<span></span>
							<span class="capitalize">{slug.replace('_', ' ')}</span>
						</li>
					{/each}
				</ul>
			</aside>
		</div>
	</section>
{:catch error}
	<section class="page-layer nwp bg-error text-error-content center">
		<article class="text-4xl">
			<h1>Error</h1>
		</article>
	</section>
{/await}

<Modal
	bind:showModal
	onClose={() => {
		if (lastDrop?.category) activeKat = lastDrop.category
	}}>
	{#snippet header()}
		<h3 class="text-lg font-bold">
			{#if lastDrop}
				<span style="color: {rarityColors[lastDrop.rarity]}">
					Du hast <strong>{lastDrop.name}</strong> gefunden!
				</span>
			{:else}
				<span>Info</span>
			{/if}
		</h3>

		{#if lastDrop}
			<div style="color: {rarityColors[lastDrop.rarity]}">
				({lastDrop.rarity}, {lastDrop.category})
			</div>
		{/if}
	{/snippet}
</Modal>
