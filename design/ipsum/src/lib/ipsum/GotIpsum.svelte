<script lang="ts">
	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}
	const config = {
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
	}
	let typeToggle = $state(config.types[0])
	let languageToggle = $state(config.languages[0])
	let count = $state(5)
	let output = $state('')
	// let selectArray = $derived(config.data[languageToggle][typeToggle])
	function generateIpsum() {
		let generatedIpsum = []

		let quotes = count
		let thronesIpsumToggles = config.data[languageToggle][typeToggle]
		for (let i = 0; i < quotes; i++) {
			let randomNumber = Math.floor(Math.random() * thronesIpsumToggles.length)
			let thronesIpsumText = thronesIpsumToggles[randomNumber]
			generatedIpsum.push(thronesIpsumText)
		}

		let generatedString = generatedIpsum.join(' ')
		let lastCharacter = generatedString[generatedString.length - 1]
		if (
			lastCharacter !== '.' &&
			lastCharacter !== '!' &&
			lastCharacter !== '?'
		) {
			generatedString += '.'
		}
		generatedString = capitalizeFirstLetter(generatedString)
		output = generatedString
	}

	$effect(() => {
		if (typeToggle && languageToggle && count) {
			// generateIpsum()
			output = ''
		}
	})

	// $inspect(selectArray)
</script>

<section class="page-layer nwp">
	<div class="h-[100px]"></div>
	<article class="content flex justify-center">
		<section class="generator-wrapp w-full">
			<article class="gen-type">
				<div class="join">
					{@render selectRow(config.types, typeItem)}
				</div>
			</article>
			<article class="gen-count">
				<input
					type="number"
					class="input input-lg bg-base-200 w-full"
					bind:value={count} />
			</article>
			<article class="gen-action">
				<button class="btn btn-lg w-full" class:btn-ghost={output} onclick={generateIpsum}>Genrate</button>
			</article>
			<article class="gen-lang">
				<div class="join">
					{@render selectRow(config.languages, langItem)}
				</div>
			</article>
			<article class="gen-out">
				<section class="bg-base-200 w-full rounded p-4">{@html output}</section>
				<!-- <textarea class="textarea bg-base-200 w-full" rows="1"></textarea> -->
			</article>
		</section>
	</article>

	<!-- <article class="content">
		{#if selectArray.length}
			<nav class="grid gap-1">
				{#each selectArray as text}
					<div>{text}</div>
				{/each}
			</nav>
		{/if}
	</article> -->
</section>

{#snippet typeItem(name)}
	<label class="btn btn-sm join-item" class:btn-neutral={name === typeToggle}>
		<input
			type="radio"
			class="sr-only"
			name="type-select"
			value={name}
			bind:group={typeToggle} />
		<span>{name}</span>
	</label>
{/snippet}
{#snippet langItem(name)}
	<label class="btn btn-sm join-item" class:btn-neutral={name === languageToggle}>
		<input
			type="radio"
			class="sr-only"
			name="language-select"
			value={name}
			bind:group={languageToggle} />
		<span>{name}</span>
	</label>
{/snippet}

{#snippet selectRow(array, temp)}
	{#each array as name}
		{@render temp(name)}
	{/each}
{/snippet}
