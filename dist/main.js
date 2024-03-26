(()=>{var m={permanentListeners:[],permanent:"permanent",content:"content",contentListeners:[],addEventListener:function(t,e,n,o){t.addEventListener(e,n),o===m.permanent?m.permanentListeners.push([t,e,n]):m.contentListeners.push([t,e,n])},clearAllListeners:function(){m.permanentListeners.forEach(t=>{t[0].removeEventListener(t[1],t[2])}),m.permanentListeners=[],m.clearContentListeners()},clearContentListeners:function(){m.contentListeners.forEach(t=>{t[0].removeEventListener(t[1],t[2])}),m.contentListeners=[]}},i=m;var g={data:{},name:"Load storage",set:function(t,e){g.data[t]=e,chrome.storage.local.set({[t]:e})},load:async function(){await chrome.storage.local.get(function(t){for(let[e,n]of Object.entries(t))g.data[e]=n})},clear:async function(){g.data={},await chrome.storage.local.clear()}},d=g;var k={name:"Close menu",actionRemove:function(){d.data.exitOnAction===!0&&k.manualRemove()},manualRemove:function(){document.getElementById("menu").remove(),i.clearAllListeners()}},s=k;var b={name:"Settings",addEventListeners:function(t){let e=document.getElementById("addToStudentUrlPath");e.focus(),i.addEventListener(e,"input",function(r){d.set("addToStudentUrlPath",r.target.value)},i.content);let n=document.getElementById("exitOnAction");i.addEventListener(n,"change",function(){d.set("exitOnAction",n.checked)},i.content);let o=document.getElementById("return");i.addEventListener(o,"click",function(r){i.clearContentListeners(),t()},i.content);let l=document.getElementById("reset");i.addEventListener(l,"click",async function(r){await d.clear(),i.clearContentListeners(),b.renderHtml(t)},i.content)},renderHtml:function(t){let e=d.data.addToStudentUrlPath,n=d.data.exitOnAction==!0,o=`
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
            shift+k: v\xE4lj f\xF6reg\xE5ende inl\xE4mning att visa
            shift+j: v\xE4lj n\xE4sta inl\xE4mning att visa
            q: st\xE4nger ner menyn.<br>
            </div>
            <button id="return">Return</button>
            <button id="reset">Reset storage</button>
            `,l=document.getElementById("menuContent");l.innerHTML=o,b.addEventListeners(t)}},p=b;var w=300,L=400,c=document.createElement("div");c.id="menu";c.style.height=`${w}px`;c.style.width=`${L}px`;c.style.position="absolute";c.style.top=window.innerHeight/2-w/2+"px";c.style.left=window.innerWidth/2-L/2+"px";c.style.border="5px solid black";c.style.padding="1em";c.style.backgroundColor="rgba(113, 77, 168, 0.86)";c.style.color="white";c.style.fontSize="24px";var C=document.createElement("div");C.id="menuContent";var f=document.createElement("div");f.style.position="absolute";f.style.right=0;f.style.bottom=0;var y=document.createElement("button");y.id=s.name;y.innerText=s.name;var x=document.createElement("button");x.id=p.name;x.innerText=p.name;f.appendChild(x);f.appendChild(y);c.appendChild(C);c.appendChild(f);var E=c;var H={name:"Open student link",action:function(){let t=d.data.addToStudentUrlPath,e=/(https?:\/\/)?.*student.bth.se\/~\w{4}\d{2}\/dbwebb-kurser\/\w+\//i,o=document.getElementById("speedgrader_iframe").contentWindow.document.getElementById("submission_preview"),l=o.innerText.match(e);if(l!==null){let r=`${l[0].startsWith("http")?"":"https://"}${l[0]}me/${t||""}`;console.log(r),console.log(t),window.open(r,"_blank")}else{let r=/\w{4}\d{2}/i,a=o.innerText.match(r);if(a!==null){let u=`https://www.student.bth.se/~${a}/dbwebb-kurser/`;window.open(u,"_blank")}}s.actionRemove()}},I=H;var P={name:"Open Umbridge link",action:function(){let t=/https:\/\/umbridge\.arnesson\.dev\/results\/inspect\/\d+\/[\w]+/i,e=document.querySelectorAll("div.comment_flex > span");e.length==0&&(e=document.querySelectorAll("[data-testid=submission-comment]"));for(var n=e.length-1;n>=0;n--){let o=e[n].innerHTML.match(t),l=!1;if(o!==null){window.open(o,"_blank");break}}s.actionRemove()}},_=P;var O={name:"Calculate quiz score",action:function(){let t=document.querySelectorAll(".assignment_score"),e=0,n=0;t.forEach(o=>{o.parentElement.querySelectorAll(".tooltip").forEach(r=>{let a=r.innerText.replace(/\s/g,""),u=/(-|\d[\d,]*)\/(\d[\d,]*)/,h=a.match(u);if(h){h[1]==="-"&&(h[1]=0);let R=parseFloat(h[1]),$=parseFloat(h[2]);e+=R,n+=$}})}),alert(`Po\xE4ng: ${e} / ${n}
Score: ${Math.ceil(e/(n/2)*10)/10/2}`),s.actionRemove()}},B=O;function j(t){let e=document.createElement("div");e.style="width:600px;height:800px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;";let n=document.createElement("button");n.textContent="St%C3%A4ng",n.addEventListener("click",function(){e.parentNode.removeChild(e)}),e.appendChild(n),t.forEach(function(o,l){let r=document.createElement("div");r.innerHTML="<h2>kmom0"+(l+1)+"</h2>",r.innerHTML+=o.body,e.appendChild(r)}),document.body.appendChild(e)}var K={name:"Show all redovisningstexter (not working, need Canvas token)",action:function(){let t=window.location.pathname,e=window.location.search,n=t.split("/")[2],o=/student_id=(\d+)/i,l=e.match(o)[1],r="Bearer [INSERT KEY HERE]",a=`/api/v1/courses/${n}/students/submissions?student_ids[]=${l}`;fetch(a,{headers:{Authorization:r}}).then(function(u){return u.json()}).then(function(u){j(u)}),s.actionRemove()}},S=K;var M={name:"Skriv kommentar",action:function(){if(!document.getElementById("feedbackText")){let t=document.getElementById("speed_grader_comment_textarea")?"speed-franklin.js":"franklin.js";document.body.appendChild(document.createElement("script")).src="https://booklets.emilfolino.se/"+t,new Promise(e=>setTimeout(e,500)).then(()=>{document.getElementById("feedbackText").focus()}),s.actionRemove()}}},T=M;var v=[I,_,T,B,S];async function U(){document.body.appendChild(E);let t=document.getElementById(s.name);i.addEventListener(t,"click",s.manualRemove,i.permanent);let e=document.getElementById(p.name);i.addEventListener(e,"click",function(){i.clearContentListeners(),p.renderHtml(A)},i.permanent),await d.load()}function q(){let t=document.getElementsByClassName("menuItem");for(let e of t)i.addEventListener(e,"click",function(n){v[n.target.id].action()},i.content),e.onmouseover=function(n){n.target.style.cursor="pointer",n.target.style.color="black"},e.onmouseleave=function(n){n.target.style.cursor="pointer",n.target.style.color="white"};i.addEventListener(document,"keydown",function(n){let o=n.code;if(key=String.fromCharCode(o),source=n.target,exclude=["input","textarea"],exclude.indexOf(source.tagName.toLowerCase())===-1){console.log("You pressed "+key+" (keyCode: "+o+").");let l=/Digit(\d+)/i,r=o.match(l);if(r!==null){let a=parseInt(r[1]);a>0&&a<=v.length&&v[a-1].action()}else if(o==="KeyQ")s.manualRemove();else if(o==="KeyS")document.getElementById("comment_submit_button").click();else if(o==="KeyJ"&&n.shiftKey){let a=document.getElementById("submission_to_view");a.options[a.selectedIndex].nextElementSibling.selected="selected",a.dispatchEvent(new Event("change",{bubbles:!0}))}else if(o==="KeyK"&&n.shiftKey){let a=document.getElementById("submission_to_view");a.options[a.selectedIndex].previousElementSibling.selected="selected",a.dispatchEvent(new Event("change",{bubbles:!0}))}}},i.content)}function A(){let t="";v.forEach(function(e,n){t+=`<div id="${n}" class="menuItem">${n+1}) ${e.name}</div>`}),E.childNodes[0].innerHTML=t,q()}document.getElementById("menu")||U().then(()=>{A()});})();
