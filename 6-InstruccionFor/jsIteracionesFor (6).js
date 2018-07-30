/*
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{

	var numero;
	numero = prompt('Ingrese un numero mayor a 0');

	if (numero <= 0) {
		alert('Q parte no se entiende de "numero mayor a 0"?');
	}
	else{
		var resto;
		var cantidadpares;
		resto = 0;
		cantidadpares = 0;
		for (var i = 1; i <= numero; i++) {
			resto = i%2;
			
			if (resto == 0) {
				cantidadpares++;
				console.log(i);
			};
		};
		alert('Cantidad Pares: ' + cantidadpares);
	};

}//FIN DE LA FUNCIÓN