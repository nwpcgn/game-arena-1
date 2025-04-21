import NewDungeon from './NewDungeon.js'
import type { DungeonOps } from './DungeonOps.js'
const OP = {
	width: 36,
	height: 36,
	minRoomSize: 6,
	maxRoomSize: 20
}

class DungeonGen {
	saveArea = $state(0)
	width = $state(30)
	height = $state(30)
	minRoomSize = $state(5)
	maxRoomSize = $state(20)
	map = $state([])
	style = $derived(`--cols: ${this.width}; --rows: ${this.height};`)
	frameSize = $derived(Math.min(680, Math.floor(this.saveArea * 0.8)))

	constructor({ width, height, minRoomSize, maxRoomSize }: DungeonOps) {
		this.width = width
		this.height = height
		this.minRoomSize = minRoomSize
		this.maxRoomSize = maxRoomSize
		this.create()
	}

	create() {
		const ops: DungeonOps = {
			width: this.width,
			height: this.height,
			minRoomSize: this.minRoomSize,
			maxRoomSize: this.maxRoomSize
		}
		const data = NewDungeon(ops)
		this.map = data
	}

	set area(num = 0) {
		this.saveArea = num
	}

	get area() {
		return this.saveArea
	}
	getSettings() {
		return {
			width: this.width,
			height: this.height,
			minRoomSize: this.minRoomSize,
			maxRoomSize: this.maxRoomSize
		}
	}

	setSettings({ width, height, minRoomSize, maxRoomSize }: DungeonOps) {
		this.width = Math.max(0, width)
		this.height = Math.max(0, height)
		this.minRoomSize = Math.max(0, minRoomSize)
		this.maxRoomSize = Math.max(0, maxRoomSize)
	}
}

export let dungeon = new DungeonGen({ ...OP })
