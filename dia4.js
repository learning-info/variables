/*let dia = prompt("Ingrese un dia de la semana"); 

switch (dia.trim().toLowerCase()) {
    case 'lunes':
        console.log("Dia #1 de la semana");
        console.warn(`${dia}`);
        break;
    case 'martes':
        console.log("Dia #2 de la semana");
        console.warn(`${dia}`);
        break;
    case 'miercoles':
        console.log("Dia #3 de la semana");
        console.warn(`${dia}`);
        break;
    case 'jueves':
        console.log("Dia #4 de la semana");
        console.warn(`${dia}`);
        break;
    case 'viernes':
        console.log("Dia #5 de la semana");
        console.warn(`${dia}`);
        break;
    case 'sabado':
        console.log("Dia #6 de la semana");
        console.warn(`${dia}`);
        break;
    case 'domingo':
        console.log("Dia #7 de la semana");
        console.warn(`${dia}`);
        break;
    default:
        console.error("No ingresaste un nombre de la semana. Vuelva a intentarlo.")
        break;
}*/

/*let num = prompt("Ingrese un número");
switch (true) {
  case num > 0:
    console.log("El número es positivo");
    break;
  case num == 0:
    console.log("El número es cero");
    break;
  case num < 0:
    console.log("El número es negativo");
    break;
  default:
    console.log("El valor ingresado no era un número");
}*/

/*let nota = 70;
nota >= 51
    ? console.log(`ESTUDIANTE APROBADO CON: ${nota}`)
    : console.log("ESTUDIANTE REPROBADO")*/


/* ✔
Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18

let edad = prompt("Ingrese su edad:"); //17

edad >= 18
    ? console.log("Tiene la edad suficiente para conducir")
    : console.log(`Te faltan ${18 - edad} años para conducir.`);
*/

/*Compara los valores de miEdad y tuEdad usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Use prompt(“Ingrese su edad:”) para obtener la edad como entrada.

let miEdad = prompt("Ingrese mi edad:"); // 25
let tuEdad = prompt("Ingrese su edad:"); // 30

//Eres 5 años mayor que yo.

if (miEdad > tuEdad) {
    console.log(`Eres ${Math.abs(tuEdad - miEdad)} años menor que yo.`)
} else {
    console.log(`Eres ${tuEdad - miEdad} años mayor que yo.`)
}*/

/*Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

let a = 4;
let b = 3;
// si no
if (a > b) {
    console.log(`${a} es mayor que ${b}`)
} else {
    console.log(`${a} es menor que ${b}`)
}
// op. ternario
a > b
    ?  console.log(`${a} es mayor que ${b}`)
    :  console.log(`${a} es menor que ${b}`)*/

/*let numero = prompt("Ingrese numero")

if (numero % 2 == 0) {
    console.log("es par")
} else {
    console.log("es impar")

}*/

// NIVEL 2️⃣
// 1
/*let puntaje = prompt("Ingrese la calificacion del estudiante");

if (parseInt(puntaje) >= 80 && parseInt(puntaje) <= 100) {
    alert("CATEGORIA A");
} else if (parseInt(puntaje) >= 70 && parseInt(puntaje) <= 79) {
    alert("SEGUNDO");
} else if (parseInt(puntaje) >= 60 && parseInt(puntaje) <= 69) {
    alert("CATEGORIA C");
} else if (parseInt(puntaje) >= 50 && parseInt(puntaje) <= 59) {
    alert("CATEGORIA D");
} else if (parseInt(puntaje) >= 0 && parseInt(puntaje) <= 49) {
    alert("CATEGORIA F");
} else {
    alert("INGRESE NUMEROS DEL 0 AL 100");
}*/

//2 
/*let mes = prompt("Ingrese un mes"); 
//enero ENERO Enero ENero => toLowerCase / toUpperCase
let mes2 = mes.toLowerCase();

if (
        mes2 == "septiembre" || 
        mes2 == "octubre" || 
        mes2 == "noviembre"
    ) 
{
    alert("la temporada es Otoño");
} else if (
        mes2 == "diciembre" || 
        mes2 == "enero" || 
        mes2 == "febrero"
    ) 
{
    alert("la temporada es Invierno");
} else if (
    mes2 == "marzo" || 
    mes2 == "abril" || 
    mes2 == "mayo"
) 
{
    alert("la temporada es Primavera");
} else if (
    mes2 == "junio" || 
    mes2 == "julio" || 
    mes2 == "agosto"
) 
{
    alert("la temporada es Verano");
} else {
    alert("Ingresa el nombre de un mes válido");
}*/

//3 
/*let dia = prompt("Ingrese un dia de la semana:")

dia.toUpperCase() == "SABADO" ||
dia.toUpperCase() == "DOMINGO"
? alert (`${dia.toUpperCase()} es fin de semana.`)
: alert (`${dia.toUpperCase()} es dia laborable.`)*/

// NIVEL 3️⃣

//1
function obtenerDiaDelMes(year,month) {
    return new Date(year, month, 0).getDate();
}

let mes = prompt("Introduce un mes: ");

switch (mes.toUpperCase()) {
    case "ENERO":
        console.log(`${mes} tiene ${obtenerDiaDelMes(2023,1)} días.`);
        break;
    case "FEBRERO":
        console.log(`${mes} tiene ${obtenerDiaDelMes(2023,2)} días.`);
        break;
    default:
        break;
}












