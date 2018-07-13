function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//Math.floor((Math.random() * (Max - Min))) + Min)
	//Max 11 Min 1
	var nota;
	nota = 	Math.floor((Math.random() * 10) + 1);

	if(nota >= 9){
		alert('EXCELENTE');
	}
	else {
		if(nota >= 4){
			alert('APROBÓ');
		}
		else { 
			alert('Vamos, la proxima se puede');
		};
	
	}
}//FIN DE LA FUNCIÓN