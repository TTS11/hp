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
