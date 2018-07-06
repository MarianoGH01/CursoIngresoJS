/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numerouno;
	var numerodos;
	numerouno = parseFloat(document.getElementById('importe').value).toFixed(2);
	numerodos = parseFloat(numerouno * 0.25).toFixed(2);
	var res = numerouno - numerodos; 

	document.getElementById('resultado').value = res;
}
