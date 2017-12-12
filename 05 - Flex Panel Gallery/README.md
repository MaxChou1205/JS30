### 實現效果
實現伸縮圖片牆
### 課程主旨
1.  以flex切成9*9大小的圖片版型
2.  以JS控制放大/縮小圖片及字體位移的class
### 過程
1.  將.panels 設置為 `display:flex`
2.  設定每個子panel的flex值為1
3.  針對每個子panel，設為`display:flex`，設置其flex主軸方向 `flex-direction: column`
4.  控制.panle 的子元素`<p>`中的文字垂直、水平居中 `justify-content: center` `align-items: center`
5.  設定點擊圖片後文字移動的樣式 `transform: translateY(-100%)`
6.  設定點擊圖片展開後的圖片的flex值 `flex: 5`(.open)
### 基本語法
1.  [flex](http://www.oxxostudio.tw/articles/201501/css-flexbox.html) ![flex](https://mdn.mozillademos.org/files/12998/flexbox.png)
```
.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
}

.panel {
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```
### 補充說明
教學中設了兩個class，'open-active'跟'open'，是為了讓圖片先縮小再放大的動畫效果呈現更完美，  
如果不用類似的動畫效果的話，可利用`transition: transform 0.5s 0.7s`，並將動畫的效果都做在open的class裡。