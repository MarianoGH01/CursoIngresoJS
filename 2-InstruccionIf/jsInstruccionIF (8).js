function mostrar()
{

var edad;
var estadocivil;
	
//tomo la edad  
edad = document.getElementById('edad').value;
//tomo el estado civil
estadocivil = document.getElementById('estadoCivil').value;

if(edad >= 18 && estadocivil == 'Soltero'){
	alert('Es soltero y no es menor.');
};

}//FIN DE LA FUNCIÓN