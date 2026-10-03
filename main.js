const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

var v = 40

function init() {
    createSquare(3)
    window.requestAnimationFrame(draw);
}
const colors = ["blue", "red", "green", "pink", "black", "yellow"]
var squares = []
const square = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 50,
    vx: 10,
    vy: 5,
    color: colors[Math.floor(Math.random() * 6)],
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

    square.x = canvas.width / 2 - square.size / 2;
    square.y = canvas.height / 2 - square.size / 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#9e9edb"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    square.draw
    var cx = (canvas.width / 2 - square.size / 2) - square.x;
    var cy = (canvas.height / 2 - square.size / 2) - square.y;

    square.x += cx * 0.03;
    square.y += cy * 0.03;

    // boundries
    if (square.y + square.vy > canvas.height - square.size||
        square.y < 0) {
            square.vy = -square.vy;
        }
    if (square.x + square.vx > canvas.width - square.size ||
        square.x < 0) {
            square.vx = -square.vx;
        }

    window.requestAnimationFrame(draw);

}

  init()