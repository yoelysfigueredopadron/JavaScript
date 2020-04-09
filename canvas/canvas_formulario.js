var texto = document.getElementById("textos_lineas");
var codBoton = document.getElementById("boton");
codBoton.addEventListener("click", dibujoPorClick);


var dibujoLineas = document.getElementById("dibujo");
var ancho = dibujoLineas.width;//obtenemos el ancho del canvas
var lienzo2 = dibujoLineas.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo2.beginPath();
  lienzo2.strokeStyle = color;
  lienzo2.moveTo(x_inicial, y_inicial);
  lienzo2.lineTo(x_final, y_final);
  lienzo2.stroke();
  lienzo2.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  /* Las variables y_inicial y x_final son declaradas fuera de la 'function dibujarLinea' por lo cual tienen un ambito
  global, las misma son utilizadas dentro del bucle while para calcularle un nuevo valor antes de ser utilizadas como
  argumentos en la 'function dibujarLinea'
  */
  var y_inicial;
  var x_final;
  color = "#AAF";

  for(var contador = 0; contador < lineas; contador++)
  {
    //la ecuacion (ancho / lineas) calcular el espacio que tendran las lineas dibujas en el canvas
    y_inicial = (ancho / lineas) * contador;
    x_final   = (ancho / lineas) * (contador + 1);
    dibujarLinea(color, 0, y_inicial, x_final, 300);
  }

  /*x_inicial, y_inicial, x_final, y_final estos parametros los iniciamos en 1 o 299 para visializar la linea completa porque
   canvas no muestra la linea completamente debido a los efectos visuales del Antialiasing*/
  dibujarLinea("black", 1, 1, 1, ancho-1);
  dibujarLinea("black", 1, ancho-1, ancho-1, ancho-1);
}
