
import eventListeners from "./eventlisteners.js"
import storage from "./storage.js"

let exit = {
    name: "Close menu",
    actionRemove: function () {
        // Method is automatically called when another action is run.
        if (storage.data["exitOnAction"] === true) {
            exit.manualRemove();
        }
    },
    manualRemove: function () {
        // Method is called when the user has pressed close button.
        document.getElementById("menu").remove();
        eventListeners.clearAllListeners();
    }
};

export default exit
