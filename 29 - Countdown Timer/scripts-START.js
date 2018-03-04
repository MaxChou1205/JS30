let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
    clearInterval(countdown); // 清除所有已存在的timer
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown); // 清除timer
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    display = `${minutes}:${remainderSeconds<10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log(minutes, remainderSeconds);
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endDisplay.textContent = `Be Back At ${hour}:${minutes<10?'0':''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const minutes = this.minutes.value; // customForm 的子元素 minutes的值
    timer(minutes * 60);
    this.reset();
})