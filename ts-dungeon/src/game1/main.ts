import './scss/retro.scss'
import './style.css'
import { signal, component } from 'reefjs'
let daten = signal({
	width: 640,
	height: 480
})
import { TilemapRenderer } from './TilemapRenderer';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const map = new TilemapRenderer(ctx);

let lastTime = performance.now();

await map.load('./assets/map.json');

function gameLoop(now: number) {
  const delta = now - lastTime;
  lastTime = now;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  map.updateAnimations(delta);
  map.drawAllVisibleLayers();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
