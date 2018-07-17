var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

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
			ContadorDeEmpates++;
			break;

			case "papel":
			alert('Usted perdió');
			ContadorDePerdidas++;
			break;

			case "tijera":
			alert('Usted ganó');
			ContadorDeGanadas++;
			break;
		};
		break;

		case "papel":
		switch(optionPC)
		{
			case "piedra":
			alert('Usted ganó');
			ContadorDeGanadas++;
			break;

			case "papel":
			alert('Usted empató');
			ContadorDeEmpates++;
			break;

			case "tijera":
			alert('Usted perdió');
			ContadorDePerdidas++;
			break;
		};
		break;

		case "tijera":
		switch(optionPC)
		{
			case "piedra":
			alert('Usted perdió');
			ContadorDePerdidas++;
			break;

			case "papel":
			alert('Usted ganó');
			ContadorDeGanadas++;
			break;

			case "tijera":
			alert('Usted empató');
			ContadorDeEmpates++;
			break;
		};
		break;
	};

	mostrarResultado();
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

function mostrarResultado()
{
	document.getElementById('empatadas').value = "Usted empató " + ContadorDeEmpates + " veces.";
	document.getElementById('ganadas').value = "Usted ganó " + ContadorDeGanadas + " veces.";
	document.getElementById('perdidas').value = "Usted perdió " + ContadorDePerdidas + " veces.";
}