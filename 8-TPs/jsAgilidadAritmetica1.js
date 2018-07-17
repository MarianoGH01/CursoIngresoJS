/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var operador;
var primernumero;
var segundonumero;
var resultado;

function comenzar()
{

	//random 1 al 10 para PrimerNumero
	primernumero = Math.floor((Math.random() * 10) + 1);

	//random 1 al 10 para SegundoNumero
	segundonumero = Math.floor((Math.random() * 10) + 1);
	
	//random 1 al 4 para Operador
	GetOperador();

	respuesta = parseInt(document.getElementById('Respuesta').value);

	document.getElementById('PrimerNumero').value = primernumero;
	document.getElementById('Operador').value = operador;
	document.getElementById('SegundoNumero').value = segundonumero;

	if(respuesta == resultado){
		alert('Correcto!!');
	}
	else{
		alert('Error, el resputado era ' + resultado);
	};

}//FIN DE LA FUNCIÓN
function Responder()
{
	comenzar();

}//FIN DE LA FUNCIÓN
function GetOperador()
{
	var r;
	r = Math.floor((Math.random() * 4) + 1);

	switch(r)
	{
		case 1:
		operador = "+";
		resultado = primernumero + segundonumero;
		break;

		case 2:
		operador = "-";
		resultado = primernumero - segundonumero;
		break;

		case 3:
		operador = "*";
		resultado = primernumero * segundonumero;
		break;

		case 4:
		operador = "/";
		resultado = primernumero / segundonumero;
		break;
	};

}
