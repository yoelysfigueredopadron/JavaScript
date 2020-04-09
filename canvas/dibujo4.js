var dibujoLineas = document.getElementById("dibujo4");
var lienzo4 = dibujoLineas.getContext("2d");
var lineas = 30;
var x_inicial;
var y_final;

for (contador = 0; contador < lineas; contador++)
{
  x_inicial = 10 * contador;
  y_final   = 10 * (contador + 1);
  dibujarLinea("#AAF", x_inicial, 0, 300, y_final);
}

dibujarLinea("black", 299, 1, 299, 299);
dibujarLinea("black", 1, 1, 299, 1);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo4.beginPath();
  lienzo4.strokeStyle = color;
  lienzo4.moveTo(x_inicial, y_inicial);
  lienzo4.lineTo(x_final, y_final);
  lienzo4.stroke();
  lienzo4.closePath();
}
