/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) - 1);
	contadorIntentos = 0;
		//alert(numeroSecreto );
	

}

function verificar()
{
	//Obtengo el valor
	var numeroingresado;
	numeroingresado = document.getElementById('numero').value;
	contadorIntentos++;
	document.getElementById('intentos').value = contadorIntentos;

	if(numeroSecreto == numeroingresado){
		alert('Usted es un ganador!!! y en solo ' + contadorIntentos + ' intentos');
	}
	else{
		if (numeroSecreto > numeroingresado) {
			var resto = numeroSecreto - numeroingresado;
			alert('falta ' + resto + ' para llegar al número secreto');

		}
		else {
			//numeroSecreto < numeroingresado
			var resto = numeroingresado - numeroSecreto;
			alert('se pasó ' + resto + ' del número secreto');
		}
	};
}