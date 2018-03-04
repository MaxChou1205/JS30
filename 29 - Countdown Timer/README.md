### 實作效果
實作一個倒數計時器，時間可由按鈕或輸入框做設定
### 實作步驟
1. 完成timer function
2. 完成顯示剩餘時間的function
3. 完成顯示結束時間的function
4. 完成按鈕呼叫timer的function
5. 完成輸入框呼叫timer的function
### 程式技巧
1. [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)和[clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)的應用。
另外，網路上還有關於setTimeout與setInterval的差異，未來可深入研究
```
function timer(seconds) {
    clearInterval(countdown); // 清除所有已存在的timer
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds); // 顯示剩餘時間
    displayEndTime(then); // 顯示結束時間

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown); // 清除timer
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}
```
2. 個位數字補0
```
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    display = `${minutes}:${remainderSeconds<10 ? '0' : ''}${remainderSeconds}`; // 個位數字補0
    timerDisplay.textContent = display;
    console.log(minutes, remainderSeconds);
}
```
3. 可直接藉由HTML的name select到元素
```
// select到document中name為customForm的元素
document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const minutes = this.minutes.value; // customForm 的子元素 minutes的值
    timer(minutes * 60);
    this.reset();
})
```