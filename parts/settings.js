import eventListeners from "./eventlisteners.js"

let settingsMenu = {
    name: "Settings",
    addEventListeners: function (returnCallback) {
        let addToStudentUrlPath = document.getElementById("addToStudentUrlPath");
        eventListeners.addEventListener(addToStudentUrlPath, "input", function (event) {
            window.sessionStorage.setItem("addToStudentUrlPath", event.target.value);
        }, eventListeners.content);

        let checkbox = document.getElementById('exitOnAction');
        eventListeners.addEventListener(checkbox, 'change', function () {
            window.sessionStorage.setItem("exitOnAction", checkbox.checked);
        }, eventListeners.content);

        let returnButton = document.getElementById("return");
        eventListeners.addEventListener(returnButton, "click", function (event) {
            eventListeners.clearContentListeners();
            returnCallback();
        }, eventListeners.content);

        let resetButton = document.getElementById("reset");
        eventListeners.addEventListener(resetButton, "click", function (event) {
            window.sessionStorage.clear();
            eventListeners.clearContentListeners();
            renderHtml(returnCallback);
        }, eventListeners.content);
    },
    renderHtml: function (callback) {
        console.log("hej");
        let addPart = window.sessionStorage.getItem("addToStudentUrlPath");
        let exitOnAction = window.sessionStorage.getItem("exitOnAction") == "true";

        let html = `
            <div>
            <label>Pathto add after "me/" in link opener</label>
            <input type="text" class="menuItem" id="addToStudentUrlPath" placeholder="${addPart ? addPart : "kmom0x/assignment"}" >
            </div>
            <div>
            <label>Automatically exit plugin menu after running a script?</label>
            <input type="checkbox" class="menuItem" id="exitOnAction" ${exitOnAction ? "checked" : "undefined"}>
            </div>
            <button id="return">Return</button>
            <button id="reset">Reset session</button>
            `;

        let menuContent = document.getElementById("menuContent");
        menuContent.innerHTML = html;
        settingsMenu.addEventListeners(callback);
    }
}


export default settingsMenu
