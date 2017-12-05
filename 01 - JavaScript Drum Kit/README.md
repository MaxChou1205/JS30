### 實現效果
利用按鍵asdfghjkl觸發播放音效</div>
### 課程主旨
1.  觸發鍵盤keydown事件
2.  利用audio播放音效
3.  套用css特效
### 基本語法
1.  抓取html dom：  
`document.querySelector('className')`
2.  註冊事件：  
`window.addEventListener('event', function);`
3.  加入或移除css效果：  
`classList.add('className')`
4.  Template literals：可以參考[這裡](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)  
    `` `String text ${expression}` ``  
    ```
	  var a = 5;  
	  var b = 10;  
	  console.log(`Fifteen is ${a + b}.`);  
    ```
    
5.  forEach：JS中的NodeList可使用迴圈forEach  
```
// Code from http://es6-features.org/#StatementBodies  
// ES6  
nums.forEach(v => {
	if (v % 5 === 0)
		fives.push(v);
})
// ES5  
nums.forEach(function (v) {
	if (v % 5 === 0)
		five.push(v);
})
```
6.  transitionend事件：會在CSS transition 結束後觸發  
`key.addEventListener('transitionend',removeTransition);`
