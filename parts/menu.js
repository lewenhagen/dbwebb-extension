import exit from "./exit.js"
import settings from "./settings.js"

const menuHeight = 350
const menuWidth = 400

let menu = document.createElement("div")

menu.id = "menu"
menu.style.height = `${menuHeight}px`
menu.style.width = `${menuWidth}px`
menu.style.position = "absolute"
menu.style.top = ((window.innerHeight / 2) - (menuHeight / 2)) + "px"
menu.style.left = ((window.innerWidth / 2) - (menuWidth / 2)) + "px"
menu.style.border = "5px solid black"
menu.style.padding = "1em"
menu.style.backgroundColor = "rgba(113, 77, 168, 0.86)"
menu.style.color = "white"
menu.style.fontSize = "24px"


let content = document.createElement("div")
content.id = "menuContent";

let buttonRow = document.createElement("div")
buttonRow.style.position = "absolute";
buttonRow.style.right = 0;
buttonRow.style.bottom = 0;

let closeButton = document.createElement("button")
closeButton.id = exit.name;
closeButton.innerText = exit.name;


let settingsButton = document.createElement("button")
settingsButton.id = settings.name;
settingsButton.innerText = settings.name;


buttonRow.appendChild(settingsButton)
buttonRow.appendChild(closeButton)

menu.appendChild(content);
menu.appendChild(buttonRow);

export default menu
