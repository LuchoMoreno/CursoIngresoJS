function Mostrar()
{
    var divisores=0;
    var ingreso = prompt("Ingrese un numero: ");
    ingreso = parseInt(ingreso);
    
    for(var i = 1; ingreso+1 > i; i++)
    {
        while(isNaN(ingreso))
        {
            ingreso = prompt("Ingrese un numero:");
            ingreso = parseInt(ingreso);
        }
        
        if(ingreso%i==0)
        {
            console.log(i);
            divisores++;
        }
    
    }
    alert("Cantidad de numeros divisores: " +divisores);


}//FIN DE LA FUNCIÓN