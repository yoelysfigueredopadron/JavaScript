document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaplatzi");
var marcoCanvas = vp.getContext("2d");
var pxCerdo = 429;//posición en x del cerdo
var pyCerdo = -22;//posición en y del cerdo

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

var teclas ={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo()
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
    marcoCanvas.drawImage(vaca.objeto, 10, 160);
    marcoCanvas.drawImage(vaca.objeto, 0, 220);
    marcoCanvas.drawImage(vaca.objeto, 90, 190);
  }
  if(cerdo.cargaOK)
  {
    marcoCanvas.drawImage(cerdo.objeto, 429, -22);
    marcoCanvas.drawImage(cerdo.objeto, 0, 440);
    marcoCanvas.drawImage(cerdo.objeto, 0, 400);
  }
  if(pollo.cargaOK)
  {
    marcoCanvas.drawImage(pollo.objeto, 160, 340);
    marcoCanvas.drawImage(pollo.objeto, 120, 330);
    marcoCanvas.drawImage(pollo.objeto, 140, 300);
  }
}

function moverCerdo(evento)
{
  //var colorLinea = "green";
  var mover = 3;
  switch (evento.keyCode)
  {
    case teclas.UP :
          if (pyCerdo > -22) {
            marcoCanvas.drawImage(fondo.objeto, 0, 0);
            marcoCanvas.drawImage(vaca.objeto, 10, 160);
            marcoCanvas.drawImage(vaca.objeto, 0, 220);
            marcoCanvas.drawImage(vaca.objeto, 90, 190);
            marcoCanvas.drawImage(cerdo.objeto, 0, 440);
            marcoCanvas.drawImage(cerdo.objeto, 0, 400);
            marcoCanvas.drawImage(pollo.objeto, 160, 340);
            marcoCanvas.drawImage(pollo.objeto, 120, 330);
            marcoCanvas.drawImage(pollo.objeto, 140, 300);
            marcoCanvas.drawImage(cerdo.objeto, pxCerdo, pyCerdo - mover);
            pyCerdo = pyCerdo - mover;
          }
          break;
    case teclas.DOWN ://(pyCerdo < 440)
          if ((pxCerdo < 60 && pyCerdo <= 365) || (pxCerdo >= 60 && pyCerdo < 440)) {
            marcoCanvas.drawImage(fondo.objeto, 0, 0);
            marcoCanvas.drawImage(vaca.objeto, 10, 160);
            marcoCanvas.drawImage(vaca.objeto, 0, 220);
            marcoCanvas.drawImage(vaca.objeto, 90, 190);
            marcoCanvas.drawImage(cerdo.objeto, 0, 440);
            marcoCanvas.drawImage(cerdo.objeto, 0, 400);
            marcoCanvas.drawImage(pollo.objeto, 160, 340);
            marcoCanvas.drawImage(pollo.objeto, 120, 330);
            marcoCanvas.drawImage(pollo.objeto, 140, 300);
            marcoCanvas.drawImage(cerdo.objeto, pxCerdo, pyCerdo + mover);
            pyCerdo = pyCerdo + mover;
          }
          break;
    case teclas.LEFT :
          if ((pxCerdo > -8 && pyCerdo <= 365) || (pxCerdo >= 60 && pyCerdo > 365)) {
            marcoCanvas.drawImage(fondo.objeto, 0, 0);
            marcoCanvas.drawImage(vaca.objeto, 10, 160);
            marcoCanvas.drawImage(vaca.objeto, 0, 220);
            marcoCanvas.drawImage(vaca.objeto, 90, 190);
            marcoCanvas.drawImage(cerdo.objeto, 0, 440);
            marcoCanvas.drawImage(cerdo.objeto, 0, 400);
            marcoCanvas.drawImage(pollo.objeto, 160, 340);
            marcoCanvas.drawImage(pollo.objeto, 120, 330);
            marcoCanvas.drawImage(pollo.objeto, 140, 300);
            marcoCanvas.drawImage(cerdo.objeto, pxCerdo - mover, pyCerdo);
            pxCerdo = pxCerdo - mover;
          }
          break;
    case teclas.RIGHT :
          if (pxCerdo < 429) {
            marcoCanvas.drawImage(fondo.objeto, 0, 0);
            marcoCanvas.drawImage(vaca.objeto, 10, 160);
            marcoCanvas.drawImage(vaca.objeto, 0, 220);
            marcoCanvas.drawImage(vaca.objeto, 90, 190);
            marcoCanvas.drawImage(cerdo.objeto, 0, 440);
            marcoCanvas.drawImage(cerdo.objeto, 0, 400);
            marcoCanvas.drawImage(pollo.objeto, 160, 340);
            marcoCanvas.drawImage(pollo.objeto, 120, 330);
            marcoCanvas.drawImage(pollo.objeto, 140, 300);
            marcoCanvas.drawImage(cerdo.objeto, pxCerdo + mover, pyCerdo);
            pxCerdo = pxCerdo + mover;
          }
          break;
    default: alert("Para moverte debes usar las flechas del teclado.")
  }
  if (pxCerdo <= 60 && pyCerdo >= 365) {
    alert("Felicitaciones has regresado al cerdito junto a sus amigos.");
  }
}
