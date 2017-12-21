### 實現效果
按住shift勾選範圍內的checkbox
### 程式語法
1.  主要邏輯(課程的範例)  
用inBetween變數標記範圍，再用迴圈跑每個checkbox去設定打勾
```
function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastCheck) {
        inBetween = !inBetween;
        console.log('start');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }

  lastCheck = this;
}
```
2. [網路的範例](https://stackoverflow.com/questions/659508/how-can-i-shift-select-multiple-checkboxes-like-gmail/659571#659571)，可以範圍勾選和取消
先將checkboxes變成array，再找出起始跟結束的位置  
之後利用迴圈從起始位置開始把checked的狀態變得跟lastCheck(第一次勾的checkbox)一樣
```
function handleCheck(e) {
  let checkboxArray=[];
  if (!lastCheck){
    lastCheck = this;
    return;
  }

  if (e.shiftKey) {
    checkboxArray=Array.from(checkboxes);
    
    let start = checkboxArray.indexOf(this); // 起始
    let end = checkboxArray.indexOf(lastCheck); // 結束
    let checkboxesToChange = checkboxArray.slice(Math.min(start,end),Math.max(start,end)+1)
                                          .forEach(checkbox => checkbox.checked=lastCheck.checked);       
  }
  lastCheck = this;
}
```