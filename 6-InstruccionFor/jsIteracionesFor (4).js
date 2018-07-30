/*
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{

	var tope;
	tope = 100;

	for (var i = 0; i <= tope; i++) {
		alert('Nº ' + i);
		if(i == 3){
			break;
		};
	}

}//FIN DE LA FUNCIÓN