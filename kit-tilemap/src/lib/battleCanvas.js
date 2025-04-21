// viewport:
class Viewport {
	constructor(x, y, w, h) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}
	center() {
		let move_x = 0
		let move_y = 0

		let center_x = player.pos.x + config.size.char / 2
		let center_y = player.pos.y + config.size.char / 2

		for (let key in keys) {
			if (keys[key].a) {
				if (keys[key].x != 0) {
					move_x = keys[key].x
				}

				if (keys[key].y != 0) {
					move_y = keys[key].y
				}
			}
		}

		player.move(move_x, move_y)
		viewport.scroll(center_x, center_y)
	}
	scroll(x, y) {
		this.x = x - this.w / 2
		this.y = y - this.h / 2
	}
}

class Player {
	constructor(tile_x, tile_y) {
		this.timer = setInterval('player.frame()', 125)
		this.frames = [
			0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.48, 0.46, 0.44, 0.42, 0.4
		]

		this.sprite = new Image()
		this.sprite.src = 'assets/img/char/hero.png'

		this.movement = {
			moving: false,
			key: 40,
			frame: 1
		}
		this.pos = {
			x: config.size.tile * tile_x,
			y: config.size.tile * tile_y
		}
		this.tile = {
			x: tile_x,
			y: tile_y
		}
		this.torch = {
			lit: false,
			frame: 0
		}
	}
	draw() {
		let frame = player.movement.moving
			? keys[player.movement.key].f[player.movement.frame]
			: keys[player.movement.key].f[1]
		let pos_x = Math.round(
			player.pos.x - viewport.x + config.win.width / 2 - viewport.w / 2
		)
		let pos_y = Math.round(
			player.pos.y - viewport.y + config.win.height / 2 - viewport.h / 2
		)

		this.light(pos_x, pos_y)
		this.torch_func(pos_x, pos_y)

		context.drawImage(
			this.sprite,
			frame * config.size.char,
			0,
			config.size.char,
			config.size.char,
			pos_x,
			pos_y,
			config.size.char,
			config.size.char
		)
	}
	light(pos_x, pos_y) {
		let light_x = pos_x + config.size.tile / 2
		let light_y = pos_y + config.size.tile / 2

		let radius = 100
		let radialGradient = context.createRadialGradient(
			light_x,
			light_y,
			0,
			light_x,
			light_y,
			radius
		)

		radialGradient.addColorStop(0, 'rgba(238, 229, 171, 0.325)')
		radialGradient.addColorStop(1, 'rgba(238, 229, 171, 0)')

		context.fillStyle = radialGradient
		context.arc(light_x, light_y, radius, 0, Math.PI * 2)
		context.fill()
	}
	torch_func(pos_x, pos_y) {
		if (this.torch.lit) {
			for (let y = 0; y < config.tiles.y; y++) {
				for (let x = 0; x < config.tiles.x; x++) {
					let distance = Math.sqrt(
						Math.pow(x - config.center.x, 2) + Math.pow(y - config.center.y, 2)
					)
					let opacity = distance / 4 - this.frames[this.torch.frame]

					context.fillStyle = 'rgba(0, 0, 0, ' + opacity + ')'
					context.fillRect(
						x * config.size.tile - config.size.tile / 2,
						y * config.size.tile - config.size.tile / 2,
						config.size.tile,
						config.size.tile
					)
				}
			}
		}
	}
	frame() {
		this.movement.frame++

		if (this.movement.frame == 4) {
			this.movement.frame = 0
		}

		this.torch.frame++

		if (this.torch.frame == this.frames.length) {
			this.torch.frame = 0
		}

		player.movement.frame = this.movement.frame
		player.torch = this.torch
	}
	move(x, y) {
		let pos = {
			x: Math.ceil(this.pos.x / config.size.tile),
			y: Math.ceil(this.pos.y / config.size.tile)
		}

		let new_pos = {
			x: Math.ceil((this.pos.x + x) / config.size.tile),
			y: Math.ceil((this.pos.y + y) / config.size.tile)
		}

		for (let i = 0; i <= 1; i++) {
			let tile =
				(i == 0
					? map.data.layout[pos.y][new_pos.x]
					: map.data.layout[new_pos.y][pos.x]) - 1
			let collision = map.data.assets[tile].collision

			if (!collision) {
				if (i == 0) {
					this.pos.x += x
					this.tile.x = new_pos.x
				} else {
					this.pos.y += y
					this.tile.y = new_pos.y
				}
			}
		}

		player = this

		Log('coords', 'Coords: ' + this.tile.x + ', ' + this.tile.y)
	}
}

class Map {
	constructor(title) {
		this.data = {}
		this.tiles = []
		this.timer = setInterval('map.frame()', 750)

		this.load(title)
	}
	load(title) {
		LoadURL(
			'assets/json/' + title.toString().toLowerCase() + '.json',
			function (result) {
				map.data = JSON.parse(result)
				map.data.frame = 0

				let init = false
				let loaded = 0

				for (let i = 0; i < map.data.assets.length; i++) {
					map.tiles.push(new Image())
					map.tiles[i].src =
						'assets/img/tile/' +
						map.data.assets[i].file_name +
						'.png?v=' +
						new Date().getTime()

					map.tiles[i].onload = function () {
						loaded++

						if (!init && loaded == map.data.assets.length) {
							init = true

							Loop()
						}
					}
				}
			}
		)
	}
	draw() {
		let x_min = Math.floor(viewport.x / config.size.tile)
		let y_min = Math.floor(viewport.y / config.size.tile)
		let x_max = Math.ceil((viewport.x + viewport.w) / config.size.tile)
		let y_max = Math.ceil((viewport.y + viewport.h) / config.size.tile)

		if (x_min < 0) {
			x_min = 0
		}
		if (y_min < 0) {
			y_min = 0
		}
		if (x_max > map.width) {
			x_max = map.width
		}
		if (y_max > map.height) {
			y_max = map.height
		}

		for (let y = y_min; y < y_max; y++) {
			for (let x = x_min; x < x_max; x++) {
				let value = this.data.layout[y][x] - 1
				let tile_x = Math.floor(
					x * config.size.tile -
						viewport.x +
						config.win.width / 2 -
						viewport.w / 2
				)
				let tile_y = Math.floor(
					y * config.size.tile -
						viewport.y +
						config.win.height / 2 -
						viewport.h / 2
				)

				if (value > -1) {
					let frame = this.data.frame

					if (frame > this.data.assets[value].frames) {
						frame = 0
					}

					context.drawImage(
						map.tiles[value],
						frame * config.size.tile,
						0,
						config.size.tile,
						config.size.tile,
						tile_x,
						tile_y,
						config.size.tile,
						config.size.tile
					)
				}
			}
		}
	}
	frame() {
		this.data.frame = this.data.frame == 0 ? 1 : 0
	}
}
