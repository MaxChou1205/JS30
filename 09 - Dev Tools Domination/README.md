### 課程主旨
chrome dev tool中的console小技巧
### 基本語法
1. console.log的用法
*  %s string  
*  %d int  
*  %f float  
*  %o Object  
*  %c 照第二個參數顯示style
```
console.log("輸出一個字符串 %s ", "log"); 
console.log("輸出一個整數是 %d ", 1.23); //1 
console.log("輸出一個小數是 %f ", 1.23); //1.23 
console.log("%c不同樣式的輸出效果", "color: #00fdff; font-size: 2em;");
```
2. log外的console
```
console.warn("三角感嘆號圖標，淡黃色背景") 
console.error("紅叉圖標，紅字紅色背景"); 
console.info("藍色圓形感嘆號圖標");
```
3.  清空console
`console.clear()` 或是 `快捷鍵 Ctrl ＋ L`
4.  console.assert(para1,para2)：若para1回傳false的話則console.log(para2)。若para1為true則不顯示para2
```
console.assert(1 ===0, "Wrong!!");

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
```
5. console.table()：以表格的形式輸出，如果只輸出其中的某一列，可以加上第二個參數
```
console.table(dogs);
console.table(dogs, ["age"]);
```
6. 
* console.group()：以分組的形式輸出，預設展開
* console.groupCollapsed()：預設收合
```
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
}); 
```
7. console.time()：用 time("name") 和 timeEnd("name") 分別控制開始點和結束點，它們兩的參數表示當前計時的名稱，可以自定義但需要保持相同
```
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});
```