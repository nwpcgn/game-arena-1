<script lang="ts">
const game = $state({
		languages: ['commonTongue', 'highValyrian', 'dothraki'],
		types: ['sentences', 'words'],
		data: {
			commonTongue: {
				sentences: [
					'Winter is coming.',
					'A Lannister always pays his debts.',
					'All men must die.',
					'When you play the game of thrones, you win or you die.',
					'You know nothing, Jon Snow.',
					'Unbowed, Unbent, Unbroken.',
					'The night is dark and full of terrors.',
					"It's ten thousand miles between Kings landing and the wall.",
					'It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters.',
					"Bastards are born of passion, aren't they? We don't despise them in Dorne.",
					'The War of the 5 kings.',
					'Pay the iron price.',
					'What is dead may never die.',
					"Forgive my manners. I don't see many ladies these days. Lucky for the ladies.",
					'A good act does not wash out the bad, nor a bad act the good. Each should have its own reward.',
					'The bear and the maiden fair.',
					"I pledge my life and honor to the Night's Watch, for this night and all the nights to come.",
					'The rains of castamere.',
					'I would like a trial by combat.',
					'More pigeon pie, please.',
					'Never Resting.',
					'As High as Honor.',
					'Our Sun Shines Bright.',
					'The battle of the redgrass field.',
					'Dunc the Lunk, thick as a castle wall.',
					'The Knight of Lemonwood.',
					'The tourney of Ashford Meadows.',
					'A forked purple lightning bolt, on black field speckled with four-pointed stars.',
					'The North remembers.',
					'King in the North.',
					'The Dothraki do things in their own time, for their own reasons.',
					'The wolf and the lion.',
					'Fire and blood.',
					'House Tarly of Horn Hill',
					'The winds of Winter.',
					'A dream of Spring.',
					'Words are like wind.',
					'And now his watch is ended.',
					'May the Father judge him justly.',
					"Can a man still be brave if he's afraid? That is the only time a man can be brave."
				],
				words: [
					'Stark',
					'bastard',
					'of',
					'Winterfell',
					'Dorne',
					'kingsblood',
					'the',
					'oath',
					'in',
					'Karstark',
					'riverlands',
					'Lannister',
					'duel',
					'Tarly',
					'tourney',
					'Barratheon',
					'Tully',
					'Littlefinger',
					'Direwolf',
					'Dragon',
					'Renly',
					'Stannis',
					'white walkers',
					'north',
					'south',
					'warden',
					'of',
					'Nightswatch',
					'Melisandre',
					'giantsblood',
					'raven',
					'maester',
					'Kingslanding',
					'Casterly rock',
					'Wildlings'
				]
			},
			highValyrian: {
				sentences: [
					'Valar morghulis.',
					'Valor dohaeris.',
					'Skoriot nuhyz zaldrizesse ilzi?',
					'Nuhor lir gurenna.',
					'Tubi daor.',
					'Skoros morghot vestri?',
					'Vilibazmosa iderenni emilun.',
					'Toli rhuqo lotinti, kostilus.',
					'Bantis zobrie issa se ossyngnoti ledys.',
					'SkorÄ« demalyti tymptir tymis, erinis ia morghulis.',
					'Daoruni gimi, Ionos Sonaro.',
					'Sikudi nopazmi!',
					'Avy jorraelan.',
					'Ao ynoma diniluks?',
					'Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon.',
					'Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon.',
					'Hen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson.'
				],
				words: [
					'avy',
					'hen',
					'vilibazmosa',
					'iderenni',
					'emilun',
					'toli',
					'rhuqo',
					'lotinti',
					'kostilus',
					'syndrorro',
					'ono',
					'nuqir',
					'morghot',
					'glaeson',
					'zyh',
					'aeksio',
					'se',
					'lys',
					'sikagon',
					'valarbb',
					'kessa',
					'daor',
					'perzys',
					'Ao',
					'ynoma',
					'diniluks',
					'skori',
					'demalyti',
					'tymptir',
					'tymis',
					'erinis',
					'ia',
					'morghulis'
				]
			},
			dothraki: {
				sentences: [
					'Khal ahhas arakh.',
					"Jin ave sekke verven anni m'orvikoon.",
					"Nevakhi vekha ha maan: Rekke, m'aresakea norethi fitte.",
					'San athchomari yeraan.',
					'Hash yer dothrae chek asshekh?',
					'Anha dothrak chek asshekh.',
					'Fini hazi?',
					'Athdavrazar!',
					'Hash anha atihak yera save?',
					'Es havazhaan.',
					'Ki fin yeni?',
					'Yer affesi anni.',
					'Ifas maisi yeri.',
					'Ezas eshna gech ahilee!',
					'Shekh ma shieraki anni.',
					'Jalan atthirari anni.',
					'Anha zhilak yera norethaan.',
					'Yer zheanae sekke.'
				],
				words: [
					'rakh',
					'haj',
					'alegra',
					'ivezh',
					'jin',
					'arakh',
					'rek',
					'hrakkares',
					"m'athchomaroon",
					"m'ath",
					'athchoma',
					'chomakea',
					'aena shekhikhi',
					'fonas chek',
					'hajas',
					'dothras',
					'chek'
				]
			}
		}
	})
	let actType = $state(game.types[0])
	let actLang = $state(game.languages[0])
	let actCount = $state(5)
</script>

{#snippet rowTemp()}
	<nav><span></span></nav>
{/snippet}

<div class="grid h-full w-full grid-cols-[1fr_auto] overflow-hidden">
	<div class="bg-base-100 mt-20 shadow">
		<section class="generator-wrapp">
			<nav>
				<span>


					
					{#each game.types as item}
						<label class="btn">
							<input
								type="radio"
								value={item}
								class="sr-only"
								bind:group={actType} />
							<span>{item}</span>
						</label>


					{/each}
				</span>
			</nav>

			<nav>
				<span>
					<input type="number" class="input w-20 font-bold" bind:value={actCount} />
				</span>
			</nav>

			<nav>
				<span>
					<button class="btn">Genrate</button>
				</span>
			</nav>

			<nav>
				<span>
					{#each game.languages as item}

						<label class="btn">
							<input
								class="sr-only"
								type="radio"
								value={item}
								bind:group={actLang} />
							<span class:opacity-20={item === actLang}>{item}</span>
						</label>
						
					{/each}
				</span>
			</nav>

			<nav>
				<span>
					<textarea class="textarea w-full"></textarea>
				</span>
			</nav>
		</section>
	</div>

	<div class="bg-base-200 w-[350px]"></div>
</div>

{#snippet rowT(payload)}
	<div class="bg-base-300 rounded-box flex gap-2">
		<input type="number" class="input input-lg flex-1" />
	</div>
{/snippet}
