/*
Jose 	M 	25
Maria 	F 	16
Jesus 	M 	33
Fer 	F 	81
*/

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador;
	var ContadorDeMujeres;
	var ContadorDeHombres;
	var CantidadMayoresEdad;
	var CantidadMenoresEdad;
	var EdadMasBaja;
	var EdadMasAlta;
	var PromedioEdadMujeres;
	var PromedioEdadHombres;
	var EdadTotal;
	var NombreMasViejo;
	var NombreMasJoven;
	var SexoMasViejo;
	var NombreMujerMasVieja;
	var AcumEdadMujeres;
	var AcumEdadHombres;

	//inicializo variables
	edad = 0;
	contador = 1;
	ContadorDeMujeres = 0;
	ContadorDeHombres = 0;
	CantidadMayoresEdad = 0
	CantidadMenoresEdad = 0
	EdadMasBaja = 101;
	EdadMasAlta = 0;
	PromedioEdadMujeres = 0;
	PromedioEdadHombres = 0;
	EdadTotal = 0;

	while(contador <= 4){
		
		nombre = prompt('Ingrese un nombre.');

		sexo = prompt('Ingrese el sexo.');

		while(sexo != 'f' && sexo != 'm'){
			
			sexo = prompt('Ingrese el sexo.');

		};

		if(sexo=='m'){
			ContadorDeMujeres++;
		}
		else{
			ContadorDeHombres++;
		};

		edad = prompt('Ingrese la edad');
		edad = parseInt(edad);

		while((edad < 0 || edad > 100) || isNaN(edad)){
			
			edad = prompt('Ingrese la edad');
			edad = (edad);
			
		};

		if (edad >= 18) {
				//Mayor de Edad
			CantidadMayoresEdad++;
		}
		else{
			CantidadMenoresEdad++;
		};

		if (edad > EdadMasAlta) {
			EdadMasAlta = edad;
			NombreMasViejo = nombre;
			SexoMasViejo = sexo;
		};

		if (edad < EdadMasBaja) {
			EdadMasBaja = edad;
			NombreMasJoven = nombre;
		};
		
		EdadTotal += edad;

		if (sexo == 'f') {
			AcumEdadMujeres += edad;
		}
		else{
			AcumEdadHombres += edad;
		};

		contador++;
	}
	
	if (AcumEdadMujeres > 0) {
		PromedioEdadMujeres = (AcumEdadMujeres/ContadorDeMujeres);	
	}
	

	document.write('<br>ContadorDeMujeres ' + ContadorDeMujeres + '</br>');
	document.write('<br>ContadorDeHombres ' + ContadorDeHombres + '</br>');
	document.write('<br>CantidadMayoresEdad ' + CantidadMayoresEdad + '</br>');
	document.write('<br>CantidadMenoresEdad ' + CantidadMenoresEdad + '</br>');
	document.write('<br>EdadMasBaja ' + EdadMasBaja + '</br>');
	document.write('<br>EdadMasAlta ' + EdadMasAlta + '</br>');
	document.write('<br>PromedioEdadMujeres ' + PromedioEdadMujeres + '</br>');
	document.write('<br>PromedioEdadHombres ' + PromedioEdadHombres + '</br>');
	document.write('<br>EdadTotal ' + EdadTotal + '</br>');
	document.write('<br>NombreMasViejo ' + NombreMasViejo + '</br>');
	document.write('<br>NombreMasJoven ' + NombreMasJoven + '</br>');
	document.write('<br>SexoMasViejo ' + SexoMasViejo + '</br>');
	document.write('<br>NombreMujerMasVieja ' + NombreMujerMasVieja + '</br>');
}
