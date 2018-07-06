
function mostrar()
{
/*
	var base;
	var altura;
	var perimetro;
	base = prompt("Ingrese la base");
	altura = prompt("Ingrese la altura");
	perimetro = 2 * parseInt(base) + 2 * parseInt(altura); 
	alert('El perimetro es ' + perimetro);
*/
var uno;
var dos;
var tres;
var suma;
var avg;
var resta;

uno = prompt("Ingrese un numero");
dos = prompt("Ingrese un numero");
tres = prompt("Ingrese un numero");

suma = parseInt(uno) + parseInt(dos) + parseInt(tres);
avg = parseInt(uno) + parseInt(dos) + parseInt(tres) / 3;
resta = parseInt(uno) - parseInt(dos) - parseInt(tres);

alert('La suma es ' + suma + ' el promedio es ' + avg + ' y la resta es ' + resta);
}

/* 
se ingresan 3 numeros informar en un solo alert la suma, el promedio
y la resta de los numeros tal cual como fueron ingresados
*/