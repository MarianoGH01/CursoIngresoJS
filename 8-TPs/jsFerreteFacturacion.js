/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var res;

	numerouno = parseInt(document.getElementById('PrecioUno').value);
	numerodos = parseInt(document.getElementById('PrecioDos').value);
	numerotres = parseInt(document.getElementById('PrecioTres').value);

	res = numerouno + numerodos + numerotres;

	alert(res);

}
function Promedio () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var res;

	numerouno = parseInt(document.getElementById('PrecioUno').value);
	numerodos = parseInt(document.getElementById('PrecioDos').value);
	numerotres = parseInt(document.getElementById('PrecioTres').value);

	res = (numerouno + numerodos + numerotres) / 3;

	alert(res);	
}
function PrecioFinal () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var res;

	numerouno = parseInt(document.getElementById('PrecioUno').value);
	numerodos = parseInt(document.getElementById('PrecioDos').value);
	numerotres = parseInt(document.getElementById('PrecioTres').value);

	res = (numerouno + numerodos + numerotres) * 1.21;

	alert(res);	
}