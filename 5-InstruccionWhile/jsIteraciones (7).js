/*
Al presionar el botón pedir números hasta que el usuario quiera e informar la suma acumulada y el promedio.
*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == 'si'){

		contador++;
		acumulador+=parseInt(prompt('Ingrese un numero'));
		respuesta=prompt('Desea continuar? [si/no]');
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN