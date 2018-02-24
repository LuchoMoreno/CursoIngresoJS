function Mostrar()
{
var num;

for (;num!=9;)
{
    num=prompt("Ingrese un numero:");
    num=parseInt(num);
    while(isNaN(num))
    {
        num=prompt("Ingrese otro numero:");
        num=parseInt(num);
    }
    
    if (num==9)
    {
        break;
    }

}



}//FIN DE LA FUNCIÓN