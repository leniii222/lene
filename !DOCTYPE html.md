<!DOCTYPE html>  
<html lang="en">  
<head>  
<meta charset="UTF-8">  
<title>Pixel Galaxy Question</title>  
<style>  
html, body {  
  margin: 0;  
  padding: 0;  
  width: 100%;  
  height: 100%;  
  background: black;  
  overflow: hidden;  
  font-family: 'Press Start 2P', monospace;  
}  
  
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');  
  
#galaxy {  
  position: absolute;  
  width: 100%;  
  height: 100%;  
  background: radial-gradient(circle at center, #1a0033, #000);  
}  
  
.star {  
  position: absolute;  
  width: 4px;  
  height: 4px;  
  background: white;  
  image-rendering: pixelated;  
  animation: twinkle 2s infinite alternate;  
}  
  
@keyframes twinkle {  
  from { opacity: 0.3; }  
  to { opacity: 1; }  
}  
  
#center {  
  position: absolute;  
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  text-align: center;  
  color: white;  
}  
  
button {  
  margin: 20px;  
  padding: 15px 25px;  
  background: none;  
  border: 3px solid white;  
  color: white;  
  font-size: 14px;  
  cursor: pointer;  
}  
  
#noBtn {  
  position: absolute;  
}  
  
.explosion {  
  animation: boom 1s forwards;  
}  
  
@keyframes boom {  
  0% { transform: scale(1); background: white; }  
  100% { transform: scale(50); background: yellow; }  
}  
</style>  
</head>  
  
<body>  
<div id="galaxy"></div>  
  
<div id="center">  
  <h1>Will you be my valentine?</h1>  
  <button onclick="yesClick()">YES</button>  
  <button id="noBtn">NO</button>  
</div>  
  
<script>  
const galaxy = document.getElementById('galaxy');  
  
// stars  
for (let i = 0; i < 150; i++) {  
  const s = document.createElement('div');  
  s.className = 'star';  
  s.style.left = Math.random()*100 + '%';  
  s.style.top = Math.random()*100 + '%';  
  galaxy.appendChild(s);  
}  
  
// NO button escape  
const noBtn = document.getElementById('noBtn');  
noBtn.addEventListener('mouseover', () => {  
  noBtn.style.left = Math.random()*80 + '%';  
  noBtn.style.top = Math.random()*80 + '%';  
});  
  
// YES explosion  
function yesClick() {  
  document.body.innerHTML = '';  
  const star = document.createElement('div');  
  star.className = 'star explosion';  
  star.style.left = '50%';  
  star.style.top = '50%';  
  document.body.appendChild(star);  
  
  setTimeout(() => {  
    document.body.innerHTML = '<h1 style="color:white;text-align:center;margin-top:40vh">✨ chagexute ✨</h1>';  
  }, 900);  
}  
</script>  
</body>  
</html>  
