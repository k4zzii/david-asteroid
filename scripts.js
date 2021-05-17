var canvas = document.getElementById('asteroid');

function draw() {
  console.log('draw')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    console.log("ok")

    ctx.fillStyle = 'rgb(200, 0, 0'
    ctx.fillRect(10, 10, 50, 50);
  } else {
    // canvas-unsupported code here
    console.log("no ok")
  }
}
