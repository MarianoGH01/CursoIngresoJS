
function mostrar()
{
	var base;
	var altura;
	base = prompt("Ingrese la base de un  triangulo equilátero.");
	altura = prompt("Ingrese la altura de un  triangulo equilátero.");

	var superficie = ((base * altura) / 2);

	var perimetro = 3 * base;

	alert('La superficie del triangulo es ' + superficie + ' y su perimetro es ' + perimetro);
}
