function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	//si es mayor de edad, informo
	if(edad < 13){
		alert('La perosna es un niño.');
	}else if(edad >= 13 && edad <= 17){
		alert('La perosna es un adolescente.');	
	}else{
		alert('La perosna es un mayor.');	
	};



}//FIN DE LA FUNCIÓN