import menu from "./parts/menu.js"
import exit from "./parts/exit.js"
import settings from "./parts/settings.js"
import openLink from "./scripts/open-link.js"
import openUmbridge from "./scripts/open-umbridge.js"
import calcScore from "./scripts/calc-quiz-score.js"

const menuItems = [
    openLink,
    openUmbridge,
    calcScore,
];

document.getElementById("menu") ?
    exit.manualRemove() :
    addMenu()


function addListeners() {
    let items = document.getElementsByClassName("menuItem")

    for (const item of items) {
        item.addEventListener("click", function (event) {
            menuItems[event.target.id].action();
        });

        item.onmouseover = function (event) {
            event.target.style.cursor = "pointer"
            event.target.style.color = "black"
        }
        item.onmouseleave = function (event) {
            event.target.style.cursor = "pointer"
            event.target.style.color = "white"
        }
    }

    let closeButton = document.getElementById(exit.name)
    closeButton.addEventListener("click", exit.manualRemove);

    let settingsButton = document.getElementById(settings.name)
    settingsButton.addEventListener("click", function () {
        settings.renderHtml(addMenu);
    });
}

function addMenu() {
    let optionsString = ""

    menuItems.forEach(function (element, index) {
        optionsString += `<div id="${index}" class="menuItem">${index + 1}) ${element.name}</div>`;
    });

    menu.childNodes[0].innerHTML = optionsString;

    document.body.appendChild(menu)
    addListeners()
}
