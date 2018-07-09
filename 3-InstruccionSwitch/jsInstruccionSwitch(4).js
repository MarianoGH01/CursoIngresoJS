function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":
		alert('El mes tiene 31 días.');
		break;
	case "Febrero":
		alert('El mes tiene 28 días.');
		break;
	case "Marzo":
		alert('El mes tiene 31 días.');
		break;
	case "Abril":
		alert('El mes tiene 30 días.');
		break;
	case "Mayo":
		alert('El mes tiene 31 días.');
		break;
	case "Junio":
		alert('El mes tiene 30 días.');
		break;					
	case "Julio":
		alert('El mes tiene 31 días');
		break;
	case "Agosto":
		alert('El mes tiene 31 días');
		break;		
	case "Septiembre":
		alert('El mes tiene 30 días.');		
		break;
	case "Octubre":
		alert('El mes tiene 31 días');		
		break;
	case "Noviembre":
		alert('El mes tiene 30 días');		
		break;
	case "Diciembre":
		alert('El mes tiene 31 días');		
		break;	
};

}//FIN DE LA FUNCIÓN