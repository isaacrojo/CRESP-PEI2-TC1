var elements = document.getElementsByTagName("body");
console.log("elements", elements);

var body = elements[0];

//Agregar atributo class a body
//body.className = "background-red";

var colorClasses = ["background-red", "background-blue", "background-green", "background-orange"];

//Seleccionar un índice random entre 3 posibilidades
// var colorIndex = Math.floor(Math.random() * 3);

var cambiarColor = function() {
    var colorIndex = Math.floor(Math.random() * colorClasses.length);
var selectedColorClass = colorClasses[colorIndex];
body.className = selectedColorClass;
}

cambiarColor();

//Crear botón con id ya definido en html
var botonCambiar = document.getElementById("boton_cambiar");
botonCambiar.onclick = cambiarColor;

//Intérvalo para que el color de fondo cambie automáticamente cada determinado tiempo (en milisegundos)

setInterval(cambiarColor, 1500);

//Set another interval with another button
//var botonIntervalo = document.getElementById("boton_intervalo");
//botonIntervalo.onclick = setInterval(cambiarColor, 300);

