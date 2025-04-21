import './scss/game/rpg.scss'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main class="border-6 border-base-300 main-game rounded-box">
    <section class="active bg-error page page-hidden text-error-content" data-pg-name="Page1">
        <div class="p-8">
            <header class="py-4">
                <h2 class="font-extrabold text-4xl">Page 1</h2>
            </header>
            <nav class="py-4">
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
            </nav>
        </div>
        <!-- buttons -->
        <!-- same buttons with another theme! -->
        <!-- tab -->
        <!-- toggle, checkbox, radio -->
    </section>
    <section class="active bg-warning page page-hidden text-warning-content" data-pg-name="Page2">
        <div class="p-8">
            <header class="py-4">
                <h2 class="font-extrabold text-4xl">Page 2</h2>
            </header>
            <nav class="py-4">
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
            </nav>
        </div>
        <!-- buttons -->
        <!-- same buttons with another theme! -->
        <!-- tab -->
        <!-- toggle, checkbox, radio -->
    </section>
    <section class="bg-info page page-hidden text-info-content" data-pg-name="Page3">
        <div class="p-8">
            <header class="py-4">
                <h2 class="font-extrabold text-4xl">Page 2</h2>
            </header>
            <nav class="py-4">
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
                <button class="btn btn-neutral"><span>neutral</span>
                </button>
            </nav>
        </div>
        <!-- buttons -->
        <!-- same buttons with another theme! -->
        <!-- tab -->
        <!-- toggle, checkbox, radio -->
    </section>
</main>
`
