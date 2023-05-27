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

let numero = prompt("Ingrese numero")

if (numero % 2 == 0) {
    console.log("es par")
} else {
    console.log("es impar")

}









