<script lang="ts">
	type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
	type Category = 'weapon' | 'armor' | 'potion' | 'material' | 'special'

	type LootItem = {
		name: string
		rarity: Rarity
		category: Category
		dropChance: number
	}

	const msg = {
		positive_event: [
			{
				type: 'positive_event',
				text: 'Du spürst eine warme Energie – deine Wunden heilen sich!'
			},
			{
				type: 'positive_event',
				text: 'Ein Lichtstrahl trifft dich. Du fühlst dich plötzlich stärker.'
			},
			{
				type: 'positive_event',
				text: 'Du findest einen geheimen Pfadder dir Zeit erspart.'
			},
			{
				type: 'positive_event',
				text: 'Ein freundlicher Geist überreicht dir ein Geschenk.'
			},
			{
				type: 'positive_event',
				text: 'Ein alter Zauber wurde aufgelöst – du fühlst dich erleichtert.'
			},
			{
				type: 'positive_event',
				text: 'Die Sonne bricht durch die Wolken und füllt dich mit Hoffnung.'
			},
			{
				type: 'positive_event',
				text: 'Du entdeckst eine Quelle reiner Magie – deine Kraft ist erneuert.'
			},
			{
				type: 'positive_event',
				text: 'Ein Reisender segnet dich mit Glück auf deinem Weg.'
			},
			{
				type: 'positive_event',
				text: 'Ein altes Lied erklingt – du fühlst dich inspiriert.'
			},
			{
				type: 'positive_event',
				text: 'Ein Schutzkreis schützt dich vor dem nächsten Schaden.'
			},
			{
				type: 'positive_event',
				text: 'Du wirst mit einer Vision der Zukunft erfüllt – und fühlst dich vorbereitet.'
			},
			{
				type: 'positive_event',
				text: 'Du erhältst einen geheimen Segen – deine nächste Begegnung wird einfacher.'
			},
			{
				type: 'positive_event',
				text: 'Ein Vogel bringt dir eine wertvolle Nachricht.'
			},
			{
				type: 'positive_event',
				text: 'Du findest einen alten Brief – er stärkt deinen Mut.'
			},
			{
				type: 'positive_event',
				text: 'Deine Sinne schärfen sich – du erkennst eine Gefahr im Voraus.'
			}
		],
		negative_event: [
			{
				type: 'negative_event',
				text: 'Ein plötzlicher Schatten streift dich – du verlierst Lebensenergie.'
			},
			{
				type: 'negative_event',
				text: 'Du trittst in eine Falle und verletzt dich.'
			},
			{
				type: 'negative_event',
				text: 'Ein magischer Sturm trifft dich mit voller Wucht.'
			},
			{
				type: 'negative_event',
				text: 'Deine Tasche ist beschädigt – einige Gegenstände sind verloren.'
			},
			{
				type: 'negative_event',
				text: 'Eine dunkle Präsenz raubt dir deine Kraft.'
			},
			{
				type: 'negative_event',
				text: 'Du wirst von seltsamen Stimmen heimgesucht – deine Moral sinkt.'
			},
			{
				type: 'negative_event',
				text: 'Dein Weg wird durch unheimliche Kreaturen blockiert.'
			},
			{
				type: 'negative_event',
				text: 'Ein Dieb stiehlt dir unbemerkt etwas aus deinem Inventar.'
			},
			{
				type: 'negative_event',
				text: 'Du verlierst die Orientierung in dichtem Nebel.'
			},
			{
				type: 'negative_event',
				text: 'Ein Bann lähmt dich vorübergehend.'
			},
			{
				type: 'negative_event',
				text: 'Dein Feuerholz ist nass – du kannst kein Lager machen.'
			},
			{
				type: 'negative_event',
				text: 'Ein bösartiger Blick lähmt dich mit Angst.'
			},
			{
				type: 'negative_event',
				text: 'Du stürzt in ein Erdloch und verletzt dich am Bein.'
			},
			{
				type: 'negative_event',
				text: 'Dein Amulett zerbricht – ein Teil deiner Macht geht verloren.'
			},
			{
				type: 'negative_event',
				text: 'Ein alter Fluch aktiviert sich plötzlich.'
			}
		],
		loot_found: [
			{
				type: 'loot_found',
				text: 'Du öffnest eine Truhe und findest: {item_name}!'
			},
			{
				type: 'loot_found',
				text: 'In einem Haufen Asche entdeckst du {item_name}.'
			},
			{
				type: 'loot_found',
				text: 'Ein Monster ließ etwas fallen – {item_name} gehört jetzt dir.'
			},
			{
				type: 'loot_found',
				text: 'Versteckt unter einem Stein findest du {item_name}.'
			},
			{
				type: 'loot_found',
				text: 'Du erhältst {item_name} als Belohnung für deinen Mut.'
			},
			{
				type: 'loot_found',
				text: 'Ein Lichtschein führt dich zu {item_name}.'
			},
			{
				type: 'loot_found',
				text: 'Du gräbst im Sand und findest {item_name}.'
			},
			{
				type: 'loot_found',
				text: 'Du hast {item_name} durch Zufall entdeckt!'
			},
			{
				type: 'loot_found',
				text: 'Du gewinnst {item_name} im Spiel gegen einen Händler.'
			},
			{
				type: 'loot_found',
				text: 'Ein geheimnisvoller Fremder übergibt dir {item_name}.'
			},
			{
				type: 'loot_found',
				text: '{item_name} erscheint plötzlich in deiner Tasche.'
			},
			{
				type: 'loot_found',
				text: 'Ein Rätsel wurde gelöst – als Belohnung bekommst du {item_name}.'
			},
			{
				type: 'loot_found',
				text: 'Deine Geduld zahlt sich aus – du findest {item_name}.'
			},
			{
				type: 'loot_found',
				text: 'Ein alter Baum wirft {item_name} ab.'
			},
			{
				type: 'loot_found',
				text: 'Du findest {item_name} in einer alten Höhle.'
			}
		],
		npc_dialogue: [
			{
				type: 'npc_dialogue',
				text: 'Sei vorsichtigFremder. Nicht alles ist so friedlich'
			},
			{
				type: 'npc_dialogue',
				text: 'Ich habe Geschichten gehört von einem Schatz tief im Osten.'
			},
			{
				type: 'npc_dialogue',
				text: 'Du erinnerst mich an jemanden... einen alten Helden vielleicht.'
			},
			{
				type: 'npc_dialogue',
				text: 'Meine Katze ist verschwunden. Wenn du sie findestbekommst du eine Belohnung.'
			},
			{
				type: 'npc_dialogue',
				text: 'Man sagtdie Sterne flüstern mit jenen'
			},
			{
				type: 'npc_dialogue',
				text: 'Schau dich gut um. Manchmal versteckt sich das Wertvollste direkt vor deinen Augen.'
			},
			{
				type: 'npc_dialogue',
				text: 'Die Dunkelheit wächst. Pass auf dich auf da draußen.'
			},
			{
				type: 'npc_dialogue',
				text: 'Wenn du nach Süden gehstnimm genügend Tränke mit.'
			},
			{
				type: 'npc_dialogue',
				text: 'Ich war einst Abenteurer wie du – bis ich ein Schwert im Knie hatte.'
			},
			{
				type: 'npc_dialogue',
				text: 'Hast du etwas zu handeln? Ich suche besondere Materialien.'
			},
			{
				type: 'npc_dialogue',
				text: 'Hier war früher eine große Stadt... jetzt ist nur noch Stille.'
			},
			{
				type: 'npc_dialogue',
				text: 'Suchst du Arbeit? Ich habe da etwas für dich... wenn du mutig bist.'
			},
			{
				type: 'npc_dialogue',
				text: 'Hörst du das? Etwas stimmt nicht mit diesem Ort.'
			},
			{
				type: 'npc_dialogue',
				text: 'Der Fluss spricht. Hast du es bemerkt?'
			},
			{
				type: 'npc_dialogue',
				text: 'Einmal war ich auf der anderen Seite der Berge – dort gibt es Wunder.'
			}
		],
		combat_start: [
			{
				type: 'combat_start',
				text: 'Ein Schatten bewegt sich – bereite dich auf den Kampf vor!'
			},
			{
				type: 'combat_start',
				text: 'Dein Herz schlägt schneller – ein Gegner nähert sich!'
			},
			{
				type: 'combat_start',
				text: 'Du hast den falschen Pfad gewählt!ruft dein Feind.'
			},
			{
				type: 'combat_start',
				text: 'Dein Gegner zieht seine Waffe. Keine Gnade!'
			},
			{
				type: 'combat_start',
				text: 'Du spürst feindliche Präsenz – der Kampf beginnt.'
			},
			{
				type: 'combat_start',
				text: 'Das wird dir noch leid tun!schreit dein Widersacher.'
			},
			{
				type: 'combat_start',
				text: 'Ein Geräusch hinter dir – du wirst angegriffen!'
			},
			{
				type: 'combat_start',
				text: 'Endlich ein würdiger Gegner!ruft der Feind.'
			},
			{
				type: 'combat_start',
				text: 'Der Boden zittert – etwas Großes nähert sich.'
			},
			{
				type: 'combat_start',
				text: 'Dein Instinkt war richtig – du bist nicht allein.'
			}
		],
		level_up: [
			{
				type: 'level_up',
				text: 'Du fühlst dich stärker – du bist aufgestiegen!'
			},
			{
				type: 'level_up',
				text: 'Ein neues Level! Neue Kräfte erwachen in dir.'
			},
			{
				type: 'level_up',
				text: 'Dein Training zahlt sich aus – du bist gewachsen.'
			},
			{
				type: 'level_up',
				text: 'Du meisterst eine neue Fähigkeit.'
			},
			{
				type: 'level_up',
				text: 'Ein Licht durchdringt dich – du hast ein Level erreicht.'
			},
			{
				type: 'level_up',
				text: 'Dein Körper pulsiert vor Energie – Level Up!'
			},
			{
				type: 'level_up',
				text: 'Erfahrung macht dich weiser – du bist bereit für mehr.'
			},
			{
				type: 'level_up',
				text: 'Die Luft um dich vibriert – du entwickelst dich weiter.'
			},
			{
				type: 'level_up',
				text: 'Du bist nun mächtiger als je zuvor.'
			},
			{
				type: 'level_up',
				text: 'Gut gemacht!hörst du eine Stimme in deinem Inneren.'
			}
		],
		tutorial: [
			{
				type: 'tutorial',
				text: 'Drücke [E]um mit Objekten zu interagieren.'
			},
			{
				type: 'tutorial',
				text: 'Öffne dein Inventar mit [I]um Gegenstände zu verwenden.'
			},
			{
				type: 'tutorial',
				text: 'Speichere regelmäßig – du weißt niewas kommt.'
			},
			{
				type: 'tutorial',
				text: 'Tränke kannst du in deinem Inventar anwenden.'
			},
			{
				type: 'tutorial',
				text: 'Kämpfe mit [Linksklick] und blocke mit [Rechtsklick].'
			},
			{
				type: 'tutorial',
				text: 'Du kannst schleichenum unbemerkt zu bleiben.'
			},
			{
				type: 'tutorial',
				text: 'Halte [Shift]um zu sprinten – aber sei sparsam mit deiner Ausdauer.'
			},
			{
				type: 'tutorial',
				text: 'Schwache Gegner erkennst du an ihrer Haltung.'
			},
			{
				type: 'tutorial',
				text: 'In dunklen Gebieten hilft dir eine Fackel.'
			},
			{
				type: 'tutorial',
				text: 'Kartenfragmente helfen dir beim Erkunden.'
			}
		],
		quest_event: [
			{
				type: 'quest_event',
				text: 'Du hast einen neuen Auftrag erhalten.'
			},
			{
				type: 'quest_event',
				text: 'Die Aufgabe ist abgeschlossen – kehre zum Auftraggeber zurück.'
			},
			{
				type: 'quest_event',
				text: 'Ein Tagebucheintrag wurde aktualisiert.'
			},
			{
				type: 'quest_event',
				text: 'Dein Fortschritt wurde gespeichert.'
			},
			{
				type: 'quest_event',
				text: 'Du findest einen Hinweis auf das nächste Ziel.'
			},
			{
				type: 'quest_event',
				text: 'Etwas stimmt nicht... die Quest entwickelt sich anders.'
			},
			{
				type: 'quest_event',
				text: 'Ein neuer Ort wurde auf deiner Karte markiert.'
			},
			{
				type: 'quest_event',
				text: 'Ein alter Bekannter hat dir eine neue Mission gegeben.'
			},
			{
				type: 'quest_event',
				text: 'Du brauchst ein besonderes Item für diese Aufgabe.'
			},
			{
				type: 'quest_event',
				text: 'Die Belohnung für diese Aufgabe wartet auf dich.'
			}
		],
		ambient: [
			{
				type: 'ambient',
				text: 'Die Bäume flüstern im Wind – etwas Altes lebt noch hier.'
			},
			{
				type: 'ambient',
				text: 'Ein ferner Donner hallt durch die Berge.'
			},
			{
				type: 'ambient',
				text: 'Im Dunst der Ebene liegt ein Geruch von Asche.'
			},
			{
				type: 'ambient',
				text: 'Ein Stern fällt langsam vom Himmel – leuchtend wie ein Traum.'
			},
			{
				type: 'ambient',
				text: 'Das Wasser spiegelt eine andere Welt.'
			},
			{
				type: 'ambient',
				text: 'Ein leises Flüstern begleitet dich durch die Höhle.'
			},
			{
				type: 'ambient',
				text: 'Der Wind trägt vergessene Lieder zu dir.'
			},
			{
				type: 'ambient',
				text: 'Dein Schatten scheint sich anders zu bewegen...'
			},
			{
				type: 'ambient',
				text: 'Der Boden knirscht – war da etwas unter der Erde?'
			},
			{
				type: 'ambient',
				text: 'Nebel zieht über das Land – die Sicht ist eingeschränkt.'
			}
		]
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

	let lastDrop: LootItem | null = $state([])
	let history: LootItem[] = $state([])

	function openLootBox() {
		const drop = generateRandomLoot()
		lastDrop = drop
		if (drop) history.unshift(drop)
	}
</script>

<section class="page-layer nwp center">
	<div class="bg-base-200 flex flex-col gap-4">
		<h2 class="rgb-title text-5xl font-bold">Loot Generator</h2>

		<nav class="flex justify-center gap-2 py-4">
			<button class="btn btn-info btn-lg btn-wide" on:click={openLootBox}
				>Loot öffnen</button>
		</nav>

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
