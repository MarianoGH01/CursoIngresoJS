/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadocivil;
	var sueldobruto;
	var numerolegajo;
	var nacionalidad;

	edad = 0;
	estadocivil = 0;
	sueldobruto = 0;
	numerolegajo = 0;

	//Edad
	while(edad < 18 || edad > 90 || isNaN(edad)){
		edad = prompt('Ingrese una edad entre 18 y 90 años.');
		edad = parseInt(edad);
	}

	//Sexo
	while(sexo != 'F' && sexo != 'M'){
		sexo = prompt('Ingrese el Sexo, “M” para masculino y “F” para femenino.');
	} 

	//Estado Civil
	while(estadocivil <=0 || estadocivil >= 5 || isNaN(estadocivil)){
		estadocivil = prompt('Ingrese el Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.');
		estadocivil = parseInt(estadocivil);
	}

	//Sueldo Bruto
	while(sueldobruto < 8000 || isNaN(sueldobruto)){
		sueldobruto = prompt('Ingrese el Sueldo bruto, no menor a 8000.');
		sueldobruto = parseInt(sueldobruto);
	}

	//Numero de Legajo
	while(isNaN(numerolegajo) || numerolegajo < 1000 || numerolegajo > 9999 || numerolegajo.toString().substring(0,1) == 0){
			numerolegajo = prompt('Ingrese el Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.');
			numerolegajo = parseInt(numerolegajo);
	}	

	//Nacionalidad
	while(nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N'){
		nacionalidad = prompt('Ingrese la Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.')
	}	

	document.getElementById('Edad').value = edad;
	document.getElementById('Sexo').value = sexo;
	document.getElementById('EstadoCivil').value = estadocivil;
	document.getElementById('Sueldo').value = sueldobruto;
	document.getElementById('Legajo').value = numerolegajo;
	document.getElementById('Nacionalidad').value = nacionalidad;
}
