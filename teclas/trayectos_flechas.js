var teclas ={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var fondoDeDibujo = document.getElementById("area_de_dibujo");
var papel = fondoDeDibujo.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("black", -1, 0, -1, 300, papel);//borde izquierdo
dibujarLinea("black", 0, 301, 300, 301, papel);//borde inferior
dibujarLinea("black", 301, 0, 301, 300, papel);//borde derecho
dibujarLinea("black", 0, -1, 300, -1, papel);//borde superior
dibujarLinea("white", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, x_actual, y_actual, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_actual, y_actual);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorLinea = "green";
  var mover = 2;
  switch (evento.keyCode)
  {
    case teclas.UP :
          dibujarLinea(colorLinea, x, y, x, y - mover, papel);
          y = y - mover;
          break;
    case teclas.DOWN :
          dibujarLinea(colorLinea, x, y, x, y + mover, papel);
          y = y + mover;
          break;
    case teclas.LEFT :
          dibujarLinea(colorLinea, x, y, x - mover, y, papel);
          x = x - mover;
         break;
    case teclas.RIGHT :
          dibujarLinea(colorLinea, x, y, x + mover, y, papel);
          x = x + mover;
         break;
    default: console.log("otra tecla")
  }
}
