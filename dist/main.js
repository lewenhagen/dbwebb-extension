(()=>{var s=function(){let n=/https?:\/\/w+.student.bth.se\/~\w{4}\d{2}\/dbwebb-kurser.*/i,i=document.getElementById("speedgrader_iframe").contentWindow.document.getElementById("submission_preview").innerText.match(n);i!==null&&window.open(i,"_blank")};console.log("magic script is online.");var e=document.createElement("div");e.style.height="400px";e.style.width="600px";e.style.position="absolute";e.style.top=window.innerHeight/2-200+"px";e.style.left=window.innerWidth/2-300+"px";e.style.border="5px solid black";e.style.padding="1em";e.style.backgroundColor="rgba(113, 77, 168, 0.86)";e.style.color="white";e.style.fontSize="24px";document.body.appendChild(e);var l={"1) Open students link":s};function d(){e.innerHTML=`
    <span class="openextension">1) Open students link</span>
    `,r()}function r(){let n=document.getElementsByClassName("openextension");for(let o of n)o.addEventListener("click",function(t){console.log("triggered"),l[t.target.innerText](),e.parentNode.removeChild(e)}),o.onmouseover=function(t){t.target.style.cursor="pointer"}}d();})();
