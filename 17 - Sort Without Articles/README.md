### 實現效果
排列字串array，以字卡形式呈現在畫面上
### 語法
1. 以regular express移除字串開頭的a、an、the等冠詞
```
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
```
2. 字串排序
```
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
```
3. 呈現在畫面上
```
// 以map取代forEach，創造出<li>字串
// 再以join將array打平成字串
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
```