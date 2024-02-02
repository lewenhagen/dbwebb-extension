const eventListeners = {
    addedListeners: {},

    addEventListener: function(element, type, func, part) {
        element.addEventListener(type, func);
        eventListeners.addedListeners.push([element, type, func]);
        console.log(eventListeners.addedListeners);
    },

    clearEventListeners: function() {
        console.log(eventListeners.addedListeners);
        eventListeners.addedListeners.forEach(listener => {
            listener[0].removeEventListener(listener[1], listener[2]);
        });
        eventListeners.addedListeners = [];
    }
}

export default eventListeners
