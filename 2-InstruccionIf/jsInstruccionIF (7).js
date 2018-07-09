function mostrar()
{

var edad;
var estadocivil;
 
//tomo la edad   
edad = document.getElementById('edad').value;
//tomo el estado civil
estadocivil = document.getElementById('estadoCivil').value;	

if(edad < 18 && estadocivil == 'Soltero')	
{
	//mensaje de alerta
	alert('Es muy pequeño para NO ser soltero.');	
};


}//FIN DE LA FUNCIÓN