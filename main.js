import openLink from "./scripts/open-link.js"
import menu from "./parts/menu.js"

document.getElementById("menu") ? 
  document.getElementById("menu").remove() : 
  addMenu()


const menuItems = {
    "1) Open students link": openLink
}

function addListeners() {
    let items = document.getElementsByClassName("menuItem")

    for (const item of items) {
        item.addEventListener("click", function(event) {
            menuItems[event.target.innerText]()
            menu.remove()
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

function addMenu() {
  menu.innerHTML = `
  <span class="menuItem">1) Open students link</span>
  `
  document.body.appendChild(menu)
  addListeners()
}
