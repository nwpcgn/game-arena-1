import './scss/game/rpg.scss'
import './style.css'
import { signal, component, render } from 'reefjs'

document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
<section class="page-layer nwp">
    <article class="content">
        <div class="space-y-4 bg-gray-100 p-4">
            <div class="bg-gray-200 p-4">
                <h1>NWP</h1>
            </div>
            <p class="h-[512px] bg-purple-500 p-4">Paragraph 2</p>
            <p class="h-[512px] bg-purple-500 p-4">Paragraph 3</p>
        </div>
    </article>
</section>
`

let { signal, component } = reef

let daten = signal({ count: 0 })

// Increase the count
function increase() {
	daten.count.value++
}

// Decrease the count
function decrease() {
	daten.count.value--
}

// The template
function template() {
	return `
        <nav class="p-4 grid gap-2">
            <button class="btn" onclick="increase()">Increase</button>
            <button class="btn" onclick="decrease()">Decrease</button>
             <div class="btn" aria-live="polite">Count: ${daten.count.value}</div>
              </nav>`
}

// Render a template with on* events

const clickHandler = (event) => {
  let el = event.target.closest("sel");
  if (el) {
    event.preventDefault();
    console.log(el.getAttribute("sel"));
  }
};
document.addEventListener("click", clickHandler, false);

window.addEventListener("load", () => {
  console.log("Document Ready");
  component('#aside', template, { events: { increase, decrease } })
