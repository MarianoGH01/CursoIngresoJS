/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerouno;
	var numerodos;
	numerouno = parseInt(document.getElementById('numeroDividendo').value);
	numerodos = parseInt(document.getElementById('numeroDivisor').value);

	var resultado = numerouno % numerodos;
	alert('El resto es ' + resultado);
}
