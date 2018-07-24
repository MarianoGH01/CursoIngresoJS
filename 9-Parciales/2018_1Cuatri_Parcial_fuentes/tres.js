function mostrar()
{
	/*
	Pedir por prompt el precio y el porcentaje de descuento, 
	mostrar el precio final con descuento por id.	
	*/

	var precio;
	var descuento;
	var preciofinal;

	precio = prompt('Ingrese el precio');
	descuento = prompt('Ingrese el descuento');
	preciofinal = precio - (precio * descuento / 100);
	
	document.getElementById('elPrecioFinal').value = preciofinal;
}
