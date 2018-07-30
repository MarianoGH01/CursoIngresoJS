/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");

	if (!isNaN(parseInt(repeticiones))) {
		if (parseInt(repeticiones) >= 0) {
			//Positivo ó 0
			for (var i = repeticiones; i > 0; i--) {
				alert('Hola UTN FRA');
			};
		}
		else{
			//Negativo
			for (var i = repeticiones; i < 0; i++) {
				alert('Hola UTN FRA');
			};
		};
	}

}//FIN DE LA FUNCIÓN