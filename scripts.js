var canvas = document.getElementById('asteroid');
var canvas2 = document.getElementById('asteroid');
var ctx = canvas.getContext('2d');
var rocket1 = canvas2.getContext('2d');
console.log(rocket1)
var posX = 200
var posY = 300
var rocketX = 400
var rocketY = 0

function draw() {
  console.log('draw')
  if (canvas.getContext) {
    ctx.fillStyle = 'rgb(200, 0, 0)'
    ctx.fillRect(posX, posY + increase, 50, 50);


  } else {
    // canvas-unsupported code here
    console.log("no ok")
  }
}

document.addEventListener('keydown', (e) => {

  console.log(e.key)
  switch (e.key) {
    case 'ArrowUp':
      posY -= 20
      setTimeout(gravity, 2000)
  }

  function gravity() {
    posY += 20
  }

}
)//end of addEventListener




function drawAst() {
  ctx.clearRect(0, 0, 500, 500)
  ctx.beginPath()
  ctx.fillRect(posX, posY, 100, 100);
  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fill();
  ctx.closePath();

}



function drawRock() {
  ctx.clearRect(0, 0, 500, 500)
  ctx.beginPath()
  ctx.fillRect(rocketX, rocketY, 100, 100);
  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(posX, posY, 100, 100);
  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fill();
  ctx.closePath();
  rocketX -= dx

}

function gravity() {
  posY += 20
}

ctx.beginPath()
ctx.fillRect(rocketX, rocketY, 100, 100);
ctx.fillStyle = 'rgb(200, 0, 0)'
ctx.fill();
ctx.closePath();


var dx = 2


function callGame() {
  //drawAst()
  drawRock()

}
setInterval(callGame, 100)



