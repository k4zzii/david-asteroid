var canvas = document.getElementById('asteroid');
var image = document.getElementById('asteroidSVG');

function draw() {
  console.log('draw')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    ctx.drawImage(image, 0, 0, 80, 80);
    console.log("ok")
  } else {
    // canvas-unsupported code here
    console.log("no ok")
  }
}
