const refreshBtn = document.getElementById("refresh-btn");
const addressBar = document.getElementById("address-bar");
const webview = document.getElementById("webview");

const enter = 13;

window.onkeydown = (e) => {
    if (e.keyCode === enter) {
        let url = addressBar.value;
        
        if (url === "") return;
        
        if (!(url.startsWith("http://") || url.startsWith("https://"))) {
            url = "https://" + url;
        }
        
        webview.src = url;
        addressBar.value = url;
        console.log("loading");
        webview.loadUrl(url);
    }
};

webview.addEventListener("did-start-loading", () => {
    refreshBtn.classList.add("rotate");
    console.log("started");
});

webview.addEventListener("did-stop-loading", () => {
    refreshBtn.classList.remove("rotate");
    console.log("stopped");
});
