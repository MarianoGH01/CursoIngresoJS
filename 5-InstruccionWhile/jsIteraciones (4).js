function mostrar()
{

	/*
	al presionar el botón pedir un número entre 0 y 9 inclusive.
	*/
	var numero = -1;
	var intentos = 0;

	while(numero < 0 || numero > 9){

		numero = prompt("ingrese un número entre 0 y 9.");
		intentos++;
		console.log("Intentos " + intentos);

	};
	
}//FIN DE LA FUNCIÓN