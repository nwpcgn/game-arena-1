import { mount } from 'svelte'
import './assets/scss/game/game.scss'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
	target: document.getElementById('app')!
})

export default app
