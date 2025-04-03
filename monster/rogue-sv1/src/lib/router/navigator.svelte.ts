export class Navigation {
	route = $state('')
	params = $state({})

	set path(str = '') {
		this.route = str
	}
	get path() {
		return this.route
	}

	update({ path, queryParams }) {
		this.route = path
		if (queryParams) this.params = queryParams
	}
}

export let router = new Navigation()
