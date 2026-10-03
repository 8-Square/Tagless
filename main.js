const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

var v = 40

function init() {
    createSquare(3)
    console.log(squares)
    window.requestAnimationFrame(draw);
}
const colors = ["blue", "red", "green", "pink", "black", "yellow"]
var squares = []
// const square = {
//     x: canvas.width / 2,
//     y: canvas.height / 2,
//     size: 50,
//     vx: 10,
//     vy: 5,
//     color: colors[Math.floor(Math.random() * 6)],

// }

    // square.x = canvas.width / 2 - square.size / 2;
    // square.y = canvas.height / 2 - square.size / 2;

function createSquare(createlimit) {
    for (let i = 0; i <= createlimit; i++) {
        const Square = {
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            color: colors[Math.floor(Math.random() * 6)],
            size: Math.floor(Math.random() * 75) + 10,
            vx: 10,
            vy: 10,
            draw() {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.size, this.size)
            }
        }
        squares.push(Square);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#9e9edb"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    squares.forEach(element => {
        element.draw()
        // square.draw
        var cx = (canvas.width / 2 - element.size / 2) - element.x;
        var cy = (canvas.height / 2 - element.size / 2) - element.y;

        element.x += cx * 0.01;
        element.y += cy * 0.01;

        // boundries
        if (element.y + element.cy > canvas.height - element.size||
            element.y < 0) {
                element.cy = -element.cy;
            }
        if (element.x + element.cx > canvas.width - element.size ||
            element.x < 0) {
                element.cx = -element.cx;
            }

    });



    window.requestAnimationFrame(draw);

}

  init()