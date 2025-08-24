function getRandomNumber() {
return Math.floor(Math.random() * 99) + 2;
}

function isPrime(num) {
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    return false;
    }
}
return true;
}

function updateGame() {
const number = getRandomNumber();
const numberElement = document.getElementById('number');
const resultElement = document.getElementById('result');
const optionYesElement = document.getElementById('option-yes');
const optionNoElement = document.getElementById('option-no');
const nextButton = document.getElementById('next-button');
resultElement.textContent = '';
optionYesElement.classList.remove('disabled');
optionNoElement.classList.remove('disabled');
nextButton.classList.add('hidden');
numberElement.textContent = number;
optionYesElement.addEventListener('click', function() {
    if (isPrime(number)) {
    resultElement.textContent = '正解！素数です。';
    } else {
    resultElement.textContent = '不正解。素数ではありません。';
    }
    optionYesElement.classList.add('disabled');
    optionNoElement.classList.add('disabled');
    nextButton.classList.remove('hidden');
});
optionNoElement.addEventListener('click', function() {
    if (isPrime(number)) {
    resultElement.textContent = '不正解。素数です。';
    } else {
    resultElement.textContent = '正解！素数ではありません。';
    }
    optionYesElement.classList.add('disabled');
    optionNoElement.classList.add('disabled');
    nextButton.classList.remove('hidden');
});
nextButton.addEventListener('click', function() {
    location.reload();
});
}
updateGame();

