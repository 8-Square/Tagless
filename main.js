const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    // background
    ctx.fillStyle = "#4f4fa0"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // square
    var size = 100;
    var x = canvas.width / 2 - size / 2;
    var y = canvas.height / 2 - size / 2;
    ctx.fillStyle = "#039545";
    ctx.fillRect(x, y, size , size);

    // square 2
    size = 200;
    x = canvas.width / 4 - size / 2;
    y = canvas.height / 2 - size / 2;
    ctx.fillStyle = "#039545";
    ctx.fillRect(x, y, size , size);

    // square 3
    size = 150;
    x = canvas.width / 1.5 - size / 2;
    y = canvas.height / 2 - size / 2;
    ctx.fillStyle = "#039545";
    ctx.fillRect(x, y, size , size);

    // square 4
    size = 50;
    x = canvas.width / 3 + size / 2;
    y = canvas.height / 2 - size / 2;
    ctx.fillStyle = "#039545";
    ctx.fillRect(x, y, size , size);

}
//   ctx.clearRect(45, 45, 60, 60);
//   ctx.strokeRect(canvas.width /4, canvas.height / 4, canvas.width /2 , canvas.height / 2);

  init()