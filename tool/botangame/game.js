const button = document.getElementById("button");

button.addEventListener("click", function () {
    // ボタンをランダムな位置に移動する
    button.style.position = "absolute";
    button.style.left = Math.floor(Math.random() * (window.innerWidth - button.clientWidth)) + "px";
    button.style.top = Math.floor(Math.random() * (window.innerHeight - button.clientHeight)) + "px";

    // ボタンを光らせる
    button.style.backgroundColor = "#FFFF00";
    setTimeout(function () {
        button.style.backgroundColor = "#4CAF50";
    }, 200);
});
