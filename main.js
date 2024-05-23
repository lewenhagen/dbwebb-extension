import menu from "./parts/menu.js"
import exit from "./parts/exit.js"
import storage from "./parts/storage.js"
import settings from "./parts/settings.js"
import eventListeners from "./parts/eventlisteners.js"
import openLink from "./scripts/open-link.js"
import openUmbridge from "./scripts/open-umbridge.js"
import calcScore from "./scripts/calc-quiz-score.js"
import allTexts from "./scripts/all-texts.js"
import franklin from "./scripts/franklin.js"
import showVideo from "./scripts/show-video.js"


const menuItems = [
    openLink,
    openUmbridge,
    franklin,
    calcScore,
    showVideo,
    allTexts,
];


async function initialize() {
    document.body.appendChild(menu);

    let closeButton = document.getElementById(exit.name)
    eventListeners.addEventListener(closeButton, "click", exit.manualRemove, eventListeners.permanent);

    let settingsButton = document.getElementById(settings.name)
    eventListeners.addEventListener(settingsButton, "click", function () {
        eventListeners.clearContentListeners();
        settings.renderHtml(addMenu);
    }, eventListeners.permanent);

    await storage.load();
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
            console.log('You pressed ' + key + ' (keyCode: ' + keycode + ').');
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
            else if (keycode === "KeyS") {
                document.getElementById("comment_submit_button").click();
            }
            else if (keycode === "KeyJ" && !!event.shiftKey) {
                let e = document.getElementById("submission_to_view");
                e.options[e.selectedIndex].nextElementSibling.selected="selected";
                e.dispatchEvent(new Event('change', { bubbles: true }));
            }
            else if (keycode === "KeyK" && !!event.shiftKey) {
                let e = document.getElementById("submission_to_view");
                e.options[e.selectedIndex].previousElementSibling.selected = "selected";
                e.dispatchEvent(new Event('change', { bubbles: true }));
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
    initialize().then(() => {
        addMenu();
    });
} //Else, gör inget föra att blockera att stänga av menyn från plugin knappen