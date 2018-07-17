/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	//Genero un numero entre 1 y 3
	eleccionMaquina = 	Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();
	GetResultado('piedra');

}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar();
	GetResultado('papel');

}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();
	GetResultado('tijera');	

}//FIN DE LA FUNCIÓN

function GetResultado(src)
{
	var optionPC;
	optionPC = ConvertToString(eleccionMaquina);

	switch(src)
	{
		case "piedra":
		switch(optionPC)
		{
			case "piedra":
			alert('Usted empató');
			break;

			case "papel":
			alert('Usted perdió');
			break;

			case "tijera":
			alert('Usted ganó');
			break;
		};
		break;

		case "papel":
		switch(optionPC)
		{
			case "piedra":
			alert('Usted ganó');
			break;

			case "papel":
			alert('Usted empató');
			break;

			case "tijera":
			alert('Usted perdió');
			break;
		};
		break;

		case "tijera":
		switch(optionPC)
		{
			case "piedra":
			alert('Usted perdió');
			break;

			case "papel":
			alert('Usted ganó');
			break;

			case "tijera":
			alert('Usted empató');
			break;
		};
		break;
	}
}

function ConvertToString(num)
{
	var option;

	switch(num)
	{
		case 1: 
		option = "piedra";
		break;

		case 2: 
		option = "papel";
		break;

		case 3: 
		option = "tijera";
		break;
	};

	return option;
}