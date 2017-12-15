### 實現效果
以Array內建的常用property達成小練習2
### 課程主旨
1.  介紹Array內建的property(**some**、**every**、**find**、**findIndex**、**splice**、**slice**)
### 練習題
1.  是否至少有一個人大於19歲 
2.  是否全部人都大於19歲  
3.  找到ID為823423的物件  
4.  找到ID為823423的物件的index並從array中刪除
### 基本語法
1.  [some](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)：會呼叫回呼函式來對陣列中所有的元素進行測試，若是有**任何一個元素**測試通過，則立即返回true，不再對其他元素進行測試
```
// 是否至少有一個人大於19歲  
const isAudit = people.some(person => (new Date()).getFullYear() - person.year >=19); 
```
2.  [every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)：會呼叫回呼函式來對陣列中所有的元素進行測試，若是**所有元素**測試通過，則返回true
```
// 是否全部人都大於19歲
const allAudit = people.every(person => (new Date()).getFullYear() - person.year >=19);
```
3.  [find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)：傳回回呼函式所找到的第一個元素，沒有的話則傳回`undefined`
```
// 找到ID為823423的物件
const comment = comments.find(comment => comment.id==823423);
```
4.  [findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)： 傳回回呼函式所找到的第一個元素的index，沒有的話則傳回`-1`
```
// 找到ID為823423的物件的index
const index = comments.findIndex(comment => comment.id==823423);
```
5.  [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)：新增或刪除元素來更改**原array**的數據
```
comments.splice(index,1); // 刪除第index項的元素

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum'); // 在index為2的位置插入'drum'
// myFish ["angel", "clown", "drum", "mandarin", "sturgeon"]
```
6.  [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)：回傳array index開始到index結束**（不包括結束）**的部分拷貝到一個新數組對象。原始array不會被修改
```
const newComments = [
  ...comments.slice(0,index),
  ...comments.slice(index+1)
];

```