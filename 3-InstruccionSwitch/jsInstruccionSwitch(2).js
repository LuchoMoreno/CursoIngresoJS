function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
        alert("Estamos en inviertno")
        break;
    
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno")
        break;
    
    default:
        alert("Ya pasamos el frio, ahora hace calor!!!")
    
}





}//FIN DE LA FUNCIÓN