
let showVideo = {
    name: "Visa video",
    action: function () {
        const mediaUrl = document.querySelector("#mep_0 .mejs-inner .mejs-mediaelement audio").children[2].src;
        const originalVideo = document.querySelector(".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.play_media_comment.ui-draggable")
        
        const wrapper = document.createElement("div");
        const newElement = document.createElement("div");
        const exitButton = document.createElement("button");

        originalVideo.remove();

        exitButton.innerText = "Close";
        exitButton.addEventListener("click", () => {
            wrapper.remove();
        });
        exitButton.style = "float:right";

        wrapper.style = "position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;";

        newElement.innerHTML = `<video controls width="580">
            <source src="${mediaUrl}" />
        </video> `;

        wrapper.append(exitButton);
        wrapper.append(newElement);
        document.body.append(wrapper);
    },
};



export default showVideo;
