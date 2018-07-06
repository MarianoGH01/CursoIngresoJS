function mostrar()
{

	var precio;
	var descuento;
	var descuentomoney
	var preciocondesc;
	var IVA;
	var preciofinal;

	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el porcentaje de descuento");

	descuentomoney = precio - (precio * descuento / 100);
	preciocondesc = precio - descuentomoney;
	IVA = precio * 0.21;

	alert ('El descuento es de ' + preciocondesc + ' el precio con descuneto es de ' + descuentomoney + ' y el IVA es ' + IVA);

	preciofinal = descuentomoney + IVA;
	document.getElementById('elPrecioFinal').value = preciofinal;
}
