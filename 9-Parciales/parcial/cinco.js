function Mostrar()
{
    var dia
    dia = prompt("Ingrese un dia")
    switch(dia)
    {
        case"Sabado":
        case"Domingo":
        alert("Es fin de semana!!")
        break;

        default:
        alert("A trabajar!!")
    }
}
