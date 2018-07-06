function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	//si es mayor de edad, informo
	if(edad >= 18){
		alert('Persona mayor de edad');
	}
	else
	{
		//informo que es menor de edad
		alert('Persona menor de edad');	
	};


}//FIN DE LA FUNCIÓN