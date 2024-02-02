import exit from "./../parts/exit.js";

function renderBox(assignments) {
    let box = document.createElement("div");
    box.style = "width:600px;height:800px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;";
    let button = document.createElement("button");
    button.textContent = "St%C3%A4ng";
    button.addEventListener("click", function () {
        box.parentNode.removeChild(box);
    });
    box.appendChild(button);
    assignments.forEach(function (assignment, index) {
        let assignmentElement = document.createElement("div");
        assignmentElement.innerHTML = "<h2>kmom0" + (index + 1) + "</h2>";
        assignmentElement.innerHTML += assignment.body; box.appendChild(assignmentElement);
    });

    document.body.appendChild(box);

}

let allTexts = {
    name: "Show all redovisningstexter (not working, need Canvas token)",
    action: function () {

        const pathname = window.location.pathname;
        const queryString = window.location.search;
        const courseID = pathname.split("/")[2];
        const studentMatch = /student_id=(\d+)/i;
        const studentID = queryString.match(studentMatch)[1];
        const canvasAuth = "Bearer [INSERT KEY HERE]";
        const canvasURL = `/api/v1/courses/${courseID}/students/submissions?student_ids[]=${studentID}`;
        fetch(canvasURL, { headers: { "Authorization": canvasAuth } }).then(function (response) {
            return response.json();
        }).then(function (result) {
            renderBox(result);
        });

        exit.actionRemove();
    }
};


export default allTexts;