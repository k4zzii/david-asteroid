var canvas = document.getElementById('asteroid');
<<<<<<< HEAD
var image = document.getElementById('asteroidSVG');
var spaceBackground = new Image();
spaceBackground.src = "espace.png"
var ctx = canvas.getContext('2d');
ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth;
var posX = window.innerWidth;
var posY = window.innerHeight;
=======
var canvas2 = document.getElementById('asteroid');
var ctx = canvas.getContext('2d');
var rocket1 = canvas2.getContext('2d');
console.log(rocket1)
var posX = 200
var posY = 300
var rocketX = 400
var rocketY = 0
>>>>>>> origin/francois

function draw() {
  console.log('draw')
  if (canvas.getContext) {
<<<<<<< HEAD
    ctx.drawImage(spaceBackground, 0, 0)
    ctx.drawImage(image, posX/2, posY/2 + increase, 80, 80);
    console.log("ok")
  
=======
    ctx.fillStyle = 'rgb(200, 0, 0)'
    ctx.fillRect(posX, posY + increase, 50, 50);


>>>>>>> origin/francois
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
<<<<<<< HEAD
    increase += 40
    console.log('gravity', increase)
    ctx.clearRect(0, 0, 500, 500)
    draw()
=======
    posY += 20
>>>>>>> origin/francois
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



