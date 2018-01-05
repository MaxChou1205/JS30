### 實現效果
實作一個模擬菜單的網頁，可以新增菜色(item)並做勾選
### 語法
1. 先對submit做事件綁定  
`e.preventDefault() 可以防止submit之後刷新頁面`
```
addItems.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item);
    populatelist(items, itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}
```
2. 產生menu的list
```
function populatelist(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done?'checked':''} />
        <label for="item${i}">${plate.text}</label>
    </li>
    `
    }).join('');
}
```
3. 觸發勾選事件
```
itemsList.addEventListener('click',toggleDone);

function toggleDone(e){
    if (!e.target.matches('input'))
    return;
    
    const el=e.target;
    const index=el.dataset.index;
    items[index].done=!items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populatelist(items,itemsList);
}
```
4. [localStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)：可以將值暫存在瀏覽器中，**除非手動清除否則會永遠存在**，存入的值必須是字串
* [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)：可以將值暫存在瀏覽器中，**網頁關閉後值則被清除**，存入的值必須是字串
```
localStorage.setItem('items',JSON.stringify(items)); // 存值，先將物件轉成字串存入
const items = JSON.parse(localStorage.getItem('items')) //取值，將取出的字串轉成物件