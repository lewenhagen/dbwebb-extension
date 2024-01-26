const menuHeight = 300
const menuWidth = 400

let menu = document.createElement("div")

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

export default menu
