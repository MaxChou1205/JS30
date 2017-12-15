### 實現效果
Fetch搭配filter實現auto complete
### 課程主旨
1.  fetch到endpoint的資料
2.  利用array的filter跟reg exp找出相符的資料
3.  利用相符的資料作出auto complete的效果
### 基本語法
1.  [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch/fetch)：是 XMLHttpRequest 獲取資源新的替代方案，以資源的位置作為參數傳入後，會回傳一個promise，若是成功，會再有個response
```
fetch(endpoint).then(blob => blob.json())
               .then(data => {
                 cities.push(...data);
               });
}

// 網路上的範例
const myImage = document.querySelector('img');
    
    fetch('flowers.jpg')
    .then(response => response.blob())
	.then(myBlob => {
		const objectURL = URL.createObjectURL(myBlob);
		myImage.src = objectURL;
	});
```
2.  [array擴展](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)：利用array的擴展運算符號可以直接攤平array，讓array的數據直接push到另一個array中
```
cities.push(...data);

// ES5
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
```
3.  [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
```
const regex = new RegExp(value,'gi'); // 第二個參數的g代表global，i代表忽略大小寫(Case-insensitive search)

return place.city.match(regex);
const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
```
4. 教學中的千分位function
```
function numberWithCommas(x) { // 千分位
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```