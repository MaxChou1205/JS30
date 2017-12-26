### 實現效果
利用keyup實現出入特定暗號時，網頁會有相對的回饋彩蛋
### 課程主旨
1.  addEventListener監聽keyup事件
2.  將輸入的字元丟到array裡做處理，並和暗號做匹配判斷
### 語法
將輸入的e.key存入pressed，再用splice保持pressed的字元數和暗號一樣，
```
const pressed = [];
const secretCode = "hello";

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    //pressed.splice(-secretCode.length-1,pressed.length-secretCode.length); // 字串處理的部分，擠掉第一個字，保持和暗號同字數，這是教學的寫法
    pressed.splice(0, pressed.length - secretCode.length); // 這樣寫好像也可以? 不確定，不過目前看這樣也是可以work的
    if (pressed.join('').includes(secretCode)) {
    console.log('ding ding');
    cornify_add(); // 作者include的JS中的function
    }
})
```