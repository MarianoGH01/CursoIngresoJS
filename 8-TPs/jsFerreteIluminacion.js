/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var preciofinal;
 	var preciocondescuento;
 	var descuento;
 	var marca;
 	var cantidad;
 	
 	cantidad = parseInt(document.getElementById('Cantidad').value);
 	marca = document.getElementById('Marca').value;
 	preciofinal = 35;

 	if(cantidad >= 6){
 		//A -Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
 		preciocondescuento = (preciofinal * 6) / 2;
 	}
 	else if(cantidad == 5){
 		//B.	Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%. 
 		if(marca == "ArgentinaLuz"){
 			descuento = (preciofinal * 5) * 0.4;
 		}
 		else{
 			descuento = (preciofinal * 5) * 0.3;
 		};
		preciocondescuento = (preciofinal * 5) - descuento;
	}
 	else if(cantidad == 4){
 		//C.	Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%. 
 		if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
 			descuento = (preciofinal * 4) * 0.25;
 		}
 		else{
 			descuento = (preciofinal * 4) * 0.2;
 		};	
				preciocondescuento = (preciofinal * 4) - descuento;
 	}
 	else if(cantidad == 3){
 		//D.	Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%. 
		switch(marca){
			case "ArgentinaLuz":
				descuento = (preciofinal * 3) * 0.15;
				break;	
			case "FelipeLamparas":
				descuento = (preciofinal * 3) * 0.1;
				break;
			default:
				descuento = (preciofinal * 3) * 0.05;
				break;		
		};
		preciocondescuento = (preciofinal * 3) - descuento; 	
 	}
 	else {
 		preciocondescuento = preciofinal * cantidad;	
 	};

 	//E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 	if(preciocondescuento > 120){
 		var IIBB;
 		IIBB = preciocondescuento * 0.1; 
 		preciocondescuento = preciocondescuento +  IIBB;
 		document.getElementById('precioDescuento').value = preciocondescuento;
 		alert('IIBB Usted pago ' + IIBB);
 	}
 	else{
 		document.getElementById('precioDescuento').value = preciocondescuento;	
 	};
 	
}
