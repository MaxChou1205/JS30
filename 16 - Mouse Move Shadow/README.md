### 實現效果
在頁面上移動滑鼠，文字會隨著滑鼠的位置產生陰影
### 語法
1. 取得滑鼠位置並產生陰影
```
let x = e.offsetX;
let y = e.offsetY;

// 因為mousemove是下在hero區塊，如果滑鼠在文字區塊內的話，補正位置
if (this !== e.target) { 
x = x + e.target.offsetLeft;
y = y + e.target.offsetTop;
}

// 公式算出陰影位置
const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((y / height * walk) - (walk / 2));

text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)`; // 產生陰影
```