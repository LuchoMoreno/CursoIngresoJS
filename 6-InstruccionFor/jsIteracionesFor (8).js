function Mostrar()
{
    var contador = 0;
    var ingreso = prompt("Ingrese un numero: ");
    ingreso = parseInt(ingreso);
    
    for(var i=1 ; i<=ingreso ; i++ )
    {
        while(isNaN(ingreso))
        {
            ingreso = prompt("Ingrese un numero:");
            ingreso = parseInt(ingreso);
        }
        
        if(ingreso%i==0)
        {
            console.log(i);
            contador++;
        }
    
    }
    if (contador==2)
    {
        alert("Es un numero primo.")
    }
    else (contador>2)
    {
        alert("El numero NO es primo")
    }

}//FIN DE LA FUNCIÓN