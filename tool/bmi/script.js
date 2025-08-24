function calcNormalWeight() {
    // 身長を取得する
    const height = document.getElementById("height").value;

    // 適正体重を計算する
    const normalWeight = (height / 100) ** 2 * 22;

    // 結果を表示する
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `あなたの適正体重は ${normalWeight.toFixed(1)}kg です。`;
}
