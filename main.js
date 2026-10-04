const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

var v = 40

function init() {
    createSquare(Math.floor(Math.random() * 20))
    console.log(squares)
    window.requestAnimationFrame(draw);
}
const colors = ["blue", "red", "green", "pink", "black", "yellow"]
var squares = []
var mouseX
var mouseY

function createSquare(createlimit) {
    for (let i = 0; i <= createlimit; i++) {
        const Square = {
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            color: colors[Math.floor(Math.random() * 6)],
            size: Math.floor(Math.random() * 100) + 10,
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

        var dx = mouseX - element.x;
        var dy = mouseY - element.y;

        var distance = Math.sqrt(dx * dx + dy * dy)

        // element.vx -= dx
        // element.vy -= dy

        element.x += cx * 0.01;
        element.y += cy * 0.01;

        if (distance < 175) {
            var s = 175 - distance
            element.x += - dx * s * 0.01
            element.y += - dy * s * 0.01
        }
        


        // boundries
        if (element.y + element.cy > canvas.height - element.size||
            element.y < 0) {
                element.cy = -element.cy;
        };
        if (element.x + element.cx > canvas.width - element.size ||
            element.x < 0) {
                element.cx = -element.cx;
        };
        

    });
    window.requestAnimationFrame(draw);
}
canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // console.log(`${mouseX}, ${mouseY}`)
})


  init()