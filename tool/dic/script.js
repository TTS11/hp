const dictionary = [
    { word: "フィヨルド", definition: "氷河が浸食したことにより形成された複雑な地形の湾・入り江のこと。" },
];

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", searchDictionary);

function searchDictionary() {
    const searchTerm = searchInput.value;
    let results = [];

    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i].word.includes(searchTerm)) {
            results.push(dictionary[i]);
        }
    }

    displayResults(results);
}

function displayResults(results) {
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.innerHTML = "辞書に登録されていません。";
        return;
    }

    for (let i = 0; i < results.length; i++) {
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `<h3>${results[i].word}</h3><p>${results[i].definition}</p>`;
        resultsDiv.appendChild(wordDiv);
    }
}
