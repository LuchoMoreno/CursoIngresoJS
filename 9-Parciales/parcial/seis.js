function Mostrar()
{
    var ventas;
    var max;
    var min;
    var primera=true;

    for (i=0; i<3; i++)
    {
        ventas = prompt("Ingrese el importe de ventas: ")
        ventas = parseInt(ventas)

        while (ventas<0)
        {
        ventas = prompt("Ingrese el importe de ventas correctamente: ")
        ventas = parseInt(ventas)
        }

        if (primera)
        {
            primera = false
            max = ventas
            min = ventas
        }

        else
        {
            if (ventas > max)
            {
                max = ventas
            }

            else (ventas < min)
            {
                min = ventas
            }
        }
    }

    alert("El minimo de ventas fue: "+min + " y el maximo de ventas fue: "+max)

}
