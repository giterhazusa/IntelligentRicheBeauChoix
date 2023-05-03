const toggles = document.querySelectorAll('.toggle')
const Intelligent = document.querySelector('#Intelligent')
const Beau = document.querySelector('#Beau')
const Riche = document.querySelector('#Riche')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(Intelligent.checked && Beau.checked && Riche.checked) {
        if(Intelligent === theClickedOne) {
            Riche.checked = false
        }

        if(Beau === theClickedOne) {
            Intelligent.checked = false
        }

        if(Riche === theClickedOne) {
            Beau.checked = false
        }
    }
}