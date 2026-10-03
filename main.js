const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#4f4fa0"; 
var v = 40

function init() {
    window.requestAnimationFrame(draw);
}
const square = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 50,
    vx: 10,
    vy: 5,
    color: "blue",
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

    square.x = canvas.width / 2 - square.size / 2;
    square.y = canvas.height / 2 - square.size / 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    square.draw();
    
    square.x += (square.vx - (Math.random() * 10))
    square.y += (square.vy - (Math.random() * 10))

    
    ref = window.requestAnimationFrame(draw);

}
//   ctx.clearRect(45, 45, 60, 60);
//   ctx.strokeRect(canvas.width /4, canvas.height / 4, canvas.width /2 , canvas.height / 2);

  init()