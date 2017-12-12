### 實現效果
以Array內建的常用property達成小練習
### 課程主旨
1.  介紹Array內建的常用property
### 練習題
1.  篩選 16 世紀出生的發明家  
2.  展示他們的姓和名  
3.  把他們按照年齡從大到小進行排序  
4.  計算所有的發明家加起來一共活了多少歲  
5.  按照他們活了多久來進行排序  
6.  篩選出一個網頁裡含有某個詞語的標題  
7.  按照姓氏來對發明家進行排序  
8.  統計給出數組中各個物品的數量
### 基本語法
1.  [filter](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)：過濾資料並篩出結果為true的資料組成新的array
```
// 篩選 16 世紀出生的發明家  
const filter = inventors.filter(function(inventor){
   if (inventor.year>=1500 && inventor.year<1600)
     return true;
 })
// arrow function
const filter = inventors.filter(inventor => (inventor.year>=1500 && inventor.year<1600));  
```
2.  [map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)：經由return運算後傳回一個新的array
```
// 展示他們的姓和名
const map = inventors.map(inventor => `${inventor.last} ${inventor.first}`);
```
3.  [sort](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)：將array中的element照運算條件重新排列
```
// 把他們按照年齡從大到小進行排序
const sort = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

// 按照他們活了多久來進行排序
const liveYear = inventors.sort(function(a,b){
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  if (last > next)
    return -1;
  else
    return 1;
})

// 按照姓氏來對發明家進行排序
const alpha = people.sort((a,b) => {
  const[aLast,aFirst] = a.split(', ');
  const[bLast,bFirst] = b.split(', ');

  return aLast > bLast ? 1 : -1;
})
```
4.  [reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)： Array.reduce()方法的參數是一個回呼函式，reduce()方法會由左至右的為陣列中的每個元素呼叫一次回呼函式，並將回呼函式的傳回值當作下一次呼叫回呼函式的參數傳入。
```
[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
});

// 計算所有的發明家加起來一共活了多少歲
const reduce = inventors.reduce((total,inventor) => {
  return total + (inventor.passed - inventor.year);
},0); // 0代表初始化total

const transportData = data.reduce((obj,item) => {
  if (!obj[item])
    obj[item] = 0;
  obj[item]++;
  return obj;
},{}) // {}代表初始化obj為一個物件
```
5.  map和filter搭配用法：在這裡的練習題是抓維基的某個網頁，並用Array.from()或是[...]將querySelectorAll抓到的NodeList轉成array  
之後先用**map**找出所有的textContent，再用**filter**過濾出textContent中含有'de'的element
```
// 篩選出一個網頁裡含有某個詞語的標題
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
// const links = [...category.querySelectorAll('a')];
const de = links.map(link => link.textContent)
                .filter(name => name.includes('de'));
```