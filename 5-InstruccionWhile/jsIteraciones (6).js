/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{

	var contador=1;
	var acumulador=0;
	
	while(contador <=5){
		acumulador += parseInt(prompt('Ingrese un numero.'));
		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=(parseInt(acumulador)/(parseInt(contador) - 1));

}//FIN DE LA FUNCIÓN