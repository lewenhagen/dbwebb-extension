import menu from "./parts/menu.js"
import exit from "./parts/exit.js"
import settings from "./parts/settings.js"
import eventListeners from "./parts/eventlisteners.js"
import openLink from "./scripts/open-link.js"
import openUmbridge from "./scripts/open-umbridge.js"
import calcScore from "./scripts/calc-quiz-score.js"


const menuItems = [
    openLink,
    openUmbridge,
    calcScore,
];


function initialize() {
    document.body.appendChild(menu);

    let closeButton = document.getElementById(exit.name)
    eventListeners.addEventListener(closeButton, "click", exit.manualRemove, eventListeners.permanent);

    let settingsButton = document.getElementById(settings.name)
    eventListeners.addEventListener(settingsButton, "click", function () {
        eventListeners.clearContentListeners();
        settings.renderHtml(addMenu);
    }, eventListeners.permanent);
}


function addListeners() {


    let items = document.getElementsByClassName("menuItem")

    for (const item of items) {
        eventListeners.addEventListener(item, "click", function (event) {
            menuItems[event.target.id].action();
        }, eventListeners.content);

        item.onmouseover = function (event) {
            event.target.style.cursor = "pointer"
            event.target.style.color = "black"
        }
        item.onmouseleave = function (event) {
            event.target.style.cursor = "pointer"
            event.target.style.color = "white"
        }
    }
    eventListeners.addEventListener(document, "keydown", function test(event) {
        let keycode = event.code;
        key = String.fromCharCode(keycode);
        source = event.target;
        exclude = ['input', 'textarea'];

        if (exclude.indexOf(source.tagName.toLowerCase()) === -1) {
            // console.log('You pressed ' + key + ' (keyCode: ' + keycode + ').');
            let pattern = /Digit(\d+)/i;
            let match = keycode.match(pattern)
            if (match !== null) {

                let digit = parseInt(match[1]);
                if (digit > 0 && digit <= menuItems.length) {
                    menuItems[digit - 1].action();
                }
            } else if (keycode === "KeyQ") {
                exit.manualRemove();
            }
        }
    }, eventListeners.content);
}

function addMenu() {
    let optionsString = ""

    menuItems.forEach(function (element, index) {
        optionsString += `<div id="${index}" class="menuItem">${index + 1}) ${element.name}</div>`;
    });

    menu.childNodes[0].innerHTML = optionsString;


    addListeners()
}


if (!document.getElementById("menu")) {
    initialize();
    addMenu();
} //Else, gör inget föra att blockera att stänga av menyn från plugin knappen