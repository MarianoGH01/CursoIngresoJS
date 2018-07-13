function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	//si es mayor de edad, informo
	//1er caso
	if(edad < 13){
		alert('La perosna es un niño.');
	}
	else {
		
		//2do caso
		if(edad >= 13 && edad <= 17){
			alert('La perosna es un adolescente.');	
		}
		else {
		//3er caso	
			alert('La perosna es un mayor.');	
		}
	};
	

}//FIN DE LA FUNCIÓN