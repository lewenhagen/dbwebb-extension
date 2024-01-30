import exit from "./../parts/exit.js";


let calcScore = {
    name: "Calculate quiz score",
    action: function () {
        let rows = document.querySelectorAll('.assignment_score');
        let correct = 0;
        let total = 0;
        rows.forEach((element) => {
            let score_elements = element.parentElement.querySelectorAll('.tooltip');
            score_elements.forEach((element) => {
                let without_spaces = element.innerText.replace(/\s/g, "");
                const re = /(-|\d[\d,]*)\/(\d[\d,]*)/;
                let scores = without_spaces.match(re);
                if (scores) {
                    if (scores[1] === "-") {
                        scores[1] = 0;
                    }
                    let score = parseFloat(scores[1]);
                    let max = parseFloat(scores[2]);
                    correct += score;
                    total += max;
                }
            });
        });
        alert(`Poäng: ${correct} / ${total}\nScore: ${((Math.ceil(correct / (total / 2) * 10) / 10) / 2)}`);
        exit.actionRemove();
    },
};



export default calcScore;
