var canvas = document.getElementById('asteroid');
var image = document.getElementById('asteroidSVG');
var rocket = new Image();
rocket.src = "rocket.svg";
var spaceBackground = new Image();
spaceBackground.src = "espace.png"
var ctx = canvas.getContext('2d');
ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth
var posX = window.innerWidth
var posY = window.innerHeight
var rocketX = 800
var rocketY = 0

function draw() {
    console.log('draw')
    if (canvas.getContext) {


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



function drawRock() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.drawImage(spaceBackground, 0, 0)
    ctx.drawImage(rocket, rocketX, rocketY, 120, 120);
    ctx.drawImage(image, posX / 2, posY / 2, 110, 110);
    rocketX -= dx

}

function gravity() {
    posY += 20
}

var dx = 15


function callGame() {
    //drawAst()
    drawRock()

}
setInterval(callGame, 100)


