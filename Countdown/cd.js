let time = 0;
let countdown;

function setTimer() {
    time = parseInt(document.getElementById('timeInput').value);
    document.getElementById('timeDisplay').textContent = formatTime(time);
}

function startTimer() {
    if (time > 0) {
        let remainingTime = time;
        countdown = setInterval(() => {
            remainingTime--;
            document.getElementById('timeDisplay').textContent = formatTime(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(countdown);
                document.getElementById('timeDisplay').textContent = "Time's up!";
            }
        }, 1000);
    }
}

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
