const wordLists = [
    ["オハヨー!", "花子ちゃんオハヨー!😂🤣🤗", "お疲れ様〜😎(^o^)", "コンバンワ🥰🥰～"],
    ["何してるのかい、✋❓", "元気カ、イ❓🎶😎(*/ω＼*)"],
    ["何してるのかい、✋❓", "元気カ、イ❓🎶😎(*/ω＼*)", "あれ😅、朝と夜間違えたのかな🤷👨おぢさんはまだ起きてますヨ"],
    ["連絡くれナイから😓(┬┬﹏┬┬)", "おぢさんは家🏠、で、ヒトリ😭😅😅"],
    ["カナシイな～＾＾😢（笑）", "会いたい、ナ(*/ω＼*)(^人^)😅", "こんど"],
    ["ランチ、でも🍚ド、ウ❓（笑）", "ちょっと😎電話📞できるか、ナ（￣ー￣?）", "旅行🧳いカ、ナイ❓(?_?)（笑）"],
    ["今日、は雨ダネ!😭😓¬_¬ ¬_¬", "今日、は晴れダネ🌤🌤（笑）", "きょう、も、😀😄(❁´◡`❁)"],
    ["楽しい😂😂❤️", "綺麗な^_^^_^", "美しい😍😍😂", "かわいいo(*^＠^*)o😍"],
    ["花子チャン😂😂🤣、", "花子ちゃん💕😘（笑）🎶、", "今から寝ようと思ってたのに、(つ∀-)ｵﾔｽﾐｰ😎目が覚めちゃったヨ😅😂😂", "ご飯おいしかったヨ❗😋😋"],
    ["あいたいな🎈🎈🥰(￣y▽,￣)╭ ", "と,o(*^＠^*)o遊びたい🎶😂😂"],
    ["会社をサボるなんて、☆*: .｡. o(≧▽≦)o .｡.:*☆😅ダメだゾ🤣", "こんな遅い時間🌃になにしてるの❓🙄😂", "おじさんは元気だヨ💪","今度遊ばなイ❓😀"]
];

function generate() {
    const output = document.getElementById("output");
    let sentence = "";
    for (let i = 0; i < wordLists.length; i++) {
        const randomIndex = Math.floor(Math.random() * wordLists[i].length);
        sentence += wordLists[i][randomIndex];
    }
    output.textContent = sentence;
}
function copyToClipboard() {
    const output = document.getElementById("output");
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = output.textContent;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("文章がコピーされました。");
}
