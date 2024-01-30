
function addEventListeners(returnCallback) {
    let addToStudentUrlPath = document.getElementById("addToStudentUrlPath");
    addToStudentUrlPath.addEventListener("input", function (event) {
        window.sessionStorage.setItem("addToStudentUrlPath", event.target.value);
    });

    let checkbox = document.getElementById('exitOnAction');
    checkbox.addEventListener('change', function () {
        window.sessionStorage.setItem("exitOnAction", checkbox.checked);
    });

    let returnButton = document.getElementById("return");
    returnButton.addEventListener("click", function (event) {
        returnCallback();
    });

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function (event) {
        window.sessionStorage.clear();
        renderHtml(returnCallback);
    });
}

function renderHtml(callback) {
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
    addEventListeners(callback);
}

let settingsMenu = {
    name: "Settings",
    renderHtml: renderHtml,
}

export default settingsMenu
