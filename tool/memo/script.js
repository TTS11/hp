const memoTextarea = document.getElementById('memo');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');

window.onload = function () {
    memoTextarea.value = localStorage.getItem('memo');
};

saveBtn.onclick = function () {
    localStorage.setItem('memo', memoTextarea.value);
    alert('メモを保存しました。');
};

clearBtn.onclick = function () {
    memoTextarea.value = '';
    localStorage.removeItem('memo');
};
