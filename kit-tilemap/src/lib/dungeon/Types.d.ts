export interface Dungeon {
	map?: ((EntityOrMapEntityEntity)[] | null)[] | null;
	config: Config;
  }
  export interface EntityOrMapEntityEntity {
	tile: number;
	room?: number | null;
  }
  export interface Config {
	rooms: number;
	rows: number;
	cols: number;
	tileSize: number;
	gridGap: number;
  }
  