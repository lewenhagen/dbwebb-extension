import openLink from "./scripts/open-link.js"
import menu from "./parts/menu.js"

// let loaded = window.sessionStorage.getItem("loaded")
// if (loaded === "true") {
//   window.sessionStorage.setItem("loaded", "false")
// } else {
//   addMenu()
// }


document.body.appendChild(menu)

let menuItems = {
    "1) Open students link": openLink
}

function addMenu() {
    menu.innerHTML = `
    <span class="menuItem">1) Open students link</span>
    `
    addListeners()
}

function addListeners() {
    let items = document.getElementsByClassName("menuItem")

    for (const item of items) {
        item.addEventListener("click", function(event) {
            menuItems[event.target.innerText]()
            menu.parentNode.removeChild(menu)
        })

        item.onmouseover = function(event) {
            event.target.style.cursor = "pointer"
            event.target.style.color = "black"
        }
        item.onmouseleave = function(event) {
            event.target.style.cursor = "pointer"
            event.target.style.color = "white"
        }
    }
}

addMenu()
