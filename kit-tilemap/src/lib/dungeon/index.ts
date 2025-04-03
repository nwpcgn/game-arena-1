import NewDungeon from './NewDungeon.js'
export const CONFIG = {
	width: 30,
	height: 30,
	minRoomSize: 6,
	maxRoomSize: 20
}
export const getDungeon = (obj = {}) => {
	const ops = { ...CONFIG, ...obj }
	const data = NewDungeon(ops)
	if (data) {
		return data
	}
}
