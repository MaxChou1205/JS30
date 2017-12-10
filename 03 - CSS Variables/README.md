### 實現效果
宣告CSS變數並用JS控制CSS變數
### 課程主旨
1.  宣告CSS變數
2.  利用JS改動CSS變數的值
### 基本語法
1.  宣告CSS變數：  
其中:[root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)代表document的root element，也就是 <html> tag，所以常用於宣告全局的CSS變數  
```
:root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }
```
2.  使用CSS變數：  
```
img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
```
3.  取得HTML root element：  
```
document.documentElement
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // 設定<html>的style
```

### 小知識
1.  CSS 濾鏡 [filter](https://www.w3schools.com/cssref/css3_pr_filter.asp)：CSS提供的圖形特效，可調整圖片對比、亮度、銳化等  
2.  [dataset](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset)：HTML5中可以為元素添加非標準的自定義屬性，只需要加上 data- 前綴，可以隨便添加和命名。添加之後，可以通過元素的 dataset 屬性來訪問這些值
3.  NodeList 和 Array 的區別：  
NodeList是HTML的元素屬性，可以console查看NodeList的proto，其中有 forEach()、item()、keys() 等。而 Array 的 prototype 中有 map()、pop()、reduce() 等較多方法。