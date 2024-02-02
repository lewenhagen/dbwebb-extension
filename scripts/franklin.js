
import exit from "./../parts/exit.js";


let franklin = {
    name: "Skriv kommentar",
    action: function () {

        let script = document.getElementById("speed_grader_comment_textarea") ? 'speed-franklin.js' : 'franklin.js';

        document.body.appendChild(document.createElement('script')).src = 'https://booklets.emilfolino.se/' + script;

        exit.actionRemove();
    },
};



export default franklin;


