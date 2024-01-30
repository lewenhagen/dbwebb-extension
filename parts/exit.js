
let exit = {
    name: "Close menu",
    actionRemove: function () {
        // Method is automatically called when another action is run.
        if (window.sessionStorage.getItem("exitOnAction") === "true") {
            document.getElementById("menu").remove();
        }
    },
    manualRemove: function () {
        // Method is called when the user has pressed close button.
        document.getElementById("menu").remove();
    }
};

export default exit
