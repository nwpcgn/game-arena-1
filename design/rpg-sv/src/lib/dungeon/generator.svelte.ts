import NewDungeon from './NewDungeon.js'
export const defConfig = {
	width: 30,
	height: 30,
	minRoomSize: 6,
	maxRoomSize: 20
}

class DungeonGen {
	config = $state({
		width: 30,
		height: 30,
		minRoomSize: 6,
		maxRoomSize: 20
	})
	map = $state([])
	style = $derived(
		`--cols: ${this.config.width}; --rows: ${this.config.height};`
	)

	constructor(config = {}) {
		this.config = { ...defConfig, ...config }
		this.create()
	}

	create(obj = {}) {
		const ops = { ...this.config, ...obj }
		const data = NewDungeon(ops)
		if (data) {
			this.config = ops
			this.map = data
		}
	}

	updateConfig(obj = {}) {
		const ops = { ...this.config, ...obj }
		const data = NewDungeon(ops)
		if (data) {
			this.config = ops
		}
	}
}

export let dungeon = new DungeonGen()
