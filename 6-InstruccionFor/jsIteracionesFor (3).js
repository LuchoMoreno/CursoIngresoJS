function Mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
repeticiones= parseInt(repeticiones);
while(isNaN(repeticiones))
{
    repeticiones = prompt("ingrese el número de repeticiones");
    repeticiones= parseInt(repeticiones);
}

for(var i = 0; i != repeticiones ; i++)
{
    alert("Hola utn fra");
}




}//FIN DE LA FUNCIÓN