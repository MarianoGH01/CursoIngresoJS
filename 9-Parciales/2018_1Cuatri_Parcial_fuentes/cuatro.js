function mostrar()
{
	/*
	(IF)Pedir dos números y mostrar el resultado: 
	Si son iguales los muestro concatenados. 
	Si el primero es mayor, los resto, 
	de lo contrario los sumo. 
	Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
	"la suma es xxx y supero el 10".
	*/
	var primernumero;
	var segundonumero;

	primernumero = prompt('Ingrese el primer numero');
	segundonumero = prompt('Ingrese el segundo numero');

	if(primernumero == segundonumero){
		alert(primernumero + segundonumero);
	
	}else if(primernumero > segundonumero){

		alert(parseInt(primernumero) - parseInt(segundonumero));
	}else{

		var suma;
		suma =parseInt(primernumero) + parseInt(segundonumero); 
		alert(suma);

		if(suma > 10){
			alert('la suma es ' + suma + ' y superó el 10');
		};
	};
}
