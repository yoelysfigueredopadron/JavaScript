var dibujoLineas = document.getElementById("dibujo5");
var lienzo5 = dibujoLineas.getContext("2d");
var lineas = 30;
var contarLineasDesc = lineas;
var x_inicial;
var y_final;

for (contador = 0; contador < lineas; contador++)
{
  x_inicial = 10 * (contarLineasDesc + 1 - 1);
  y_final   = 10 * (contador + 1);
  dibujarLinea("#AAF", x_inicial, 0, 0, y_final);
  contarLineasDesc--;
}

dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 1, 1, 299, 1);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo5.beginPath();
  lienzo5.strokeStyle = color;
  lienzo5.moveTo(x_inicial, y_inicial);
  lienzo5.lineTo(x_final, y_final);
  lienzo5.stroke();
  lienzo5.closePath();
}
