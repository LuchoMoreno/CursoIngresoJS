/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var resultado1;
    var resultado2;
    var resultado3;
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseInt(sueldo);
    resultado1 = (sueldo*10);
    resultado2 = (resultado1/100);
    resultado3 = (resultado2+sueldo);
    document.getElementById("resultado").value=resultado3;   
}
