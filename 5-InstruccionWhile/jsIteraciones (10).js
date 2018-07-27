/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero=0;
	var sumanegativos=0;
	var sumapositivos=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var cantidadceros=0;
	var cantidadnumerospares=0;
	var promediopositivos=0;
	var promedionegativos=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		
		contador++;
		numero = parseInt(prompt('Ingrese un numero'));//si es una letra, el valor es NaN, para verificar, IsNaN()

		if (!isNaN(numero)) {
			
			//Negativo/Postivo
			if (numero != 0) {
				
				if (numero%2 == 0) {
					//Par	
					cantidadnumerospares++;
					if (numero > 0) {
						//Postivos
						cantidadpositivos++;
						sumapositivos+=numero;
					}
					else{
						//Negativos
						cantidadnegativos++;
						sumanegativos+=numero;
					};
				}
				else{
					//Impar
					if (numero > 0) {
						//Positivos
						cantidadpositivos++;
						sumapositivos+=numero;
					}
					else{
						//Negativos
						cantidadnegativos++;
						sumanegativos+=numero;
					};
				};
			}
			else{
				//Cero
				cantidadceros++;	
			};
	
		};	

		respuesta = prompt('Desea continuar? [si/no]');
		//break: Puedo poner un break en caso de que la respuesta sea no, salgo del while
		//continue: Todo lo que se encuentre dentro del while a partir de continue no se ejecuta, pero vuelve al principio del while
	};

	//Promedio Positivo/Negativo
	promediopositivos = sumapositivos/cantidadpositivos;
	promedionegativos = sumanegativos/cantidadnegativos;

	document.write('<br>Suma de negativos ' + sumanegativos + '</br>');
	document.write('<br>Suma de positivos ' + sumapositivos + '</br>');
	document.write('<br>Cantidad de positivos ' + cantidadpositivos + '</br>');
	document.write('<br>Cantidad de negativos ' + cantidadnegativos + '</br>');
	document.write('<br>Cantidad de ceros ' + cantidadceros + '</br>');
	document.write('<br>Cantidad de numeros pares ' + cantidadnumerospares + '</br>');
	document.write('<br>Promedio de positivos ' + promediopositivos + '</br>');
	document.write('<br>Promedio de negativos ' + promedionegativos + '</br>');

	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	if (cantidadpositivos > cantidadnegativos) {

		document.write('<br>Existen ' + (cantidadpositivos - cantidadnegativos) + ' numeros positivos mas que negativos' + '</br>');

	}
	else if (cantidadnegativos > cantidadpositivos) {

		document.write('<br>Existen ' + (cantidadnegativos - cantidadpositivos) + ' numeros negativos mas que positivos' + '</br>');
	}
	else{

		document.write('<br>Existe la misma cantidad de numeros positivos y negativos' + '</br>');
	};
	
}//FIN DE LA FUNCIÓN