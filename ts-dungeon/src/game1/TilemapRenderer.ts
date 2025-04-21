export class TilemapRenderer {
	private ctx: CanvasRenderingContext2D
	private tilemap: any
	private tilesetImage: HTMLImageElement
	private tileSize: number = 16
	private tileAnimations: Map<
		number,
		{
			frames: { tileid: number; duration: number }[]
			timer: number
			index: number
		}
	> = new Map()

	private camX: number = 0
	private camY: number = 0
	private keys: Set<string> = new Set()

	private playerX: number = 128
	private playerY: number = 128
	private playerSpeed: number = 0.1

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx
		this.initKeyboard()
	}

	async load(jsonUrl: string) {
		const res = await fetch(jsonUrl)
		this.tilemap = await res.json()
		this.tileSize = this.tilemap.tilewidth

		const tileset = this.tilemap.tilesets[0]
		this.tilesetImage = new Image()
		this.tilesetImage.src = tileset.image
		await new Promise((resolve) => (this.tilesetImage.onload = resolve))

		if (tileset.tiles) {
			for (const tile of tileset.tiles) {
				if (tile.animation) {
					this.tileAnimations.set(tile.id + tileset.firstgid, {
						frames: tile.animation,
						timer: 0,
						index: 0
					})
				}
			}
		}
	}

	update(delta: number) {
		this.updateAnimations(delta)
		this.updateCamera(delta)
		this.updatePlayer(delta)
		this.checkTriggers()
	}

	drawAllVisibleLayers() {
		const layers = this.tilemap.layers
		for (const layer of layers) {
			if (layer.type === 'tilelayer' && layer.visible) {
				this.drawTileLayer(layer)
			}
		}
		this.drawPlayer()
	}

	drawTileLayer(layer: any) {
		const { width, height, data } = layer
		const tileset = this.tilemap.tilesets[0]
		const columns = tileset.columns

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				let index = y * width + x
				let gid = data[index]
				if (gid === 0) continue

				const anim = this.tileAnimations.get(gid)
				if (anim) {
					gid = anim.frames[anim.index].tileid + tileset.firstgid
				}

				const tileIndex = gid - tileset.firstgid
				const sx = (tileIndex % columns) * this.tileSize
				const sy = Math.floor(tileIndex / columns) * this.tileSize

				this.ctx.drawImage(
					this.tilesetImage,
					sx,
					sy,
					this.tileSize,
					this.tileSize,
					x * this.tileSize - this.camX,
					y * this.tileSize - this.camY,
					this.tileSize,
					this.tileSize
				)
			}
		}
	}

	drawPlayer() {
		this.ctx.fillStyle = 'red'
		this.ctx.fillRect(
			this.playerX - this.camX,
			this.playerY - this.camY,
			this.tileSize,
			this.tileSize
		)
	}

	updatePlayer(delta: number) {
		const speed = this.playerSpeed * delta
		let dx = 0
		let dy = 0
		if (this.keys.has('a')) dx -= speed
		if (this.keys.has('d')) dx += speed
		if (this.keys.has('w')) dy -= speed
		if (this.keys.has('s')) dy += speed

		const newX = this.playerX + dx
		const newY = this.playerY + dy

		if (!this.isBlocked(newX, newY)) {
			this.playerX = newX
			this.playerY = newY
		}
	}

	updateAnimations(delta: number) {
		for (const [gid, anim] of this.tileAnimations.entries()) {
			anim.timer += delta
			const frame = anim.frames[anim.index]
			if (anim.timer > frame.duration) {
				anim.timer = 0
				anim.index = (anim.index + 1) % anim.frames.length
			}
		}
	}

	isBlocked(x: number, y: number): boolean {
		const collisions = this.getObjectsAt(x, y, 'collision')
		return collisions.length > 0
	}

	getObjectsFromLayer(name: string): any[] {
		const layer = this.tilemap.layers.find(
			(l: any) => l.type === 'objectgroup' && l.name === name
		)
		return layer?.objects ?? []
	}

	getObjectsAt(x: number, y: number, layerName = 'triggers'): any[] {
		const objects = this.getObjectsFromLayer(layerName)
		return objects.filter(
			(obj: any) =>
				x >= obj.x &&
				y >= obj.y &&
				x < obj.x + obj.width &&
				y < obj.y + obj.height
		)
	}

	parseProperties(obj: any): Record<string, any> {
		const props: Record<string, any> = {}
		if (obj.properties) {
			for (const p of obj.properties) {
				props[p.name] = p.value
			}
		}
		return props
	}

	private initKeyboard() {
		window.addEventListener('keydown', (e) => this.keys.add(e.key))
		window.addEventListener('keyup', (e) => this.keys.delete(e.key))
	}

	private updateCamera(delta: number) {
		const speed = 0.2 * delta
		if (this.keys.has('ArrowLeft')) this.camX -= speed
		if (this.keys.has('ArrowRight')) this.camX += speed
		if (this.keys.has('ArrowUp')) this.camY -= speed
		if (this.keys.has('ArrowDown')) this.camY += speed
	}

	private checkTriggers() {
		const centerX = this.playerX
		const centerY = this.playerY
		const triggers = this.getObjectsAt(centerX, centerY)
		for (const t of triggers) {
			console.log('Trigger aktiviert:', t.name, this.parseProperties(t))
		}
	}
}
