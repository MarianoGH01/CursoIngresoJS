/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var numerouno;
	var numerodos;
	numerouno = parseInt(document.getElementById('sueldo').value);
	
	var res = parseFloat(numerouno * 1.1).toFixed(2);

	document.getElementById('resultado').value = res;
}
