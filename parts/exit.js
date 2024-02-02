
let exit = {
    name: "Close menu",
    eventListeners: null,
    actionRemove: function () {
        // Method is automatically called when another action is run.
        if (window.sessionStorage.getItem("exitOnAction") === "true") {
            exit.manualRemove();
        }
    },
    manualRemove: function () {
        // Method is called when the user has pressed close button.
        document.getElementById("menu").remove();
        exit.eventListeners.clearEventListeners();
    }
};

export default exit
