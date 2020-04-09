class Billete
{
  //vBillete y cBillete son dos parametros que le pasamos a la clase que representa valor y cantidad del billete respectivamente
  constructor(vBillete, cBillete)
  {
    this.valor = vBillete;
    this.cantidad = cBillete;
  }
}

function entregarDinero()
{
  var cajaDeTexto = document.getElementById("dinero");
  dinero = parseInt(cajaDeTexto.value);
    for(var billetesCaja of caja)
    {
      if(dinero > 0)
      {
        division = Math.floor(dinero / billetesCaja.valor);
        if(division > billetesCaja.cantidad)
        {
          denominacionCB = billetesCaja.cantidad;
        }
        else
        {
          denominacionCB = division;
        }
        dEntregado.push(new Billete(billetesCaja.valor, denominacionCB));
        dinero = dinero - (billetesCaja.valor * denominacionCB);
      }
    }
    if(dinero > 0)
    {
      resultado.innerHTML = "Lo sentimos, no hay suficiente dinero en este momento :( Vuelva a intentarlo en otro momento.";
    }
    else
    { //'mostrarDE' es una variable del arreglo 'dEntregado' dinero entregado
      for(var mostrarDE of dEntregado)
      {
        if(mostrarDE.cantidad > 0)
        {
          resultado.innerHTML += mostrarDE.cantidad + " billetes de $" + mostrarDE.valor + "<br />";
        }
      }
    }
}

var caja = [];
var dEntregado = [];//dinero entregado
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var dinero = 0;
var division = 0;
var denominacionCB = 0;//cantidad de billetes segun su denominación

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
