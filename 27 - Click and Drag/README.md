### 實作效果
實現滑鼠橫向拖曳，產生畫面滑動的效果
### 程式說明
1. 按下滑鼠的事件
```
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft; // 紀錄按下滑鼠時的X座標
    scrollLeft = slider.scrollLeft; // 紀錄按下滑鼠時的卷軸X座標
});
```
2. 滑鼠移動事件
```
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); // 滑鼠移動的距離
    slider.scrollLeft = scrollLeft - walk;
});
```