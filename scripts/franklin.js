
import exit from "./../parts/exit.js";


let franklin = {
    name: "Skriv kommentar",
    action: function () {
        if (!document.getElementById("feedbackText")) {
            let script = document.getElementById("speed_grader_comment_textarea_mount_point") ? 'speed-franklin.js' : 'franklin.js';

            document.body.appendChild(document.createElement('script')).src = 'https://booklets.emilfolino.se/' + script;

            new Promise(r => setTimeout(r, 500)).then(() => {
                document.getElementById("feedbackText").focus();
            });

            exit.actionRemove();
        }
    },
};



export default franklin;


