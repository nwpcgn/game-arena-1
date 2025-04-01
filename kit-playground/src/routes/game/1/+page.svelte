<script lang="ts">
	import type { Scene } from 'phaser'
	import type { MainMenu } from '../../../game/scenes/MainMenu'
	import PhaserGame, { type TPhaserRef } from '../../../game/PhaserGame.svelte'

	// The sprite can only be moved in the MainMenu Scene
	let canMoveSprite = false

	//  References to the PhaserGame component (game and scene are exposed)
	let phaserRef: TPhaserRef = { game: null, scene: null }
	const spritePosition = { x: 0, y: 0 }

	const changeScene = () => {
		const scene = phaserRef.scene as MainMenu

		if (scene) {
			// Call the changeScene method defined in the `MainMenu`, `Game` and `GameOver` Scenes
			scene.changeScene()
		}
	}

	const moveSprite = () => {
		const scene = phaserRef.scene as MainMenu

		if (scene) {
			// Get the update logo position
			;(scene as MainMenu).moveLogo(({ x, y }) => {
				spritePosition.x = x
				spritePosition.y = y
			})
		}
	}

	const addSprite = () => {
		const scene = phaserRef.scene as Scene

		if (scene) {
			// Add more stars
			const x = Phaser.Math.Between(64, scene.scale.width - 64)
			const y = Phaser.Math.Between(64, scene.scale.height - 64)

			//  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
			const star = scene.add.sprite(x, y, 'star')

			//  ... which you can then act upon. Here we create a Phaser Tween to fade the star sprite in and out.
			//  You could, of course, do this from within the Phaser Scene code, but this is just an example
			//  showing that Phaser objects and systems can be acted upon from outside of Phaser itself.
			scene.add.tween({
				targets: star,
				duration: 500 + Math.random() * 1000,
				alpha: 0,
				yoyo: true,
				repeat: -1
			})
		}
	}

	// Event emitted from the PhaserGame component
	const currentScene = (scene: Scene) => {
		canMoveSprite = scene.scene.key !== 'MainMenu'
	}
	let sb = $state(false)
	const toggle = () => {
		sb = !sb
	}
</script>

<div class="page-layer nwp center">
	<PhaserGame bind:phaserRef currentActiveScene={currentScene} />
</div>

<aside
	class="absolute inset-y-4 transform transition-transform duration-400 ease-in"
	class:right-12={!sb}
	class:right-4={sb}
	class:translate-x-full={!sb}>
	<div class="flex items-start gap-2">
		<div>
			<button onclick={toggle} class="btn btn-square" style="--fs: 16px;">
				<svg class="nwp-icon"><use xlink:href="#nwp-burger"></use></svg>
			</button>
		</div>

		<div class="rounded-box bg-base-100 w-56 p-4 shadow-sm">
			<div class="grid gap-2">
				<button class="btn" onclick={changeScene}>Change Scene</button>

				<button class="btn" disabled={canMoveSprite} onclick={moveSprite}
					>Toggle Movement</button>

				<div class="spritePosition">
					Sprite Position
					<pre>{JSON.stringify(spritePosition, null, 2)}</pre>
				</div>

				<button class="btn" onclick={addSprite}>Add New Sprite</button>
			</div>
		</div>
	</div>
</aside>
