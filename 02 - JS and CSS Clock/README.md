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