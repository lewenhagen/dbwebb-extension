(function() {
    let pattern_inspect = /https?:\/\/w+.student.bth.se\/~\w{4}\d{2}\/dbwebb-kurser.*/i;
    let iframe = document.getElementById("speedgrader_iframe").contentWindow.document;
    let content = iframe.getElementById("submission_preview");
    let match_inspect = content.innerText.match(pattern_inspect);
    if (match_inspect !== null) {
        window.open(match_inspect, '_blank');
    }
})();
