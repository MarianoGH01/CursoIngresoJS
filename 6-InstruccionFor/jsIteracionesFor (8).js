/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{

	var numero;
	var contador = 0;
	numero = prompt('Ingrese un numero mayor a 0');

	if (numero > 0) {
		for (var i = 1; i <= numero; i++) {
			if (numero%i == 0) {
				contador++;
			};	
		};
		if (contador <= 2) {
			alert('El numero ' + numero + ' es primo');
		}
		else{
			alert('El numero ' + numero + ' NO es primo');	
		};
	};	

}//FIN DE LA FUNCIÓN