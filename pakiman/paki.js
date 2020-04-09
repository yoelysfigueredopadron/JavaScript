var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//usamos 'in' para el indice y 'of' para el objeto
for(var objColeccion of coleccion)
{
  objColeccion.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
