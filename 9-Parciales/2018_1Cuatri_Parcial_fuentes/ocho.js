/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)
*/
function mostrar()
{
	var numero;
	var letra;
	var resultado;
	var cantidadpares;
	var cantidadimpares;
	var cantidadceros;
	var promediopositivos;
	var sumanegativos;
	var numeromaximo;
	var letramaximo;
	var numerominimo;
	var letraminimo;
	//necesito un contador y un acumulador para el promedio
	var contadorpositivos;
	var acumpositivos;
	var sumanegativos;

	//contador para maximo y minimo
	var maximo;
	var minimo;
	var contador;

	//do
	//{
		//inicializo las variables	
		numero = 0;
		cantidadpares = 0;
		cantidadimpares = 0;
		cantidadceros = 0;
		promediopositivos = 0;
		sumanegativos = 0;
		numeromaximo = 0;
		numerominimo = 0;
		contadorpositivos = 0;
		acumpositivos = 0;
		sumanegativos = 0;
		maximo = 0;
		minimo = 0;
		contador = 0;		

		//obligo a entrar al while al menos una vez
		resultado = 'si';	
	//}
	
	while(resultado=='si')
	{
		//pido una letra
		letra = prompt('Ingrese una letra');

		//pido numero
		numero = parseInt(prompt('Ingrese un numero entre -100 y 100'));

			//valido que haya ingresado un numero entre -100 y 100
			while(isNaN(numero) || numero < -100 || numero > 100)
			{
				numero = parseInt(prompt('Ingrese un numero entre -100 y 100'));				
			}	

				if(contador == 0){
					maximo = numero;
					minimo = numero;
					letraminimo = letra;
					letramaximo = letra;
				}
				else{
					//contador > 0
					if(numero > maximo){
						maximo = numero;
						letramaximo = letra;
					};

					if(numero < minimo){
						minimo = numero;
						letraminimo = letra;
					};
				};
			
				if(numero == 0){
					//cero
					cantidadceros++;
				}
				else if(numero%2 == 0){
					// pares 
					cantidadpares++;
				}
				else{
					// impares
					cantidadimpares++;
				};

				//promedio positivos
				if(numero > 0){
					contadorpositivos++;
					acumpositivos+= numero;
				};

				//suma negativos
				if(numero < 0){
					sumanegativos+= numero;
				};
		
		contador++;
		//pregunto si quiere seguir
		resultado = prompt('Desea seguir ingresando numeros y letras? [si/no]');
	}

	//document.write
	
	//a) La cantidad de números pares. 
	document.write('Cantidad Pares ' + cantidadpares + '<br>');

	//b) La cantidad de números impares. 
	document.write('Cantidad Impares ' + cantidadimpares + '<br>');

	//c) La cantidad de ceros. 
	document.write('Cantidad Ceros ' + cantidadceros + '<br>');

	//d) El promedio de todos los números positivos ingresados. 
	document.write('Promedio Positivos ' + (acumpositivos/contadorpositivos) + '<br>');

	//e) La suma de todos los números negativos.
	document.write('Suma Negativos ' + sumanegativos + '<br>');

	//f) El número y la letra del máximo y el mínimo.
	document.write('Letra Maximo ' + letramaximo + '<br>');
	document.write('Numero Maximo ' + maximo + '<br>');
	document.write('Letra Minimo ' + letraminimo + '<br>');
	document.write('Numero Minimo ' + minimo + '<br>');

}
