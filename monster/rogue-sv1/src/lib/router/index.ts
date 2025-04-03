import { default as Router } from './Navigator.svelte'
import { router } from './navigator.svelte.ts'
export const links = [
	{
		name: 'Start',
		href: '/',
		icon: 'nwp-home'
	},
	{
		name: 'Game',
		href: '/game',
		icon: 'nwp-game'
	},
	{
		name: 'Settings',
		href: '/settings',
		icon: 'nwp-options'
	}
]
export { Router, router }
