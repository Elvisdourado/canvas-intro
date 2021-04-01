const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

function degreesToRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

// Retângulos

// Mudar a cor do que vamos pintar
ctx.fillStyle = "green";

// Retângulo sólido
//           x    y  width height
ctx.fillRect(50, 50, 100, 100);

ctx.strokeStyle = "purple";

// Retângulo vazado
ctx.strokeRect(300, 300, 100, 100);

// Limpar (apagar) uma área retangular do canvas
ctx.clearRect(100, 100, 50, 50);

// Linhas

// Risco azul

ctx.beginPath();

ctx.lineWidth = 10;
ctx.strokeStyle = "blue";

ctx.moveTo(40, 220);

ctx.lineTo(40, 320);

ctx.stroke();

ctx.closePath();

// Risco laranja

ctx.beginPath();

ctx.strokeStyle = "orange";

ctx.moveTo(60, 320);

ctx.lineTo(120, 320);

ctx.stroke();

ctx.closePath();

// Arcos (curvas)

ctx.beginPath();

// arc(x, y, radius, startAngle, endAngle, anticlockwise);
ctx.arc(230, 50, 50, degreesToRadians(0), degreesToRadians(180));

ctx.stroke();

ctx.closePath();

ctx.beginPath();

ctx.moveTo(250, 120);

// arcTo(x1, y1, x2, y2, radius);
ctx.arcTo(320, 150, 230, 150, 20);

ctx.stroke();

ctx.closePath();
