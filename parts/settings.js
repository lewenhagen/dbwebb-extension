import eventListeners from "./eventlisteners.js"
import storage from "./storage.js"

let settingsMenu = {
    name: "Settings",
    addEventListeners: function (returnCallback) {
        let addToStudentUrlPath = document.getElementById("addToStudentUrlPath");
        addToStudentUrlPath.focus();

        eventListeners.addEventListener(addToStudentUrlPath, "input", function (event) {
            storage.set("addToStudentUrlPath", event.target.value);
        }, eventListeners.content);

        let checkbox = document.getElementById('exitOnAction');
        eventListeners.addEventListener(checkbox, 'change', function () {
            storage.set("exitOnAction", checkbox.checked)
        }, eventListeners.content);

        let returnButton = document.getElementById("return");
        eventListeners.addEventListener(returnButton, "click", function (event) {
            eventListeners.clearContentListeners();
            returnCallback();
        }, eventListeners.content);

        let resetButton = document.getElementById("reset");
        eventListeners.addEventListener(resetButton, "click", async function (event) {
            await storage.clear();
            eventListeners.clearContentListeners();
            settingsMenu.renderHtml(returnCallback);
        }, eventListeners.content);
    },
    renderHtml: function (callback) {
        let addPart = storage.data["addToStudentUrlPath"];
        let exitOnAction = storage.data["exitOnAction"] == true;

        let html = `
            <div>
            <label>Pathto add after "me/" in link opener</label>
            <input type="text" class="menuItem" id="addToStudentUrlPath" value="${addPart ? addPart : "kmom0x/assignment"}" >
            </div>
            <div>
            <label>Automatically exit plugin menu after running a script?</label>
            <input type="checkbox" class="menuItem" id="exitOnAction" ${exitOnAction ? "checked" : "undefined"}>
            </div>
            <div style="font-size:14px;">
            Keybinds funkar i startmenyn. Följande finns:<br>
            1-X: för varje menyval. Trycker du 1 på tangetbordet körs val 1 osv.<br>
            s: för att klicka "Spara" knappen för kommentar<br>
            shift+k: välj föregående inlämning att visa
            shift+j: välj nästa inlämning att visa
            q: stänger ner menyn.<br>
            </div>
            <button id="return">Return</button>
            <button id="reset">Reset storage</button>
            `;

        let menuContent = document.getElementById("menuContent");
        menuContent.innerHTML = html;
        settingsMenu.addEventListeners(callback);
    }
}


export default settingsMenu
