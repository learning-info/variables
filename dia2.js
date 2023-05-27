let desafio = "30 días de JavaScript"; // 1
console.log(desafio); // 2
console.log(desafio.length); // 3
console.log(desafio.toUpperCase()); // 4
console.log(desafio.toLowerCase()); // 5
console.log(desafio.substring(0, 2)); // 6

let desafio2 = "30 Days Of JavaScript";
console.log(desafio2.substring(3)); //7

console.log(desafio.includes("Script")); //8
console.log(desafio.split(" ")); //9

let cadena = "30 días de JavaScript en el espacio";
console.log(cadena.split(" "));//10

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(company.split(",")); //11

console.log(desafio.replace("JavaScript", "Python"));//12
console.log(desafio.charAt(15));//13
// Se encuentra el caracter S
console.log(desafio.charCodeAt(11));//14
// Equivale al codigo 74
console.log(desafio.indexOf("a"));//15
console.log(desafio.lastIndexOf("a"));//16

let oracion = "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(oracion.indexOf("porque"));//17
console.log(oracion.lastIndexOf("porque"));//18
console.log(oracion.search("porque")+": metodo search");//19

let desafio3 = "       30 días de JavaScript    "; // 
console.log(desafio3.trim(" ")); //20
console.log(desafio.trim(" ")); //20

console.log(desafio.startsWith("30")); //21
console.log(desafio.endsWith("t")); //22
console.log(desafio.match("a")); //23

let oracion1 = "30 días de";
let oracion2 = "JavaScript";
console.log(oracion1.concat(" ",oracion2)); //24
console.log(desafio.repeat(2)); //25


// NIVEL 2

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`) // 2 s1

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"") // 2 s2

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."') // 2 s3

console.log(typeof parseInt('10'))
console.log(typeof 10)

let palabra1 = "python";
let palabra2 = "jerga";
console.log(palabra1.includes('on'), palabra2.includes('on'));

//8
let random = Math.random(); //0 a 0.99999
let numero = random * 51 // 0 a 50.9999
let valorFinal = numero + 50 // 50 a 100.9999
console.log(Math.floor(valorFinal)); // Redondear hacia abajo
