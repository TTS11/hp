const switchInput = document.getElementById('switch');
const DARK_MODE_KEY = 'darkMode';

// 初回アクセス時のローカルストレージからの取得
if (localStorage.getItem(DARK_MODE_KEY) === 'true') {
    document.body.classList.add('dark');
    switchInput.checked = true;
}

switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
        document.body.classList.add('dark');
        localStorage.setItem(DARK_MODE_KEY, 'true'); // ローカルストレージへの保存
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem(DARK_MODE_KEY, 'false'); // ローカルストレージへの保存
    }
});
// 曜日を取得する関数
function getDayOfWeek() {
    var date = new Date();
    var day = date.getDay(); // 0 = 日曜日, 1 = 月曜日, ..., 6 = 土曜日
    return day;
}

// 木曜日であればメッセージを表示する関数
function checkThursday() {
    var day = getDayOfWeek();
    if (day === 4) { // 木曜日の場合
        document.getElementById("message").innerText = "今日は文春の発売日！";
    }
}

// ページ読み込み時に木曜日かどうかをチェックする
window.onload = function() {
    checkThursday();
};
