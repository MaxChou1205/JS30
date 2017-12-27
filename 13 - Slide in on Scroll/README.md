### 實現效果
圖文並列的文章，圖片會隨著捲動卷軸的位置出現或消失
### 課程流程
1.  addEventListener監聽scroll事件
2.  計算畫面、卷軸、圖片的高度，加入class讓圖片浮出或消失
### 語法
1. 課程一開始就有function debounce()，目的是為了減少scroll的觸發次數以增加效能，主要是利用timer來達到目的
```
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
    var context = this,
        args = arguments;
    var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}
```
2. 視窗與圖片的高度計算
![soyaine大大做的圖，效果不錯，借用一下](https://camo.githubusercontent.com/ed074de6a562245fb635615573de2b71b56c9777/68747470733a2f2f636c2e6c792f3077337031763179337131342f496d616765253230323031372d30372d3138253230617425323031302e32342e31302532302545342542382538412545352538442538382e706e67)
* `window.scroll`：滑動時的上緣。  
* `window.innerHeight`：視窗的上下範圍。故window.scroll+window.innerHeight等於滑動時的下緣。  
* `sliderImage.height`：圖片本身的上下長度。  
* `slideInAt=window.scroll+window.innerHeight - sliderImage.height/2`：代表滑下來時到圖片一半的全長度。  
* `sliderImage.offsetTop`：代表圖片上緣在全部頁面的高度。  
* `sliderImage.height`：表圖片本身的高度。  
* `imageBottom = sliderImage.offsetTop + sliderImage.height`：代表圖片底部在全部頁面的高度。  
* `isHalfShown = slideInAt > sliderImage.offsetTop`：當畫面移動超過圖片本身的高度時顯示。  
* `isNotScrolledPast = window.scrollY < imageBottom`：當畫面移動時圖片的下緣高度未到視窗上緣時。  
當isHalfShown&&isNotScrolledPast皆存在時，代表視窗移動已經超過圖片的一半時，以及圖片的下緣還沒超過視窗上部時，添加動畫的class皆存在，當其中一個不存在時即取消。
```
function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop; // 滑過一半的圖片
    const isNotScrolledPast = window.scrollY < imageBottom; // 未完全滑過的圖片
    if (isHalfShown && isNotScrolledPast)
        sliderImage.classList.add('active');
    else
        sliderImage.classList.remove('active');
    })
}
```