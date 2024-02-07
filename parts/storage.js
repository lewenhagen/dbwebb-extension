// wrapper for chrome.storage API
// https://developer.chrome.com/docs/extensions/reference/api/storage#synchronous_response_to_storage_updates


let storage = {
    data: {},
    name: "Load storage",
    set: function (key, value) {
        storage.data[key] = value;
        chrome.storage.local.set({ [key]: value }); // use [key] because otherwise "key" will be the key and not the value in parameter key.
    },
    load: async function() {
       await chrome.storage.local.get(function(items) {
           for (let [key, value] of Object.entries(items)) {
               storage.data[key] = value;
           }
       });
    },
    clear: async function() {
        storage.data = {};
        await chrome.storage.local.clear();
    }
};

export default storage
