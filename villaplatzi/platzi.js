var vp = document.getElementById("villaplatzi");
var marcoCanvas = vp.getContext("2d");

var fondo = {
  url : "tile.png",
  cargaOK : false
};

var vaca = {
  url : "vaca.png",
  cargaOK : false
};

var cerdo = {
  url : "cerdo.png",
  cargaOK : false
};

var pollo = {
  url : "pollo.png",
  cargaOK : false
};

var cantidadVacas = aleatorio(1, 15);
var cantidadCerdos = aleatorio(1, 10);
var cantidadPollos = aleatorio(1, 10);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    marcoCanvas.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log("cantidad de vacas: " + cantidadVacas);
    //Codigo para que las vacas aparezcan en una posición aleatoria
    for (var contarVacas = 0; contarVacas < cantidadVacas; contarVacas++)
     {
       //calculo para que las imagenes de vacas no aparezcan agrupadas
      var x = aleatorio(0, 6) * 70;
      var y = aleatorio(0, 6) * 70;
      marcoCanvas.drawImage(vaca.objeto, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    console.log("cantidad de cerdos: " + cantidadCerdos);
    //Codigo para que las vacas aparezcan en una posición aleatoria
    for (var contarCerdos = 0; contarCerdos < cantidadCerdos; contarCerdos++)
     {
       //calculo para que las imagenes de cerdos no aparezcan agrupadas
      var x = aleatorio(0, 7) * 60;
      var y = aleatorio(0, 7) * 60;
      marcoCanvas.drawImage(cerdo.objeto, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    console.log("cantidad de pollos: " + cantidadPollos);
    //Codigo para que las vacas aparezcan en una posición aleatoria
    for (var contarPollos = 0; contarPollos < cantidadPollos; contarPollos++)
     {
       //calculo para que las imagenes de pollos no aparezcan agrupadas
      var x = aleatorio(0, 3) * 60;
      var y = aleatorio(0, 3) * 60;
      marcoCanvas.drawImage(pollo.objeto, x, y);
    }
  }
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
