var canvas = document.getElementById('asteroid');
var image = document.getElementById('asteroidSVG');
var spaceBackground = new Image();
spaceBackground.src = "espace.png"
var ctx = canvas.getContext('2d');
ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth;
var posX = window.innerWidth;
var posY = window.innerHeight;

function draw() {
  console.log('draw')
  if (canvas.getContext) {
    ctx.drawImage(spaceBackground, 0, 0)
    ctx.drawImage(image, posX/2, posY/2 + increase, 80, 80);
    console.log("ok")
  
  } else {
    // canvas-unsupported code here
    console.log("no ok")
  }
}
let increase = 0

document.addEventListener('keydown', (e) => {

  console.log(e.key)
  switch (e.key) {
    case 'ArrowUp':
      increase -= 20
      ctx.clearRect(0, 0, 500, 500)
      draw()
      setTimeout(gravity, 2000)
  }

  function gravity() {
    increase += 40
    console.log('gravity', increase)
    ctx.clearRect(0, 0, 500, 500)
    draw()
  }
})