function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
        alert("Este mes tiene 28 días")
        break;
   
    case "Noviembre":
    case "Abril":
    case "Junio":
    case "Septiembre":
        alert("Este mes tiene 30 dias")
        break;
    
    default:
        alert("Este mes tiene 31 dias")



}


	
	



}//FIN DE LA FUNCIÓN