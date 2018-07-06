function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	//si es mayor de edad, informo
	if(edad < 13 || edad > 17){
		alert('Persona NO adolescente');
	};

}//FIN DE LA FUNCIÓN