### 呈現效果
將視訊鏡頭呈現在畫面上，並結合拍照、濾鏡等功能  
* 此課程未實做過，僅寫出課程中已理解的筆記
### 流程
1. 擷取視訊鏡頭資訊並呈現在html的video中
2. 將video的資訊呈現在html的canvas畫布上
3. 擷取canvas的畫布資訊做出拍照功能
4. 擷取convas的畫布RGB做出濾鏡功能
### 程式技巧
1. 取得視訊資訊並寫在html的video tag中
```
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}
```
2. 將視訊畫面呈現在html的canvas tag中，其中利用setInterval將video的資訊像動畫一樣不斷寫入convas中
```
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}
```
3. 拍照
```
function takePhoto() {
  // 播放拍照音效
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firsChild);
}
```
4. 濾鏡效果  
```
pixels.data[0]=R
pixels.data[1]=G
pixels.data[2]=B
pixels.data[3]=A
```
```
let pixels = ctx.getImageData(0, 0, width, height);
// pixels = redEffect(pixels);
// pixels = rgbSplit(pixels);
// pixels = greenScreen(pixels);
ctx.putImageData(pixels, 0, 0);

// 將紅色像素加深
function redEffect(pixels) { 
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

// 將RGB像素做位移，會呈現殘影的感覺
function rgbSplit(pixels) { 
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

// 將超過手動調節數值的RGB像素的透明度調為0，也就是不顯色
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
```