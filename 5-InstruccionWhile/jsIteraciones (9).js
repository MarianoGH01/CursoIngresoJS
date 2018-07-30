/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.
*/
function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=0;
	var mínimo=0;
	var numero=0;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt('Ingrese un numero.');
		numero=parseInt(numero);
		
		if (!isNaN(numero)) {
			if(contador == 0){
				
				maximo=numero;
				mínimo=numero;
			}
			else{

				if (numero > maximo) {
					maximo = numero;
				};

				if (numero < mínimo) {
					mínimo=numero;
				};
			};

			contador++;
		}
		respuesta=prompt('Desea continuar? [si/no]');
	};

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=mínimo;


}//FIN DE LA FUNCIÓN