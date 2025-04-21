export class TilemapRenderer {
    private ctx: CanvasRenderingContext2D;
    private tilemap: any;
    private tilesetImage: HTMLImageElement;
    private tileSize: number = 16;
    private tileAnimations: Map<number, { frames: { tileid: number; duration: number }[]; timer: number; index: number }> = new Map();
  
    constructor(ctx: CanvasRenderingContext2D) {
      this.ctx = ctx;
    }
  
    async load(jsonUrl: string) {
      const res = await fetch(jsonUrl);
      this.tilemap = await res.json();
      this.tileSize = this.tilemap.tilewidth;
  
      const tileset = this.tilemap.tilesets[0];
      this.tilesetImage = new Image();
      this.tilesetImage.src = tileset.image;
      await new Promise(resolve => this.tilesetImage.onload = resolve);
  
      // Animationen vorbereiten
      if (tileset.tiles) {
        for (const tile of tileset.tiles) {
          if (tile.animation) {
            this.tileAnimations.set(tile.id + tileset.firstgid, {
              frames: tile.animation,
              timer: 0,
              index: 0,
            });
          }
        }
      }
    }
  
    drawAllVisibleLayers() {
      const layers = this.tilemap.layers;
      for (const layer of layers) {
        if (layer.type === 'tilelayer' && layer.visible) {
          this.drawTileLayer(layer);
        }
      }
    }
  
    drawTileLayer(layer: any) {
      const { width, height, data } = layer;
      const tileset = this.tilemap.tilesets[0];
      const columns = tileset.columns;
      const imageWidth = tileset.imagewidth;
  
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let index = y * width + x;
          let gid = data[index];
          if (gid === 0) continue;
  
          const anim = this.tileAnimations.get(gid);
          if (anim) {
            gid = anim.frames[anim.index].tileid + tileset.firstgid;
          }
  
          const tileIndex = gid - tileset.firstgid;
          const sx = (tileIndex % columns) * this.tileSize;
          const sy = Math.floor(tileIndex / columns) * this.tileSize;
  
          this.ctx.drawImage(
            this.tilesetImage,
            sx, sy,
            this.tileSize, this.tileSize,
            x * this.tileSize,
            y * this.tileSize,
            this.tileSize, this.tileSize
          );
        }
      }
    }
  
    updateAnimations(delta: number) {
      for (const [gid, anim] of this.tileAnimations.entries()) {
        anim.timer += delta;
        const frame = anim.frames[anim.index];
        if (anim.timer > frame.duration) {
          anim.timer = 0;
          anim.index = (anim.index + 1) % anim.frames.length;
        }
      }
    }
  
    getObjectsFromLayer(name: string): any[] {
      const layer = this.tilemap.layers.find(
        (l: any) => l.type === 'objectgroup' && l.name === name
      );
      return layer?.objects ?? [];
    }
  
    getObjectsAt(x: number, y: number, layerName = 'triggers'): any[] {
      const objects = this.getObjectsFromLayer(layerName);
      return objects.filter((obj: any) =>
        x >= obj.x &&
        y >= obj.y &&
        x < obj.x + obj.width &&
        y < obj.y + obj.height
      );
    }
  
    parseProperties(obj: any): Record<string, any> {
      const props: Record<string, any> = {};
      if (obj.properties) {
        for (const p of obj.properties) {
          props[p.name] = p.value;
        }
      }
      return props;
    }
  } 
  