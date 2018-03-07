function Mostrar()
{
var kilos
var max
var min
var primera=true
for (i=0; i<3; i++)
{
    kilos = prompt("Ingrese cantidad de kilos:")
    kilos = parseInt(kilos)
    while (kilos<0)
    {
    kilos = prompt("Ingrese cantidad de kilos correctamente:")
    kilos = parseInt(kilos)    
    }

    if(primera)
    {
    primera=false
    max = kilos
    min = kilos
    }

    else
    {
        if (kilos>max)
        {
            max = kilos
        }

        else if (kilos<min)
        {
            min = kilos
        }
    }
}
alert("El maximo es: "+max + " y el minimo es: "+min)

}
