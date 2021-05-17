var canvas = document.getElementById('asteroid');
var image = document.getElementById('asteroidSVG');
var rocket = new Image();
rocket.src = "rocket.svg";
var spaceBackground = new Image();
spaceBackground.src = "espace.png"
var ctx = canvas.getContext('2d', {alpha:false});
ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth
var posX = 200
var posY = 300
var rocketX = 400
var rocketY = 0

function draw() {
    console.log('draw')
    if (canvas.getContext) {
        ctx.drawImage(spaceBackground, 0, 0)


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
    ctx.drawImage(rocket, rocketX, rocketY, 80, 80);
    ctx.drawImage(image, posX / 2, posY / 2, 80, 80);
    rocketX -= dx

}

function gravity() {
    posY += 20
}

var dx = 2


function callGame() {
    //drawAst()
    drawRock()

}
setInterval(callGame, 100)


