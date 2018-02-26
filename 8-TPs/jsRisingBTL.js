/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 

{
    var edad;
    var sexo; 
    var civil;
    var sueldo;
    var legajo;
    var nacionalidad;

edad = prompt("Ingrese su edad");
edad = parseInt(edad);
    while(isNaN(edad) || edad<18 || edad>90)
    {
    edad = prompt("Ingrese los datos correctamente.");
    edad = parseInt(edad);
    }
document.getElementById("Edad").value=edad;

sexo = prompt("Ingrese su sexo");
    while(sexo!="m" && sexo!="f")
    {
    sexo = prompt("Ingrese su sexo correctamente");
    }
document.getElementById("Sexo").value=sexo;
    if (sexo=="m")
    {
        sexo="Masculino"
        document.getElementById("Sexo").value=sexo
    }
    else if (sexo=="f")
    {
        sexo="Femenino"
        document.getElementById("Sexo").value=sexo
    }

civil = prompt("Ingrese su estado civil: 1-(Soltero), 2-(Casado), 3-(Divorciado) 4(viudo).")
    while(civil!="1" && civil!="2"&& civil!="3" && civil!="4")
    {
    civil = prompt("Ingrese su estado civil: 1-(Soltero), 2-(Casado), 3-(Divorciado) 4(viudo).")  
    }
    if (civil=="1")
     {
        civil="Soltero"
        document.getElementById("EstadoCivil").value=civil
     } 
     else if (civil=="2")
     {
         civil="Casado"
        document.getElementById("EstadoCivil").value=civil
     }
     else if (civil=="3")
     {
         civil="Divorciado"
        document.getElementById("EstadoCivil").value=civil
     }
     else if (civil=="4")
     {
         civil="Viudo"
        document.getElementById("EstadoCivil").value=civil
     }

sueldo = prompt("Ingrese su sueldo bruto")
    while(isNaN(sueldo) || sueldo<8000)
    {
        sueldo = prompt("Ingrese su sueldo bruto.Recuerde que debe ser minimo 8000")
    }
document.getElementById("Sueldo").value=sueldo;

legajo = prompt("Ingrese su numero de legajo (Sin 0 a la izquierda.)")
    while(isNaN(legajo))
    {
        legajo = prompt("Ingrese su numero de legajo, ha ingresado un valor incorreto.)")
    }
document.getElementById("Legajo").value=legajo;


}
