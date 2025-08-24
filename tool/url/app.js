function urlEncode() {
    var input = document.getElementById("input").value;
    var output = encodeURIComponent(input);
    document.getElementById("output").value = output;
}

function urlDecode() {
    var input = document.getElementById("input").value;
    var output = decodeURIComponent(input);
    document.getElementById("output").value = output;
}

function copyToClipboard() {
    var output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    var copyButton = event.target;
    copyButton.innerHTML = "コピーしました！";
    copyButton.classList.add("copy-success");
    setTimeout(function () {
        copyButton.innerHTML = "コピー";
        copyButton.classList.remove("copy-success");
    }, 2000);
}

