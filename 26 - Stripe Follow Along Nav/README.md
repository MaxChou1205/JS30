### 實現效果
滑鼠hover navigation的時候，會出現相對應大小的dropdown視窗
### 程式技巧
1. 算出nav跟dropdown的位置和大小
```
const dropdownCoords = dropdown.getBoundingClientRect();
const navCoords = nav.getBoundingClientRect();

const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // nav可能不是在最頂端，dropdown的高度必須-nav的高度才是正確的高度位置
    left: dropdownCoords.left - navCoords.left // 同上，對x軸校正
};

background.style.setProperty('width', `${coords.width}px`);
background.style.setProperty('height', `${coords.height}px`);
background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
```
2. 滑鼠快速來回各ul時，可能會造成動畫顯示的延遲，所以用以下方法
```
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) // 在滑鼠快速移動的同時，有可能remove了'trigger-enter'，卻在0.15秒後加入'trigger-enter-active'，所以加入這個判斷，讓內容不會那麼快出現
          this.classList.add('trigger-enter-active')
      }, 150);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}
```