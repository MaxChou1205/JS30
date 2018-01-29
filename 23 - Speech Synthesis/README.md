### 實現效果
利用瀏覽器的API實現朗讀文字
### 程式技巧
1. 取得瀏覽器支援的所有語音
```
const msg = new SpeechSynthesisUtterance(); // new一個新的語音朗讀物件

speechSynthesis.addEventListener('voiceschanged',populateVoices);

function populateVoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
    .filter(voice=>voice.lang.includes('en')) // 過濾語言，非必要
    .map(voice=>`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  }
```
2. 選擇下拉選單時，更變語音
```
voicesDropdown.addEventListener('change',setVoice);
function setVoice(){
    msg.voice=voices.find(voice=>voice.name===this.value);
    toggle();
  }

function toggle(startOver=true){ // 呼叫function沒有輸入參數時，會自動帶入預設值true
    speechSynthesis.cancel();
    if (startOver)
      speechSynthesis.speak(msg);
  }
```
3. 針對各控制項加入事件，可以控制聲音快慢、高低和內容
```
options.forEach(option=>option.addEventListener('change',setOption));

function setOption(){
    msg[this.name]=this.value;
    toggle();
  }
```
4. 說話和停止的按鈕
```
speakButton.addEventListener('click',toggle);
// stopButton.addEventListener('click',function(){ // 因為addEventListener內不能直接接function，只能接function名稱，所以這樣寫
//   toggle(false);
// });
stopButton.addEventListener('click',()=>toggle(false));
```