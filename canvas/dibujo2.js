//Segundo dibujo
var dibujoLineas = document.getElementById("dibujo2");
var lienzo2 = dibujoLineas.getContext("2d");
var lineas = 30;
var contador = 0;
/* Las variables y_inicial y x_final son declaradas fuera de la 'function dibujarLinea' por lo cual tienen un ambito
global, las misma son utilizadas dentro del bucle while para calcularle un nuevo valor antes de ser utilizadas como
argumentos en la 'function dibujarLinea'
*/
var y_inicial;
var x_final;

while (contador < lineas)
{
  y_inicial = 10 * contador;
  x_final   = 10 * (contador + 1);
  dibujarLinea("#AAF", 0, y_inicial, x_final, 300);
  console.log("Contador " + contador);
  contador++;
}

/*x_inicial, y_inicial, x_final, y_final estos parametros los iniciamos en 1 o 299 para visializar la linea completa porque
 canvas no muestra la linea completamente debido a los efectos visuales del Antialiasing*/
dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 1, 299, 299, 299);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo2.beginPath();
  lienzo2.strokeStyle = color;
  lienzo2.moveTo(x_inicial, y_inicial);
  lienzo2.lineTo(x_final, y_final);
  lienzo2.stroke();
  lienzo2.closePath();
}
