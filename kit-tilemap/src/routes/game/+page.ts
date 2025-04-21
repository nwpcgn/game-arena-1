import maps from './maps.json'

export async function load() {
	return {
		title: 'Game',
		maps: maps
	}
}
