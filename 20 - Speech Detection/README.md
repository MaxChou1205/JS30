### 實作效果
將所說的話做語音辨識輸出在畫面上
* 未實作此課程，僅寫出課程上已理解的部分做筆記
### 流程
1. 在chrome上申請使用speech的API
2. 將語音辨識的結果呈現在畫面上
3. 說話停頓時，產出新的段落，並重新開始新的語音辨識
### 程式技巧
1. 註冊麥克風的API
```
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.start();
```
2. 將語音辨識的成果呈現在p tag上
```
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;
});
```
3. 說話停頓時產生新段落
```
recognition.addEventListener('end', recognition.start);

// 在recognition的result監聽事件中加入
if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
}
```