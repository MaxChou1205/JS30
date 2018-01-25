### 實作效果
當滑鼠hover a tag時，會有動畫效果跟著滑鼠

### 實作流程
1. 抓到畫面上所有a tag，並加入mouseenter事件
2. 抓到所hover到的a tag位置
3. 將span指定到相對應的位置

### 程式技巧
1. 將所有a tag加上事件
```
const triggers = document.querySelectorAll('a');

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
```
2. 取得a tag的位置
```
const linkCoords = this.getBoundingClientRect();
```
3. 指定span到特定位置
```
const coord = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY, // 必須加上卷軸的高度，才能算出當前畫面的相對位置
    left: linkCoords.left + window.scrollX, // 必須加上卷軸的寬度，才能算出當前畫面的相對位置
    }

highlight.style.width = `${coord.width}px`;
highlight.style.height = `${coord.height}px`;
highlight.style.transform = `translate(${coord.left}px,${coord.top}px)`;
```
