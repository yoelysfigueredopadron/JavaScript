//tercer dibujo
var dibujoLineas = document.getElementById("dibujo3");
var lienzo3 = dibujoLineas.getContext("2d");
var lineas = 30;
//usamos la variable contadorLineasDesc para calcular el valor de x_final antes de dibujar la linea en la grafica
var contadorLineasDesc = lineas;
var y_inicial;
var x_final;

for (contador = 0; contador < lineas; contador++)
{
  y_inicial = 10 * contador;
  x_final   = 10 * (contadorLineasDesc - 1);
  dibujarLinea("#AAF", 300, y_inicial, x_final, 300);
  contadorLineasDesc--;
}

dibujarLinea("black", 299, 1, 299, 299);
dibujarLinea("black", 1, 299, 299, 299);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo3.beginPath();
  lienzo3.strokeStyle = color;
  lienzo3.moveTo(x_inicial, y_inicial);
  lienzo3.lineTo(x_final, y_final);
  lienzo3.stroke();
  lienzo3.closePath();
}
