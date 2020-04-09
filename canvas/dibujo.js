var d = document.getElementById("dibujito");//variable para obtener el canvas 'id=dibujito'
var lienzo = d.getContext("2d");//variable para obtener el lienzo de canvas mediante la variable 'd'

lienzo.beginPath();//comienzo del dibujo en el lienzo de canvas
lienzo.strokeStyle = "red";//color de la linea o trazo
lienzo.moveTo(100, 100);//punto inicial
//vamos a dibujar un cuadrado
//los parametros en los metodos moveTo y lineTo son (x, y)
lienzo.lineTo(100, 200);//primera linea de la izquierda
lienzo.lineTo(200, 200);//segunda linea de abajo
lienzo.lineTo(200, 100);//tercera linea de la derecha
lienzo.lineTo(100, 100);//cuarta linea de arriba
lienzo.stroke();//termina la linea o trazo
lienzo.closePath();//terminamos el dibujo en el lienzo de canvas

//llamamos la function dibujarLinea para dibujar lineas dentro del cuadrado
dibujarLinea("blue", 150, 100, 150, 200);
dibujarLinea("blue", 100, 150, 200, 150);
dibujarLinea("black", 100, 100, 200, 200);
dibujarLinea("black", 200, 100, 100, 200);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
