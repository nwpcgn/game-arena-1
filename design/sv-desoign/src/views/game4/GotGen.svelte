<script lang="ts">

	let quoteCount = $state()
	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let ipsumTypes = 

	const thronesIpsum = {
		"commonTongue": {
			"sentences": [
				"Winter is coming.",
				"A Lannister always pays his debts.",
				"All men must die.",
				"When you play the game of thrones, you win or you die.",
				"You know nothing, Jon Snow.",
				"Unbowed, Unbent, Unbroken.",
				"The night is dark and full of terrors.",
				"It's ten thousand miles between Kings landing and the wall.",
				"It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters.",
				"Bastards are born of passion, aren't they? We don't despise them in Dorne.",
				"The War of the 5 kings.",
				"Pay the iron price.",
				"What is dead may never die.",
				"Forgive my manners. I don't see many ladies these days. Lucky for the ladies.",
				"A good act does not wash out the bad, nor a bad act the good. Each should have its own reward.",
				"The bear and the maiden fair.",
				"I pledge my life and honor to the Night's Watch, for this night and all the nights to come.",
				"The rains of castamere.",
				"I would like a trial by combat.",
				"More pigeon pie, please.",
				"Never Resting.",
				"As High as Honor.",
				"Our Sun Shines Bright.",
				"The battle of the redgrass field.",
				"Dunc the Lunk, thick as a castle wall.",
				"The Knight of Lemonwood.",
				"The tourney of Ashford Meadows.",
				"A forked purple lightning bolt, on black field speckled with four-pointed stars.",
				"The North remembers.",
				"King in the North.",
				"The Dothraki do things in their own time, for their own reasons.",
				"The wolf and the lion.",
				"Fire and blood.",
				"House Tarly of Horn Hill",
				"The winds of Winter.",
				"A dream of Spring.",
				"Words are like wind.",
				"And now his watch is ended.",
				"May the Father judge him justly.",
				"Can a man still be brave if he's afraid? That is the only time a man can be brave."
			],
			"words": [
				"Stark",
				"bastard",
				"of",
				"Winterfell",
				"Dorne",
				"kingsblood",
				"the",
				"oath",
				"in",
				"Karstark",
				"riverlands",
				"Lannister",
				"duel",
				"Tarly",
				"tourney",
				"Barratheon",
				"Tully",
				"Littlefinger",
				"Direwolf",
				"Dragon",
				"Renly",
				"Stannis",
				"white walkers",
				"north",
				"south",
				"warden",
				"of",
				"Nightswatch",
				"Melisandre",
				"giantsblood",
				"raven",
				"maester",
				"Kingslanding",
				"Casterly rock",
				"Wildlings"
			]
		},
		"highValyrian": {
			"sentences": [
				"Valar morghulis.",
				"Valor dohaeris.",
				"Skoriot nuhyz zaldrizesse ilzi?",
				"Nuhor lir gurenna.",
				"Tubi daor.",
				"Skoros morghot vestri?",
				"Vilibazmosa iderenni emilun.",
				"Toli rhuqo lotinti, kostilus.",
				"Bantis zobrie issa se ossyngnoti ledys.",
				"SkorÄ« demalyti tymptir tymis, erinis ia morghulis.",
				"Daoruni gimi, Ionos Sonaro.",
				"Sikudi nopazmi!",
				"Avy jorraelan.",
				"Ao ynoma diniluks?",
				"Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon.",
				"Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon.",
				"Hen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson."
			],
			"words": [
				"avy",
				"hen",
				"vilibazmosa",
				"iderenni",
				"emilun",
				"toli",
				"rhuqo",
				"lotinti",
				"kostilus",
				"syndrorro",
				"ono",
				"nuqir",
				"morghot",
				"glaeson",
				"zyh",
				"aeksio",
				"se",
				"lys",
				"sikagon",
				"valarbb",
				"kessa",
				"daor",
				"perzys",
				"Ao",
				"ynoma",
				"diniluks",
				"skori",
				"demalyti",
				"tymptir",
				"tymis",
				"erinis",
				"ia",
				"morghulis"

			]
		},
		"dothraki": {
			"sentences": [
				"Khal ahhas arakh.",
				"Jin ave sekke verven anni m'orvikoon.",
				"Nevakhi vekha ha maan: Rekke, m'aresakea norethi fitte.",
				"San athchomari yeraan.",
				"Hash yer dothrae chek asshekh?",
				"Anha dothrak chek asshekh.",
				"Fini hazi?",
				"Athdavrazar!",
				"Hash anha atihak yera save?",
				"Es havazhaan.",
				"Ki fin yeni?",
				"Yer affesi anni.",
				"Ifas maisi yeri.",
				"Ezas eshna gech ahilee!",
				"Shekh ma shieraki anni.",
				"Jalan atthirari anni.",
				"Anha zhilak yera norethaan.",
				"Yer zheanae sekke."
			],
			"words": [
				"rakh",
				"haj",
				"alegra",
				"ivezh",
				"jin",
				"arakh",
				"rek",
				"hrakkares",
				"m'athchomaroon",
				"m'ath",
				"athchoma",
				"chomakea",
				"aena shekhikhi",
				"fonas chek",
				"hajas",
				"dothras",
				"chek"
			]
		}

	};


	
	let typeToggle = document.querySelector(".words-sentences-container input:checked").value;
	let languageToggle = document.querySelector(".language-container input:checked").value;

	let wordSentencesContainerInputs = document.querySelectorAll(".words-sentences-container input");
	for (let i = 0; i < wordSentencesContainerInputs.length; i++) {
		wordSentencesContainerInputs[i].addEventListener("change", function() {
			typeToggle = document.querySelector(".words-sentences-container input:checked").value;
			generateIpsum();
		});
	}

	let languageContainerInputs = document.querySelectorAll(".language-container input");
	for (let i = 0; i < languageContainerInputs.length; i++) {
		languageContainerInputs[i].addEventListener("change", function() {
			languageToggle = document.querySelector(".language-container input:checked").value;
			generateIpsum();
		});
	}

	document.getElementById("number-ipsum").addEventListener("change", generateIpsum);

	function generateIpsum() {
		let generatedIpsum = [];

		let quotes = Number(document.getElementById("number-ipsum").value);
		let thronesIpsumToggles = thronesIpsum[languageToggle][typeToggle];
		for (let i = 0; i < quotes; i++) {
			let randomNumber = Math.floor(Math.random() * thronesIpsumToggles.length);
			let thronesIpsumText = thronesIpsumToggles[randomNumber];
			generatedIpsum.push(thronesIpsumText);
		};

		let generatedString = generatedIpsum.join(" ");
		let lastCharacter = generatedString[generatedString.length - 1];
		if (lastCharacter !== "." && lastCharacter !== "!" && lastCharacter !== "?") {
			generatedString += ".";
		}
		generatedString = capitalizeFirstLetter(generatedString);
		document.getElementById("output-ipsum").innerHTML = generatedString;
	}

	generateIpsum();
	document.getElementById("refresh").addEventListener("click", generateIpsum, false);
</script>

<div class="content bg-base-200">
	<div class="wrapper flex flex-col items-center justify-center capitalize">
		<h1>Game of Thrones Ipsum</h1>
        <section class="output-ipsum">{generatedIpsum.join(' ')}</section>
		<div class="words-sentences-container">
			{#each typeArr as item}
				<label for="sentences" class="left">
					<input
						type="radio"
						id="sentences"
						name="words-sent-toggle"
						checked={item === typeSelect}
						onchange={() => {
							typeSelect = item
						}} />
					<span> {item}</span></label>
			{/each}
		</div>
		<div class="controls-container">
			<input
				type="number"
				id="number-ipsum"
				class="text-input"
				placeholder="paragraphs"
				bind:value={quoteCount} />
			<button class="generate-ipsum" onclick={generadeIpsum}
				>Generate text</button>
		</div>
		<div class="language-container">
			<input
				type="radio"
				id="commonTongue"
				name="language-toggle"
				value="commonTongue"
				checked="checked" /><label for="commonTongue">Common tongue</label>
			<input
				type="radio"
				id="highValyrian"
				name="language-toggle"
				value="highValyrian" /><label for="highValyrian">High Valyrian</label>
			<input
				type="radio"
				id="dothraki"
				name="language-toggle"
				value="dothraki" /><label for="dothraki">Dothraki</label>
		</div>

	
	</div>
</div>

<style lang="scss">
	@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:900);
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.content,
	button {
		font-family: 'Source Code Pro';
	}
	img {
		max-width: 100%;
	}
	.wrapper {
	}
	figure {
		max-width: 200px;
		margin: 0 auto;
	}
	h1 {
		margin: 40px 0;
		text-align: center;
		font-size: 2rem;
	}
	.text-input,
	button {
		padding: 1rem;
		font-size: 1rem;
		display: block;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}
	.text-input {
		border: 1px solid deeppink;
		color: deepppink;
		margin-bottom: 10px;
	}
	button {
		background-color: deeppink;
		color: #fff;
		border: none;
	}
	.controls-container {
		margin-bottom: 10px;
	}
	.language-container,
	.words-sentences-container {
		margin-bottom: 10px;
		display: inline-flex;
		justify-content: center;
	}
	input[type='radio'] {
		visibility: hidden;
		width: 0;
		&:checked + label {
			background-color: deeppink;
			color: white;
		}
	}
	label {
		font-size: 1rem;
		border: 1px solid deeppink;
		border-left: 0;
		padding: 8px;
		display: block;
		text-align: center;
		width: 150px;
		color: deeppink;
		cursor: pointer;
		&:nth-of-type(1) {
			border-radius: 10px 0 0 10px;
			border-left: 1px solid deeppink;
		}
		&:last-child {
			border-radius: 0 10px 10px 0;
		}
		@media screen and (max-width: 500px) {
			width: 100px;
			font-size: 0.9rem;
		}
	}
	.output-ipsum {
		margin-top: 30px;
		border: 1px solid deeppink;
		padding: 15px;
		line-height: 1.4;
	}
</style>
