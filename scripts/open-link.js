
import exit from "./../parts/exit.js";

let openLink = {
    name: "Open student link",
    action: function () {
        let addPart = window.sessionStorage.getItem("addToStudentUrlPath");

        let pattern_inspect = /https?:\/\/w+.student.bth.se\/~\w{4}\d{2}\/dbwebb-kurser\/\w+\//i;
        // let pattern_inspect = /https?:\/\/w+.student.bth.se\/~\w{4}\d{2}\/dbwebb-kurser.*/i;
        let iframe = document.getElementById("speedgrader_iframe").contentWindow.document;
        let content = iframe.getElementById("submission_preview");
        let match_inspect = content.innerText.match(pattern_inspect);
        if (match_inspect !== null) {
            let url = `${match_inspect}me/${addPart ? addPart : ""}`;
            window.open(url, '_blank');
        }
        exit.actionRemove();
    }
};



export default openLink;
