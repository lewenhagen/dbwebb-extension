const eventListeners = {
    permanentListeners: [],
    permanent: "permanent",
    content: "content",
    contentListeners: [],

    addEventListener: function (element, type, func, saveType) {
        element.addEventListener(type, func);

        if (saveType === eventListeners.permanent) {
            eventListeners.permanentListeners.push([element, type, func]);
        } else {
            eventListeners.contentListeners.push([element, type, func]);
        }
    },

    clearAllListeners: function () {
        eventListeners.permanentListeners.forEach(listener => {
            listener[0].removeEventListener(listener[1], listener[2]);
        });
        eventListeners.permanentListeners = [];
        eventListeners.clearContentListeners();
    },

    clearContentListeners: function () {
        eventListeners.contentListeners.forEach(listener => {
            listener[0].removeEventListener(listener[1], listener[2]);
        });
        eventListeners.contentListeners = [];
    }
}

export default eventListeners
