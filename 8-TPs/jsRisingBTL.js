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
 
 
 1) Sueldo max de los nacionaliados.
 2) Sueldo max de sexo F y Argentinas.
 3) Sueldo promedio de M F y Ambos (bruto/neto -25%).
 4) Cantidad de personas M con sueldo > a 12000.
 5) Edad de la persona F con sueldo maximo.
 6) Legajo de Argentino con menor sueldo.
 7) Cantidad de personas con sueldo neto> sueldo promedio.
 8) Cantidad de personas con S.Brutno > sueldo promedio
 
 */
function ComenzarIngreso () 

{
    var edad;
    var sexo;
    var civil;
    var sueldo;
    var legajo;
    var nacionalidad;
    var sueldoMaxNacionalizados=1


for(var i=1;i<=7;i++)
{

/*Validacion de Edades*/
edad = prompt("Ingrese su edad");
edad = parseInt(edad);
    while(isNaN(edad) || edad<18 || edad>90)
    {
    edad = prompt("Ingrese los datos correctamente.");
    edad = parseInt(edad);
    }
document.getElementById("Edad").value=edad;


/*Validacion de Sexo*/
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


/*Validacion de Estado Civil*/
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


/*Validacion de Sueldo*/
sueldo = prompt("Ingrese su sueldo bruto")
    while(isNaN(sueldo) || sueldo<8000)
    {
        sueldo = prompt("Ingrese su sueldo bruto.Recuerde que debe ser minimo 8000")
    }
document.getElementById("Sueldo").value=sueldo;

/*Validacion de Legajo*/
legajo = prompt("Ingrese su numero de legajo (Sin 0 a la izquierda.)")
    while(isNaN(legajo) || legajo>9999 || legajo<1000)
    {
        legajo = prompt("Ingrese su numero de legajo, ha ingresado un valor incorreto.)")
    }
document.getElementById("Legajo").value=legajo;


/*Valicacion de Nacionalidad*/
nacionalidad = prompt("Ingrese su nacionalidad. A-(Argentino), E-(Extranjero, N-(Nacionalizado)")
    while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n")
    {
        nacionalidad = prompt("Ingrese su nacionalidad A-(Argentino), E-(Extranjero, N-(Nacionalizado)")
    }
    if (nacionalidad=="a")
    {
        nacionalidad="Argentino"
        document.getElementById("Nacionalidad").value=nacionalidad;
    }
    else if (nacionalidad=="e")
    {
        nacionalidad="Extranjero"
        document.getElementById("Nacionalidad").value=nacionalidad;
    }
    else if (nacionalidad=="n")
    {
        nacionalidad="Nacionalizado"
        document.getElementById("Nacionalidad").value=nacionalidad;
    }

    //Calculo el sueldoMaxNacionalizados.
    if (nacionalidad=="Nacionalizado" && sueldo>sueldoMaxNacionalizados)
    {
        sueldoMaxNacionalizados=sueldo
        console.log(sueldoMaxNacionalizados)
    }
    
} /*finalizacion de FOR*/

alert(+sueldoMaxNacionalizados)


} /*FIN DE LA FUNCION*/
