### 實現效果
將時間字串加總
### 流程
1. 取得所有li中data-time屬性的值，將時間換算為秒並累加求得總時間（單位：秒）
2. 將總時間轉化為新的格式“XX小時XX分XX秒”
### 語法
1. 取得html物件並從nodeList轉成array
```
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```
2. .
* 第一個map取得dataset時間字串
* 第二個map將字串切成"分"和"秒"並轉成float做運算
* reduce加總
```
const seconds = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
const [mins, secs] = timeCode.split(':').map(parseFloat);

return (mins * 60) + secs;
})
.reduce((total, vidSeconds) => total + vidSeconds);
```
3. 做時間運算
```
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(hours, mins, secondsLeft);
```