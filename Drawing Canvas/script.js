let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;

ctx.beginPath();
ctx.translate(x, y);
ctx.moveTo(-5, 5);
ctx.lineTo(0, -5);
ctx.lineTo(5, 5);
ctx.lineTo(-5, 5);
ctx.fill();