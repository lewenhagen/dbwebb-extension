import { openLink } from "./scripts/open-link.js"

console.log("magic script is online.")

let menu = document.createElement("div")
menu.style.height = "400px"
menu.style.width = "600px"
menu.style.position = "absolute"
menu.style.top = ((window.innerHeight / 2) - 200) + "px"
menu.style.left = ((window.innerWidth / 2) - 300) + "px"
menu.style.border = "5px solid black"
menu.style.padding = "1em"
menu.style.backgroundColor = "rgba(113, 77, 168, 0.86)"
menu.style.color = "white"
menu.style.fontSize = "24px"


document.body.appendChild(menu)

let mainObject = {
    "1) Open students link": openLink
}

function addMenu() {
    menu.innerHTML = `
    <span class="openextension">1) Open students link</span>
    `
    addListeners()
}

function addListeners() {
    let items = document.getElementsByClassName("openextension")

    for (const item of items) {
        item.addEventListener("click", function(event) {
            console.log("triggered")
            mainObject[event.target.innerText]()
            menu.parentNode.removeChild(menu)
        })

        item.onmouseover = function(event) {
            event.target.style.cursor = "pointer"
        }
    }


}

addMenu()
