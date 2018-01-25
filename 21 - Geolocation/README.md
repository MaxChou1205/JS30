### 實作效果
利用web geolocation API實作在畫面上顯示方位和速度
* 未實作此課程，僅寫出課程上已理解的部分做筆記

### 程式技巧
1. [Geolocation](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation)
```
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
});
```