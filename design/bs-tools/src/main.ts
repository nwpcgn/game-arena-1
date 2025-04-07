import { mount } from 'svelte'
import './bs.css'
import './assets/nwp.scss'
import App from './App.svelte'

const app = mount(App, {
	target: document.getElementById('app')!
})

export default app
