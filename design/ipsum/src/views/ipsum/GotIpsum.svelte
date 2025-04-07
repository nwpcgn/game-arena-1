<script lang="ts">
	let typeToggle = $state('sentences')
	let languageToggle = $state('commonTongue')
	let count = $state(5)
	let output = $state('')
	function generateIpsum() {
		let generatedIpsum = []
		let quotes = Number(count)
		let thronesIpsumToggles = thronesIpsum[languageToggle][typeToggle]
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

	generateIpsum()
</script>
