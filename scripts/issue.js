
import exit from "./../parts/exit.js";

const CODETITLE = "[Error] in code/example/instruction";
const CODELABEL = "code error";
const TEXTTITLE = "[Error] in text";
const TEXTLABEL = "text error";


function getSelectionElement() {
    let selection = null;

    if (window.getSelection) {
        selection = window.getSelection();
    }

    return selection;
}

function findAnchor(element) {
    while (element) {
        if (element.tagName.startsWith("H")) {
            const child = element.children[0];
            if (child.tagName === 'A' && child.classList.contains("header-anchor")) {
                return child.href;
            }
        }
        element = element.previousElementSibling;
    }
    return window.location.href;
}

function createIsssueForCode(){
    const selection = getSelectionElement();
    const text = selection.toString();

    const link = findAnchor(selection.anchorNode.parentElement);

    const msg = encodeURIComponent(`
**Describe the error**
A clear and concise description of what the error is. What error occurred when executing:
\`\`\`
${text}
\`\`\`

**Link to example**
${link}

**Expected behavior**
A clear and concise description of what you expected to happen when executing example.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Execution environment:**
Where was the code executed?
 - OS: [e.g. iOS]
 - Language [e.g. Bash command, Python, JS, C#]
 - Program [e.g. terminal, browser, Thonny]

**Additional context**
Add any other context about the problem here.
`);

    createIssue(CODETITLE, CODELABEL, msg);
};

function createIsssueForText() {
    const selection = getSelectionElement();
    const text = selection.toString();
    const link = findAnchor(selection.anchorNode.parentElement);

    const msg = encodeURIComponent(`
**Describe the error**
A clear and concise description of what the error is. What is wrong or unclear in the text?
\`\`\`
${text}
\`\`\`

**Expected behavior**
A clear and concise description of what you expected the text to be.

**Link to example**
${link}

**Additional context**
Add any other context about the problem here.
`);

    createIssue(TEXTTITLE, TEXTLABEL, msg);
};

function createIssue(title, labels, body){
    let assignees;

    let url = `https://github.com/dbwebb-se/website/issues/new?title=${title}&body=${body}&labels=${labels}`; //&assignees=${assignees}`;

    window.open(url, '_blank');
}



function createPopUp() {
    // Create the button to open the menu
    const openMenuBtn = document.createElement('button');
    openMenuBtn.textContent = '⚠';
    document.body.appendChild(openMenuBtn);

    openMenuBtn.style.cssText = `
            display: block;
            position: absolute;
            top: 90%;
            left: 90%;
    `;
    // Create the menu container
    const menu = document.createElement('div');
    menu.innerText = "Rapportera fel i texten genom att markera texten som är fel och klicka på en av knapparna nedanför";
    menu.style.cssText = `
            display: none;
            position: absolute;
            border: 1px solid #888;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            background-color: white;
            padding: 10px;
            z-index: 1000;
        `;

    // Create the close button
    const closeMenuBtn = document.createElement('button');
    closeMenuBtn.textContent = 'x';
    closeMenuBtn.style.cssText = `
            display: block;
            position: relative;
            top: 0%;
            left: 90%;
            z-index: 1001;
        `;
    menu.appendChild(closeMenuBtn);

    // Create the other buttons
    const codeButton = document.createElement('button');
    codeButton.textContent = 'Exempel/Kod';
    menu.appendChild(codeButton);

    const textButton = document.createElement('button');
    textButton.textContent = 'Text';
    menu.appendChild(textButton);

    // Append the menu to the body
    document.body.appendChild(menu);

    // Show the menu
    openMenuBtn.addEventListener('click', (event) => {
        const rect = openMenuBtn.getBoundingClientRect();
        menu.style.top = `${rect.top - menu.offsetHeight}px`;
        menu.style.left = `${rect.left}px`;
        menu.style.display = 'block';
    });

    // Hide the menu
    closeMenuBtn.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    // Optional: Add functionality to the other buttons
    codeButton.addEventListener('click', () => {
        menu.style.display = 'none';
        createIsssueForCode();
    });

    textButton.addEventListener('click', () => {
        menu.style.display = 'none';
        createIsssueForText();
    });
}

let issue = {
    name: "Rapportera fel",
    action: function () {
        // if (!window.location.href.includes("dbwebb.se")) {

        createPopUp();

        // exit.actionRemove();
        // }
    },
};



export default issue;
