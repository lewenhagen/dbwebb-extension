import exit from "./../parts/exit.js";


let openLink = {
    name: "Open Umbridge link",
    action: function () {
        let pattern_inspect = /https:\/\/umbridge\.arnesson\.dev\/results\/inspect\/\d+\/[\w]+/i;
        let comments = document.querySelectorAll("div.comment_flex > span");
        if (comments.length == 0) {
            comments = document.querySelectorAll('[data-testid=submission-comment]');;
        }
        for (var i = comments.length - 1; i >= 0; i--) {
            let match_inspect = comments[i].innerHTML.match(pattern_inspect);
            let found = false;
            if (match_inspect !== null) {
                window.open(match_inspect, '_blank');
                break;
            }
        }
        exit.actionRemove();
    },
};



export default openLink;
