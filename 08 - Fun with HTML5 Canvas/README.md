### 實現效果
讓整個畫面成為畫布，滑鼠成為畫筆
### 課程主旨
1.  HTML5的canvas
2.  mousedown、mousemove、mouseup、mouseout等計算滑鼠位置
3.  hsl色碼
### 程式語法
1.  [Canvas](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API)
#### 起始
```
const convas = document.querySelector('#draw');
const ctx = convas.getContext('2d');
```
#### 基本屬性
```
ctx.strokeStyle = '#BADA55'; // 線條的顏色
ctx.lineJoin = 'round'; // 線條相交的方式，有 round | bevel | miter 圓交、斜交、斜接三種。
ctx.lineCap = 'round'; // 筆觸的形狀，有 round | butt | square 圓、平、方三種。
ctx.lineWidth = 10; // 線條的粗細
```
#### 繪圖
```
ctx.beginPath(); // 開始一條新的作圖路徑
ctx.moveTo(lastX, lastY); // 作圖的起始位置
ctx.lineTo(e.offsetX, e.offsetY); // 作圖的終點位置
ctx.stroke(); // 作圖成像
```
2.  [HSL](https://www.w3schools.com/colors/colors_hsl.asp)：彩虹顯色的色彩模式
* H代表色調，值為0~360
* S代表飽和度，值為0%~100%
* L代表亮度，值為 黑0%~100%白  
```
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;

if (hue >= 360)
  hue = 0;
hue++;
```
3.  滑鼠動作
```
convas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // 在ES6中
  // lastX=e.offsetX;
  // lastY=e.offsetY;
  // 可以寫作 [lastX, lastY] = [e.offsetX, e.offsetY];
});

convas.addEventListener('mousemove', draw);
convas.addEventListener('mouseup', () => isDrawing = false);
convas.addEventListener('mouseout', () => isDrawing = false);
```