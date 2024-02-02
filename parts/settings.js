
let settingsMenu = {
    eventListeners: null,
    name: "Settings",
    addEventListeners: function (returnCallback) {
        let addToStudentUrlPath = document.getElementById("addToStudentUrlPath");
        settingsMenu.eventListeners.addEventListener(addToStudentUrlPath, "input", function (event) {
            window.sessionStorage.setItem("addToStudentUrlPath", event.target.value);
        }, settingsMenu.eventListeners.content);

        let checkbox = document.getElementById('exitOnAction');
        settingsMenu.eventListeners.addEventListener(checkbox, 'change', function () {
            window.sessionStorage.setItem("exitOnAction", checkbox.checked);
        }, settingsMenu.eventListeners.content);

        let returnButton = document.getElementById("return");
        settingsMenu.eventListeners.addEventListener(returnButton, "click", function (event) {
            settingsMenu.eventListeners.clearContentListeners();
            returnCallback();
        }, settingsMenu.eventListeners.content);

        let resetButton = document.getElementById("reset");
        settingsMenu.eventListeners.addEventListener(resetButton, "click", function (event) {
            window.sessionStorage.clear();
            settingsMenu.eventListeners.clearContentListeners();
            renderHtml(returnCallback);
        }, settingsMenu.eventListeners.content);
    },
    renderHtml: function (callback) {
        console.log("hej");
        let addPart = window.sessionStorage.getItem("addToStudentUrlPath");
        let exitOnAction = window.sessionStorage.getItem("exitOnAction") == "true"; // JS suger röv. Hur kan detta vara lösningen för att göra om "false" till false...


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
