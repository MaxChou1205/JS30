###實現效果
藉由滑鼠滑動控制bar改變影片的播放速度
###程式實作
```
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener("mousemove", function (e) {
    console.log("pageY", e.pageY); // 滑鼠在整個畫面的Y軸位置
    console.log("offsetTop", this.offsetTop); // bar 物件距離畫面頂端的Y軸位置
    console.log("offsetHeight", this.offsetHeight); // bar物件的高度

    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
})
```
