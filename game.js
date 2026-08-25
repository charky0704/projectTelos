const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#050510";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#202040";
ctx.fillRect(0, 480, canvas.width, 60);

ctx.fillStyle = "#00ffff";
ctx.fillRect(100, 440, 40, 40);
