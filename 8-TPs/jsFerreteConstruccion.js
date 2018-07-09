/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var res;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);
	
	res = ((2 * largo) + (2 * ancho)) * 3;

	alert(res);
}
function Circulo () 
{
	var radio;
	var res;

	radio = parseInt(document.getElementById('Radio').value);

	res = (2 * radio * Math.PI);

	alert(res);	
}
function Materiales () 
{
	var largo;
	var ancho;
	var metroscuadrados;
	
	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);
	
	metroscuadrados = largo * ancho;
	
	alert('Se necesitan ' + (2 * metroscuadrados) + ' bolsas de cemento y ' + (3 * metroscuadrados) + ' bolsas de cal');		
}