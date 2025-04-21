// drawTileLayer(layer: any) {
//     const { width, data } = layer;

//     for (let i = 0; i < data.length; i++) {

//       const gid = data[i];
//       if (gid === 0) continue;

//       const tileset = this.getTilesetForGid(gid);
//       if (!tileset) continue;

//       const img = this.tilesetImages[tileset.firstgid];
//       const localId = gid - tileset.firstgid;

//       const sx = (localId % tileset.columns) * tileset.tilewidth;
//       const sy = Math.floor(localId / tileset.columns) * tileset.tileheight;

//       const dx = (i % width) * this.tileSize;
//       const dy = Math.floor(i / width) * this.tileSize;

//       this.ctx.drawImage(
//         img,
//         sx, sy, this.tileSize, this.tileSize,
//         dx, dy, this.tileSize, this.tileSize
//       );
//     }

//   }
