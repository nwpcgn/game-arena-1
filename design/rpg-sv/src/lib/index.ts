// Reexport your entry components here
export { default as Sprite } from './icons/index.svelte'
export { dungeon } from './dungeon/generator.svelte.ts'
export const getTile = (m: Array, x: Number, y: Number) => {
	const item: Number = m[y][x]
	if (item) {
		return item
	}
}
export const checkCollide = (
	x1: Number,
	y1: Number,
	x2: Number,
	y2: Number
) => {
	if (x1 == x2 && y1 == y2) return true
	return false
}
export { default as groupArray } from './utils/groupArray.js'
export { default as distance } from './utils/distance.js'
