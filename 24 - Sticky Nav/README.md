### 實現效果
卷軸往下滾時，navigation會保持在畫面最上方並出現標題列文字
### 程式技巧
1. 當卷軸高度大於nav的高度時加入class，做特效
```
const topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'; // 解決剛加入class時，nav會跳一下的問題
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0; // 解決剛加入class時，nav會跳一下的問題
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

// CSS
.fixed-nav nav{
  position: fixed;
  box-shadow: 0 5px rgba(0, 0, 0, 0.1)
}
```
2. nav中加入標題列文字
```
// CSS
.fixed-nav li.logo{
  max-width:500px;
}
```