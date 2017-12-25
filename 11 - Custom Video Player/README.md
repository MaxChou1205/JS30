### 實現效果
利用HTML的video tag 製作影片撥放器
### 課程主旨
1.  抓到畫面上所有的DOM
2.  設定各自的功能funciton
3.  加上addEventListener監聽以執行各功能
### 語法
#### [video](https://www.w3schools.com/tags/ref_av_dom.asp)
##### 主要使用的屬性
* paused：Returns whether the audio/video is paused or not
* currentTime：Sets or returns the current playback position in the audio/video (in seconds)
* duration：Returns the length of the current audio/video (in seconds)
##### 主要使用的事件
* play：Fires when the audio/video has been started or is no longer paused
* pause：Fires when the audio/video has been paused
* timeupdate：Fires when the current playback position has changed

1. 控制播放
```
video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
window.addEventListener('keydown', togglePlay);

function togglePlay(e){
    if(e.type=="keydown" && e.keyCode!=32) // 如果是按下鍵盤但不是空白鍵的話則return
        return;
    const method = video.paused ? 'play':'pause';
    video[method]();
}
```
2. 變換播放鍵的圖示
```
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent=icon;
}
```
3. 快轉
```
skipButtons.forEach(button => button.addEventListener('click',skip))

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip) // 值是從html的data-skip給的(秒)
}
```
4. 控制音量鍵和播放速度
```
ranges.forEach(range => range.addEventListener('change',updateRange));
ranges.forEach(range => range.addEventListener('mousemove',updateRange));

function updateRange(){
    video[this.name] = this.value;
}
```
5. 影片播放時控制進度條
```
video.addEventListener('timeupdate',handleProgressBar);

function handleProgressBar(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
```
6. 手拉進度條
```
let mousedown=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e)); // 利用&&特性的簡潔寫法
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime=scrubTime;
}
```