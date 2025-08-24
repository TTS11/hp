const button = document.getElementById("button");
const score = document.getElementById("score");
const timeValue = document.getElementById("time-value");
let count = 0;

let time = 30;
let timer = setInterval(function () {
    time--;
    timeValue.textContent = time;
    if (time === 0) {
        clearInterval(timer);
        button.removeEventListener("click", handleClick);
        alert("あなたのスコアは " + count + " ポイント!!");
    }
}, 1000);

// ボタンをクリックしたらスコアを増やす
function handleClick() {
    count++;
    score.textContent = count;
    button.style.position = "absolute";
    button.style.left = Math.floor(Math.random() * (window.innerWidth - button.clientWidth)) + "px";
    button.style.top = Math.floor(Math.random() * (window.innerHeight - button.clientHeight)) + "px";
    button.style.backgroundColor = "#FFFF00";
    setTimeout(function () {
        button.style.backgroundColor = "#4CAF50";
    }, 200);
}

button.addEventListener("click", handleClick);
