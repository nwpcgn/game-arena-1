export const gArr = (int = 1) => Array.from({ length: int }, (_, i) => 0)
export const paginate = (arr, size) =>
	arr.reduce((acc, val, i) => {
		let idx = Math.floor(i / size)
		let page = acc[idx] || (acc[idx] = [])
		page.push(val)

		return acc
	}, [])
