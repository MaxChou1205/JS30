### 實現效果
藉由多層div了解事件的冒泡機制和生成
### 程式技巧
1. 當點擊最中間的div(three)時，會依序出現three、two、one，因為瀏覽器的冒泡機制會將上層的html都觸發點擊事件，以ul來說，點擊li同時也會觸發到ul。但當capture設為true時(預設為false)，觸發順序會改為由上到下，所以是one、two、three
```
function logText(e){
    console.log(this.classList.value);
  }

  divs.forEach(div => {
    div.addEventListener('click',logText,{
      capture:true //
    });
  })
```
2. 當once設為true(預設為false)，點擊事件只能觸發一次。e.stopPropagation()則可以停止瀏覽器繼續冒泡觸發事件(類似return)
```
function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); // 
  }

  divs.forEach(div => {
    div.addEventListener('click',logText,{
      capture:false,
      once:true // 
    });
  })