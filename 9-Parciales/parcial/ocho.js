function Mostrar()
{
    var contador = 0;
    var respuesta = "Continuar";
    var temperatura;
    var temp;
    while(respuesta != "no")
    {
        temperatura = prompt("Ingrese la temperatura")
        temperatura = parseInt(temperatura)
        while (temperatura < -100 || temperatura > 100 || isNaN(temperatura) )
        {
            temperatura = prompt("Ingrese la temperatura")
            temperatura = parseInt(temperatura)
        }
       /*
        nombre = prompt("Ingrese el nombre")
        while (nombre != isNaN(nombre))
        {
            nombre = prompt("Ingrese el nombre")
        }
       
       
        respuesta = prompt("Ingrese no para salir")
        */

        if (temp%2==0 )
        {
            temp++
        }


    }

    console.log(+temp)

}
