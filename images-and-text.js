const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px Helvetica";
ctx.fillStyle = "red";

// Texto sólido (preenchido)

ctx.fillText("Hello world!", 50, 50);

// Texto vazado

ctx.font = "30px Verdana";

ctx.lineWidth = 2;

ctx.strokeStyle = "blue";
ctx.strokeText("Hello world!", 50, 100);

// Imagens

const img = new Image();
img.src = "./fireball.png";

// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 200, 90, 50);
// });

// img.onload = () => {
//   ctx.drawImage(img, 0, 200, 90, 50);
// };

window.addEventListener("load", () => {
  let fireballX = 0;
  let fireballY = 0;

  function draw(x, y) {
    // Limpa todo o canvas
    ctx.clearRect(0, 0, 400, 400);

    // Desenha a imagem na coordenada dinâmica x
    ctx.drawImage(img, x, y, 90, 50);
  }

  // Invoca a draw a cada 10 milisegundos, e incrementa o contador da posição x da imagem
  setInterval(() => {
    draw(fireballX, fireballY);
    if (fireballX < 400 - 90) {
      fireballX += 3;
      fireballY += 0.5;
    }
  }, 10);
});
