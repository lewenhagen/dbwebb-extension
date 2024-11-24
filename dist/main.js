(()=>{var m={permanentListeners:[],permanent:"permanent",content:"content",contentListeners:[],addEventListener:function(t,e,n,o){t.addEventListener(e,n),o===m.permanent?m.permanentListeners.push([t,e,n]):m.contentListeners.push([t,e,n])},clearAllListeners:function(){m.permanentListeners.forEach(t=>{t[0].removeEventListener(t[1],t[2])}),m.permanentListeners=[],m.clearContentListeners()},clearContentListeners:function(){m.contentListeners.forEach(t=>{t[0].removeEventListener(t[1],t[2])}),m.contentListeners=[]}},a=m;var g={data:{},name:"Load storage",set:function(t,e){g.data[t]=e,chrome.storage.local.set({[t]:e})},load:async function(){await chrome.storage.local.get(function(t){for(let[e,n]of Object.entries(t))g.data[e]=n})},clear:async function(){g.data={},await chrome.storage.local.clear()}},d=g;var w={name:"Close menu",actionRemove:function(){d.data.exitOnAction===!0&&w.manualRemove()},manualRemove:function(){document.getElementById("menu").remove(),a.clearAllListeners()}},s=w;var b={name:"Settings",addEventListeners:function(t){let e=document.getElementById("addToStudentUrlPath");e.focus(),a.addEventListener(e,"input",function(c){d.set("addToStudentUrlPath",c.target.value)},a.content);let n=document.getElementById("exitOnAction");a.addEventListener(n,"change",function(){d.set("exitOnAction",n.checked)},a.content);let o=document.getElementById("return");a.addEventListener(o,"click",function(c){a.clearContentListeners(),t()},a.content);let i=document.getElementById("reset");a.addEventListener(i,"click",async function(c){await d.clear(),a.clearContentListeners(),b.renderHtml(t)},a.content)},renderHtml:function(t){let e=d.data.addToStudentUrlPath,n=d.data.exitOnAction==!0,o=`
            <div>
            <label>Pathto add after "me/" in link opener</label>
            <input type="text" class="menuItem" id="addToStudentUrlPath" value="${e||"kmom0x/assignment"}" >
            </div>
            <div>
            <label>Automatically exit plugin menu after running a script?</label>
            <input type="checkbox" class="menuItem" id="exitOnAction" ${n?"checked":"undefined"}>
            </div>
            <div style="font-size:14px;">
            Keybinds funkar i startmenyn. F\xF6ljande finns:<br>
            1-X: f\xF6r varje menyval. Trycker du 1 p\xE5 tangetbordet k\xF6rs val 1 osv.<br>
            s: f\xF6r att klicka "Spara" knappen f\xF6r kommentar<br>
            shift+k: v\xE4lj f\xF6reg\xE5ende inl\xE4mning att visa<br>
            shift+j: v\xE4lj n\xE4sta inl\xE4mning att visa<br>
            q: st\xE4nger ner menyn.<br>
            </div>
            <button id="return">Return</button>
            <button id="reset">Reset storage</button>
            `,i=document.getElementById("menuContent");i.innerHTML=o,b.addEventListeners(t)}},p=b;var k=350,L=400,l=document.createElement("div");l.id="menu";l.style.height=`${k}px`;l.style.width=`${L}px`;l.style.position="absolute";l.style.top=window.innerHeight/2-k/2+"px";l.style.left=window.innerWidth/2-L/2+"px";l.style.border="5px solid black";l.style.padding="1em";l.style.backgroundColor="rgba(113, 77, 168, 0.86)";l.style.color="white";l.style.fontSize="24px";var C=document.createElement("div");C.id="menuContent";var f=document.createElement("div");f.style.position="absolute";f.style.right=0;f.style.bottom=0;var y=document.createElement("button");y.id=s.name;y.innerText=s.name;var v=document.createElement("button");v.id=p.name;v.innerText=p.name;f.appendChild(v);f.appendChild(y);l.appendChild(C);l.appendChild(f);var E=l;var j={name:"Open student link",action:function(){let t=d.data.addToStudentUrlPath,e=/(https?:\/\/)?.*student.bth.se\/~\w{4}\d{2}\/dbwebb-kurser\/\w+\//i,o=document.getElementById("speedgrader_iframe").contentWindow.document.getElementById("submission_preview"),i=o.innerText.match(e);if(i!==null){let c=`${i[0].startsWith("http")?"":"https://"}${i[0]}me/${t||""}`;window.open(c,"_blank")}else{let c=/\w{4}\d{2}/i,r=o.innerText.match(c);if(r!==null){let u=`https://www.student.bth.se/~${r}/dbwebb-kurser/`;window.open(u,"_blank")}}s.actionRemove()}},T=j;var U={name:"Open Umbridge link",action:function(){let t=/https:\/\/umbridge\.arnesson\.dev\/results\/inspect\/\d+\/[\w]+/i,e=document.querySelectorAll("div.comment_flex > span");e.length==0&&(e=document.querySelectorAll("[data-testid=submission-comment]"));for(var n=e.length-1;n>=0;n--){let o=e[n].innerHTML.match(t),i=!1;if(o!==null){window.open(o,"_blank");break}}s.actionRemove()}},S=U;var K={name:"Calculate quiz score",action:function(){let t=document.querySelectorAll(".assignment_score"),e=0,n=0;t.forEach(o=>{o.parentElement.querySelectorAll(".tooltip").forEach(c=>{let r=c.innerText.replace(/\s/g,""),u=/(-|\d[\d,]*)\/(\d[\d,]*)/,h=r.match(u);if(h){h[1]==="-"&&(h[1]=0);let P=parseFloat(h[1]),M=parseFloat(h[2]);e+=P,n+=M}})}),alert(`Po\xE4ng: ${e} / ${n}
Score: ${Math.ceil(e/(n/2)*10)/10/2}`),s.actionRemove()}},B=K;function q(t){let e=document.createElement("div");e.style="width:600px;height:800px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;";let n=document.createElement("button");n.textContent="St%C3%A4ng",n.addEventListener("click",function(){e.parentNode.removeChild(e)}),e.appendChild(n),t.forEach(function(o,i){let c=document.createElement("div");c.innerHTML="<h2>kmom0"+(i+1)+"</h2>",c.innerHTML+=o.body,e.appendChild(c)}),document.body.appendChild(e)}var z={name:"Show all redovisningstexter (not working, need Canvas token)",action:function(){let t=window.location.pathname,e=window.location.search,n=t.split("/")[2],o=/student_id=(\d+)/i,i=e.match(o)[1],c="Bearer [INSERT KEY HERE]",r=`/api/v1/courses/${n}/students/submissions?student_ids[]=${i}`;fetch(r,{headers:{Authorization:c}}).then(function(u){return u.json()}).then(function(u){q(u)}),s.actionRemove()}},I=z;var N={name:"Skriv kommentar",action:function(){if(!document.getElementById("feedbackText")){let t=document.getElementById("speed_grader_comment_textarea_mount_point")?"speed-franklin.js":"franklin.js";document.body.appendChild(document.createElement("script")).src="https://booklets.emilfolino.se/"+t,new Promise(e=>setTimeout(e,500)).then(()=>{document.getElementById("feedbackText").focus()}),s.actionRemove()}}},_=N;var W={name:"Visa video",action:function(){let t=document.querySelector("#mep_0 .mejs-inner .mejs-mediaelement audio").children[2].src,e=document.querySelector(".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.play_media_comment.ui-draggable"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("button");e.remove(),i.innerText="Close",i.addEventListener("click",()=>{n.remove()}),i.style="float:right",n.style="position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;",o.innerHTML=`<video controls width="580">
            <source src="${t}" />
        </video> `,n.append(i),n.append(o),document.body.append(n)}},A=W;var D="[Error] in code/example/instruction",F="code error",V="[Error] in text",X="text error";function $(){let t="";return window.getSelection?t=window.getSelection().toString():document.selection&&document.selection.type!="Control"&&(t=document.selection.createRange().text),t}function J(){R($(),D,F)}function Y(){R($(),V,X)}function Q(){let t=document.createElement("button");t.textContent="\u26A0",document.body.appendChild(t),t.style.cssText=`
            display: block;
            position: absolute;
            top: 90%;
            left: 90%;
    `;let e=document.createElement("div");e.innerText="Rapportera fel genom att markera texten och klicka p\xE5 en knapp",e.style.cssText=`
            display: none;
            position: absolute;
            border: 1px solid #888;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            background-color: white;
            padding: 10px;
            z-index: 1000;
        `;let n=document.createElement("button");n.textContent="x",n.style.cssText=`
            display: block;
            position: relative;
            top: 0%;
            left: 90%;
            z-index: 1001;
        `,e.appendChild(n);let o=document.createElement("button");o.textContent="Exempel/Kod",e.appendChild(o);let i=document.createElement("button");i.textContent="Text",e.appendChild(i),document.body.appendChild(e),t.addEventListener("click",c=>{let r=t.getBoundingClientRect();e.style.top=`${r.top-e.offsetHeight}px`,e.style.left=`${r.left}px`,e.style.display="block"}),n.addEventListener("click",()=>{e.style.display="none"}),o.addEventListener("click",()=>{J()}),i.addEventListener("click",()=>{Y()})}function R(t,e,n,o){let i,c=`
**Describe the error**
A clear and concise description of what the error is.
What error appeared when executing:
\`\`\`
${t}
\`\`\`

**Link to example**
${o}

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
`,r=`https://github.com/dbwebb-se/website/issues/new?title=${e}&body=${c}&labels=${n}`;console.log(r),window.open(r,"_blank")}var G={name:"Rapportera fel",action:function(){Q(),console.log(getSelectionText())}},H=G;var x=[T,S,_,B,A,I,H];async function Z(){document.body.appendChild(E);let t=document.getElementById(s.name);a.addEventListener(t,"click",s.manualRemove,a.permanent);let e=document.getElementById(p.name);a.addEventListener(e,"click",function(){a.clearContentListeners(),p.renderHtml(O)},a.permanent),await d.load()}function ee(){let t=document.getElementsByClassName("menuItem");for(let e of t)a.addEventListener(e,"click",function(n){x[n.target.id].action()},a.content),e.onmouseover=function(n){n.target.style.cursor="pointer",n.target.style.color="black"},e.onmouseleave=function(n){n.target.style.cursor="pointer",n.target.style.color="white"};a.addEventListener(document,"keydown",function(n){let o=n.code;if(key=String.fromCharCode(o),source=n.target,exclude=["input","textarea"],exclude.indexOf(source.tagName.toLowerCase())===-1){console.log("You pressed "+key+" (keyCode: "+o+").");let i=/Digit(\d+)/i,c=o.match(i);if(c!==null){let r=parseInt(c[1]);r>0&&r<=x.length&&x[r-1].action()}else if(o==="KeyQ")s.manualRemove();else if(o==="KeyS")document.getElementById("comment_submit_button").click();else if(o==="KeyJ"&&n.shiftKey){let r=document.getElementById("submission_to_view");r.options[r.selectedIndex].nextElementSibling.selected="selected",r.dispatchEvent(new Event("change",{bubbles:!0}))}else if(o==="KeyK"&&n.shiftKey){let r=document.getElementById("submission_to_view");r.options[r.selectedIndex].previousElementSibling.selected="selected",r.dispatchEvent(new Event("change",{bubbles:!0}))}}},a.content)}function O(){let t="";x.forEach(function(e,n){t+=`<div id="${n}" class="menuItem">${n+1}) ${e.name}</div>`}),E.childNodes[0].innerHTML=t,ee()}document.getElementById("menu")||Z().then(()=>{O()});})();
