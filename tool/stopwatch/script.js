const display = document.querySelector('.display');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000) + elapsedTime;
    display.textContent = formatTime(currentTime);
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime += Math.floor((Date.now() - startTime) / 1000);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = null;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
