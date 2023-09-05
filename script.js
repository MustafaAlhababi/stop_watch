let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    updateDisplay();
}

function updateDisplay() {
    const formattedTime = padNumber(minutes) + ":" + padNumber(seconds) + ":" + padNumber(milliseconds);
    document.getElementById("timer").textContent = formattedTime;
}

function padNumber(number) {
    return number.toString().padStart(2, "0");
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);