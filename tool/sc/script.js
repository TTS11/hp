// キャンバスサイズを画面のサイズに合わせる
const canvas = document.getElementById('screensaver');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function drawScreensaver() {
    // スクリーンセーバーの描画コードをここに追加します

    // 例：ランダムな色の円を描画する
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50;
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

    // 一定の間隔でスクリーンセーバーを再描画する
    requestAnimationFrame(drawScreensaver);
}

// 初回の描画を開始
drawScreensaver();
