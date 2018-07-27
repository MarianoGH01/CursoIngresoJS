/*
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero=0;
	var respuesta='si';

	while(respuesta=="si"){
		contador++;
		numero=prompt('Ingrese un numero.');
		if(numero >= 0){
			positivo+=parseInt(numero);
		}
		else{
			negativo=negativo*parseInt(numero);
		};
		respuesta=prompt('Desea continuar? [si/no]');
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN