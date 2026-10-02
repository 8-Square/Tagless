// 1. Get the canvas element from the DOM
const canvas = document.getElementById("app");

// 2. Set the canvas's internal drawing buffer to match the window's physical size.
// Why? This prevents the canvas from stretching its default 300x150 size to fit the screen.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3. Get the 2D rendering context. This 'ctx' object gives us all the drawing tools.
const ctx = canvas.getContext("2d");

// Fill the entire background with a dark blue color
ctx.fillStyle = "#4f4fa0"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set up the font styles for our text
ctx.font = "bold 48px sans-serif";
ctx.fillStyle = "rgb(235, 161, 173)"; // A bright pinkish-red
ctx.textAlign = "center";

// Draw the text exactly in the center of the screen
ctx.fillStyle = "rgb(210, 13, 46)"; // A bright pinkish-red
ctx.fillRect(canvas.width /4, canvas.height / 4, canvas.width /2 , canvas.height / 2);


ctx.fillStyle = "rgb(235, 161, 173)"; // A bright pinkish-red
ctx.fillText("Hello, tagless!", canvas.width / 2, canvas.height / 2);
