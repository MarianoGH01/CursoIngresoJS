/*
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{

	var numero;
	numero = prompt('Ingrese un numero mayor a 0');

	if (numero > 0) {
		for (var i = 1; i <= numero; i++) {
			if (numero%i == 0) {
				alert('Numero divisor de ' + numero + ': ' + i);
			};	
		};
	};
}//FIN DE LA FUNCIÓN