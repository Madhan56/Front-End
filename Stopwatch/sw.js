let toggleBtn = document.getElementById('toggleBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let timeDisplay = document.getElementById('display');
let lapsList = document.getElementById('lapsList');

let timerInterval;
let isRunning = false;
let startTime;
let totalElapsedTime = 0;

function formatMilliseconds(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = ms % 1000;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}

function updateTimerDisplay() {
    timeDisplay.textContent = formatMilliseconds(totalElapsedTime);
}

toggleBtn.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        toggleBtn.textContent = 'Start';
    } else {
        startTime = Date.now() - totalElapsedTime;
        timerInterval = setInterval(function() {
            totalElapsedTime = Date.now() - startTime;
            updateTimerDisplay();
        }, 10);
        isRunning = true;
        toggleBtn.textContent = 'Stop';
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
    totalElapsedTime = 0;
    updateTimerDisplay();
    toggleBtn.textContent = 'Start';
    lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', function() {
    if (isRunning) {
        let lapItem = document.createElement('li');
        lapItem.textContent = formatMilliseconds(totalElapsedTime);
        lapsList.appendChild(lapItem);
    }
});

updateTimerDisplay();
