const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

var v = 40

function init() {
    createSquare(Math.floor(Math.random() * 20));
    console.log(squares);
    window.requestAnimationFrame(draw);
}
const colors = ["blue", "red", "green", "pink", "black", "yellow"];
var squares = [];

var mouseX;
var mouseY;
var clickX;
var clickY;

var gameOver = false
var raf;
var gamePlaying = true;

function createSquare(createlimit) {
    for (let i = 0; i <= createlimit; i++) {
        const Square = {
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            color: colors[Math.floor(Math.random() * 6)],
            size: Math.floor(Math.random() * 100) + 10,
            vx: Math.floor(Math.random() * 30) + 5,
            vy: Math.floor(Math.random() * 30) + 5,
            sw: Math.floor(Math.random() * 9) + 1,
            draw() {
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.sw
                ctx.strokeRect(this.x, this.y, this.size, this.size);
            }
        }
        squares.push(Square);
    }
}

function draw() {
    if (gameOver) {
        window.cancelAnimationFrame(raf)
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#9e9edb"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // "death" zone
    ctx.strokeStyle = "#151313e6"
    ctx.lineWidth = 3
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
    // ctx.strokeRect(canvas.width / 2, canvas.height / 2, 60, 60)
    ctx.stroke();

    for (const element of squares) {

        // Draws element
        element.draw()

        
        var cx = (canvas.width / 2 - element.size / 2) - element.x;
        var cy = (canvas.height / 2 - element.size / 2) - element.y;

        var dx = mouseX - element.x;
        var dy = mouseY - element.y;

        var distance = Math.sqrt(dx * dx + dy * dy);
        var centerDistance = Math.sqrt(cx * cx + cy * cy)

        // element.vx -= dx
        // element.vy -= dy

        element.x += cx * 0.01;
        element.y += cy * 0.01;

        // repulse the squares based off the distance
        if (distance < 135) {
            var s = 135 - distance;
            element.x += - dx * s * 0.01;
            element.y += - dy * s * 0.01;
        }
        
        // if a square is in the center, trigger the lose sequence
        if (centerDistance < 100) {
            gameOver = true;
        }

    };

    if (gameOver) {
        window.cancelAnimationFrame(raf);
        Lose();
        return;

    }
    raf = window.requestAnimationFrame(draw);
}

function Lose() {
    // opaque rectangle
    ctx.fillStyle = "#44455bae";
    ctx.fillRect(canvas.width / 2 - canvas.width / 8, canvas.height / 2 - canvas.height / 8, canvas.width / 4, canvas.height / 4 + 30);

    // you lose message
    ctx.font = "bold 36px sans-serif";
    ctx.fillStyle = "#e5ef35";
    ctx.textAlign = "center";
    ctx.fillText("You Lose", canvas.width / 2, canvas.height / 2)

    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Click in the box to restart", canvas.width / 2, canvas.height / 2 + 36)

}
function restart() {
    squares = []
    createSquare(Math.floor(Math.random() * 20));
    gameOver = false
    raf = window.requestAnimationFrame(draw);
}


canvas.addEventListener("mousemove", (e) => {
    // window.requestAnimationFrame(draw);
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // console.log(`${mouseX}, ${mouseY}`)
})

canvas.addEventListener("mouseout", (e) => {
    if (gamePlaying) {
        window.cancelAnimationFrame(raf);
        gamePlaying = false
    }
} ) 

canvas.addEventListener("mouseenter", (e) => {
    if (!gamePlaying) {
        window.requestAnimationFrame(draw);
        gamePlaying = true
    }
})

canvas.addEventListener("click", (e) => {
    if (!gameOver) {
        return;
    }

    const rect = canvas.getBoundingClientRect();
    clickX = e.clientX - rect.left;
    clickY = e.clientY - rect.top;

    // get dimensions of rect

    // ctx.fillRect(canvas.width / 2 - canvas.width / 8, canvas.height / 2 - canvas.height / 8, canvas.width / 4, canvas.height / 4 + 30);
    var rectX = canvas.width / 2 - canvas.width / 8
    var rectY = canvas.height / 2 - canvas.height / 8
    var rectW =  canvas.width / 4
    var rectH = canvas.height / 4 + 30

    if (clickX > rectX && clickX < rectX + rectW && clickY > rectY && clickY < rectY + rectH) {
        restart();
        console.log("RESTARTED")
    }
});


  init()