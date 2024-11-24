
import exit from "./../parts/exit.js";

const CODETITLE = "[Error] in code/example/instruction";
const CODELABEL = "code error";
const TEXTTITLE = "[Error] in text";
const TEXTLABEL = "text error";

function getSelectionElement() {
    let text = "";

    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }

    return text;
}


function createIsssueForCode(){
    createIssue(getSelectionElement(), CODETITLE, CODELABEL);
};

function createIsssueForText() {
    createIssue(getSelectionElement(), TEXTTITLE, TEXTLABEL);
};


function findAnchor(element) {
    while (element) {
        if (element.tagName.startsWith("H")) {
            const child = element.children[0];
            if (child.tagName === 'A' && child.classList.contains("header-anchor")) {
                return child.href;
            }
        }
        element = element.parentElement;
    }
    return window.location.href;
}

function createPopUp(){
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
    menu.innerText = "Rapportera fel genom att markera texten och klicka på en knapp";
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
        createIsssueForCode();
    });

    textButton.addEventListener('click', () => {
        createIsssueForText();
    });
}




function createIssue(selectedText, title, labels, link){
    let assignees;
    
    let body = `
**Describe the error**
A clear and concise description of what the error is.
What error appeared when executing:
\`\`\`
${selectedText}
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
 - Language [e.g. Python, JS, C#]
 - Program [e.g. terminal, browser, Thonny]

**Additional context**
Add any other context about the problem here.
`;

    let url = `https://github.com/dbwebb-se/website/issues/new?title=${title}&body=${body}&labels=${labels}`; //&assignees=${assignees}`;

    console.log(url);

    window.open(url, '_blank');
}


let issue = {
    name: "Rapportera fel",
    action: function () {
        // if (!window.location.href.includes("dbwebb.se")) {

        createPopUp();
        console.log(getSelectionText());

        // exit.actionRemove();
        // }
    },
};



export default issue;
