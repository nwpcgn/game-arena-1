class DungeonGenerator {
	constructor(config = {}) {
		this.MR = []
		this.ROWS = config.rows || 31
		this.COLS = config.cols || 51
		this.MAXSIZE = config.maxRoomSize || 7
		this.MINSIZE = config.minRoomSize || 3
		this.BORDER = config.padding || 2
		this.ATTEMPTS = config.maxAttempts || 500
		this.ROOMS = config.rooms || 15
		this.WALL = 'W'
		this.EMPTY = 'E'
		this.floorMap = Array.from({ length: this.ROWS }, () =>
			Array.from({ length: this.COLS }, () => this.WALL)
		)
	}

	generate() {
		const roomsToLink = []
		const roomsLinked = []
		let attempts = 0
		let roomCount = 0

		while (attempts < this.ATTEMPTS && roomCount < this.ROOMS) {
			const newRoom = this.addRoom()
			if (newRoom) {
				roomsToLink.push(newRoom)
				roomCount++
			}
			attempts++
		}

		const distance = (a, b) =>
			Math.sqrt((b.row - a.row) ** 2 + (b.col - a.col) ** 2)

		roomsLinked.push(roomsToLink.pop())
		while (roomsToLink.length) {
			const r1 = roomsLinked[roomsLinked.length - 1]
			const r2 = roomsToLink
				.sort((a, b) => distance(r1, b) - distance(r1, a))
				.pop()

			this.linkRooms(r1, r2)
			roomsLinked.push(r2)
		}

		return this.floorMap.map((row) =>
			row.map((cell) => ({
				tile: cell === this.WALL ? 1 : 0
			}))
		)
	}

	getRooms() {
		// console.log({mr: this.MR});
		return this.MR
	}

	isNotOverlapping(room) {
		for (let i = room.row - 1; i < room.row + room.h + 1; i++) {
			for (let j = room.col - 1; j < room.col + room.w + 1; j++) {
				if (this.floorMap[i][j] !== this.WALL) {
					return false
				}
			}
		}
		return true
	}

	linkStraightH(r1, r2) {
		const inc = r1.col < r2.col ? 1 : -1
		for (let i = r1.col; i !== r2.col; i += inc) {
			this.floorMap[r1.row][i] = this.EMPTY
		}
	}

	linkStraightV(r1, r2) {
		const inc = r1.row < r2.row ? 1 : -1
		for (let i = r1.row; i !== r2.row; i += inc) {
			this.floorMap[i][r1.col] = this.EMPTY
		}
	}

	link2Steps(r1, r2) {
		const flipCoin = Math.floor(Math.random() * 2)
		if (r1.row > r2.row && r1.col > r2.col) {
			if (flipCoin) {
				for (let i = r1.row - 1; i >= r2.row + r2.h - 1; i--)
					this.floorMap[i][r1.col] = this.EMPTY
				for (let i = r1.col - 1; i >= r2.col + r2.w; i--)
					this.floorMap[r2.row + r2.h - 1][i] = this.EMPTY
			} else {
				for (let i = r1.col - 1; i >= r2.col + r2.w - 1; i--)
					this.floorMap[r1.row][i] = this.EMPTY
				for (let i = r1.row - 1; i >= r2.row + r2.h; i--)
					this.floorMap[i][r2.col + r2.w - 1] = this.EMPTY
			}
		} else if (r1.row > r2.row && r1.col < r2.col) {
			if (flipCoin) {
				for (let i = r1.row - 1; i >= r2.row + r2.h - 1; i--)
					this.floorMap[i][r1.col + r1.w - 1] = this.EMPTY
				for (let i = r1.col + r1.w; i < r2.col; i++)
					this.floorMap[r2.row + r2.h - 1][i] = this.EMPTY
			} else {
				for (let i = r1.col + r1.w; i <= r2.col; i++)
					this.floorMap[r1.row][i] = this.EMPTY
				for (let i = r1.row - 1; i >= r2.row + r2.h; i--)
					this.floorMap[i][r2.col] = this.EMPTY
			}
		} else {
			return false
		}
		return true
	}

	linkRooms(r1, r2) {
		if (r1.row >= r2.row && r1.row < r2.row + r2.h) {
			this.linkStraightH(r1, r2)
		} else if (r2.row >= r1.row && r2.row < r1.row + r1.h) {
			this.linkStraightH(r2, r1)
		} else if (r1.col >= r2.col && r1.col < r2.col + r2.w) {
			this.linkStraightV(r1, r2)
		} else if (r2.col >= r1.col && r2.col < r1.col + r1.w) {
			this.linkStraightV(r2, r1)
		} else {
			if (!this.link2Steps(r1, r2)) this.link2Steps(r2, r1)
		}
	}

	randomEvenOdd(min, max) {
		if (max === min) return max
		return min + Math.floor(Math.random() * Math.floor((max - min) / 2 + 1)) * 2
	}

	addRoom() {
		const h = this.randomEvenOdd(this.MINSIZE, this.MAXSIZE)
		const w = this.randomEvenOdd(this.MINSIZE, this.MAXSIZE)
		const room = {
			h,
			w,
			row: this.randomEvenOdd(0, this.ROWS - h - 2 * this.BORDER) + this.BORDER,
			col: this.randomEvenOdd(0, this.COLS - w - 2 * this.BORDER) + this.BORDER
		}

		if (this.isNotOverlapping(room)) {
			for (let i = room.row; i < room.row + room.h; i++) {
				for (let j = room.col; j < room.col + room.w; j++) {
					this.floorMap[i][j] = this.EMPTY
				}
			}

			this.MR.push(room)
			return room
		}
		return null
	}
}

export default DungeonGenerator

/* -------------------------------------------------------------------------- */
/*                                    Usage                                   */
/* -------------------------------------------------------------------------- */

//   const generator = new DungeonGenerator({
//     rows: 31,
//     cols: 51,
//     rooms: 20
//   });
//   const dungeon = generator.generate();
//   console.log(dungeon);

/* -------------------------------------------------------------------------- */
/*                                 Stylesheet                                 */
/* -------------------------------------------------------------------------- */

/* :root {
	--ro-width: 20px;
	--ro-height: 20px;
	--ro-gap: 1px;
	--ro-cols: 30;
	--ro-rows: 30;
  }
  
  .roguelike-grid {
	display: grid;
	grid-template-columns: repeat(var(--ro-cols), minmax(0, var(--ro-width)));
	grid-template-rows: repeat(var(--ro-rows), minmax(0, var(--ro-height)));
	gap: var(--ro-gap);
	padding: var(--ro-gap);
	position: relative;
  }
  .roguelike-grid > * {
	display: grid;
	grid-template: 1/1;
	aspect-ratio: 1/1;
	position: relative;
	overflow: hidden;
  }
  .roguelike-grid > * > * {
	grid-row: 1;
	grid-column: 1;
	display: grid;
	place-content: center;
	overflow: hidden;
  }
  
  .tile-0 {
	--tile-color: #cbd5e1;
	background-color: var(--tile-color);
	color: var(--tile-color);
  }
  
  .tile-1 {
	--tile-color: #0069a8;
	background-color: var(--tile-color);
	color: var(--tile-color);
  }
  
  .tile-3 {
	--tile-color: #1e293b;
	background-color: var(--tile-color);
	color: var(--tile-color);
  } */
