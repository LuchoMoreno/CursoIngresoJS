function Mostrar()
{

var pares=0;
var ingreso = prompt("Ingrese un numero: ");
ingreso = parseInt(ingreso);

for(var i = 1; ingreso+1 > i; i++)
{
    while(isNaN(ingreso))
    {
        ingreso = prompt("Ingrese un numero:");
        ingreso = parseInt(ingreso);
    }
    
    if(i%2==0)
    {
        console.log(i);
        pares++;
    }

}
alert("Cantidad de numeros pares: " +pares);


}//FIN DE LA FUNCIÓN