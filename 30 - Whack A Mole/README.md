### 實作效果
就是個打地鼠遊戲
### 思維步驟
1. 做出random計時器，用在每一隻地鼠出現的時間
2. 做出random洞的產生器，用在每一隻地鼠出現的地點
3. 地鼠出現與消失的函式
4. 滑鼠點擊事件與函式
5. 開始遊戲的函式
### 程式技巧
1. 計時器
```
function randTime(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}
```
2. 洞的產生器
```
function randomHoles(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHoles(holes);
    }

    lastHole = hole;
    return hole;
}
```
3. 地鼠出現與消失相關的函式
```
function peep() {
    const time = randTime(200, 1000);
    const hole = randomHoles(holes);
    hole.classList.add("up");
    setTimeout(() => {
    hole.classList.remove("up");
    if (!timeout)
        peep();
    }, time);
}
```
4. 滑鼠點擊事件與函式
```
function bonk(e) {
    if (!e.isTrusted) // 為了防止某些假的點擊事件
        return;
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk));
```
5. 遊戲開始的函式
```
function startGame() {
    scoreBoard.textContent = 0;
    timeout = false;
    score = 0;
    peep();
    setTimeout(() => timeout = true, 10000);
}
```
### 未來延伸
可以將分數存在localStorage，做出遊戲歷史最高分等功能。