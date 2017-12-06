### 實現效果
利用CSS+JS實做時鐘轉動效果
### 課程主旨
1.  CSS transform 旋轉效果
2.  CSS transition 移動效果
3.  JS 時間函數與間隔
### 基本語法
1.  旋轉效果：  
```
  transform-origin: 100%; /*旋轉的基準點*/  
  transform: rotate(90deg); /*旋轉的角度*/
```
2.  動畫效果：  
```
  transition: all 0.05s; /*動畫時間*/
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1); /*動畫曲線*/
```
3.  註冊時間間隔：  
`setInterval(function, time);`
### 延伸
1. 教學中，時針是和秒針一樣每一小時跳動一次，若要模擬更加真實的時鐘，可使時針在一小時內緩慢的移動到下一個時間點。所以可以利用分鐘，計算每一分鐘對時針的角度影響，將加到時針角度上即可。
```
  const hourDeg = (90 + (hour / 12) * 360 + (min / 12 / 60) * 360);
```
2. 未來可利用CSS的[Animations](https://www.w3schools.com/css/css3_animations.asp)達到指針平滑移動的效果，待改進。