var canvas = document.getElementById('asteroid');
var ctx = canvas.getContext('2d');
var posX = 200
var posY = 300
function draw() {
  console.log('draw')
  if (canvas.getContext) {
    //var ctx = canvas.getContext('2d');
    console.log("ok")

    ctx.fillStyle = 'rgb(200, 0, 0)'
    ctx.fillRect(posX, posY + increase, 50, 50);



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
    increase += 20
    console.log('gravity', increase)
    ctx.clearRect(0, 0, 500, 500)
    draw()
  }
})