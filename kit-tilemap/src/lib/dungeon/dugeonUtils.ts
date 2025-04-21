export interface Rooms {
	h: number
	w: number
	row: number
	col: number
}
export interface Map {
	tile: number
	id?: number | null
}



export function copyToClip(text: string = '') {
	// const text = "Example text to appear on clipboard";
	return navigator.clipboard.writeText(text).then(
		function () {
			console.log('Copying to clipboard was successful!', text.length)
			return ['Copying to clipboard was successful!', text.length]
		},
		function (err) {
			console.error('Async: Could not copy text: ', err)
			return ['Copying to clipboard was successful!', err]
		}
	)
}

export const sleep = (milliseconds: number = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))
