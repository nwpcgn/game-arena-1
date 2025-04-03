export interface Game {
	world: World
	variables: Variables
	gui: Gui
	functions: Functions
}
export interface World {
	width: number
	height: number
	level: number
	map?: (number[] | null)[] | null
	rooms?: number[] | null
	items?: ItemsEntity[] | null
	activeRoom: number
	pos: Pos
}
export interface ItemsEntity {
	slug: string
	x: number
	y: number
}
export interface Pos {
	x: number
	y: number
}
export interface Variables {
	fruits?: string[] | null
}
export interface Gui {
	text_el: TextEl
	btn_el: BtnEl
}
export interface TextEl {
	text: string
	classes: Classes
	onclick: number
}
export interface Classes {
	default?: string[] | null
}
export interface BtnEl {
	type: string
	text: string
	classes: Classes1
	onclick: number
}
export interface Classes1 {
	default?: string[] | null
	modifiers: Modifiers
}
export interface Modifiers {
	hover?: string[] | null
}
export interface Functions {}
