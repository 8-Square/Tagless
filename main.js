const canvas = document.getElementById("app");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#4f4fa0"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);
var v = 40

function init() {
    window.requestAnimationFrame(draw);
}
function draw() {
    // // square
    var size = 100;
    var x = canvas.width / 2 - size / 2;
    var y = canvas.height / 2 - size / 2;

    ctx.fillStyle = "#039545";
    ctx.fillRect(x, y, size , size);
    ctx.restore()
    
    x +=v
    y +=v
    ctx.fillRect(x, y, size , size);
    ctx.save()

  window.requestAnimationFrame(draw);

}
//   ctx.clearRect(45, 45, 60, 60);
//   ctx.strokeRect(canvas.width /4, canvas.height / 4, canvas.width /2 , canvas.height / 2);

  init()