/*
1. CREAR 10 VARIABLES Y ASIGNARLE EL VALOR QUE HAGAN REFERENCIA A UNA PERSONA

EJEMPLO 
let primerNombre = "JOSE"
let edad = 18
*/

let nombre = "JOSE"
let apellido = "CHAVARRIA"
let edad = 24;
let profesion = "ING SISTEMA"
let telefono = 69113464;
let especialidad = false;
let diplomado = true;
let lugarTrabajo = "BANCO GANADERO";
let cargoLaboral = "DESARROLLADOR SOFTWARE"
let docente = true;

/*
2. CREAR UN ARRAY Y ASIGNAR 6 DE LOS VALORES DE LA PERSONA
tips: let persona = ["Jose",...];
*/
let jose = ["CHAVARRIA", 24, 69113464, "ING SISTEMA", "BANCO GANADERO", "DESARROLLADOR SOFTWARE"];

/*3. REALIZAR LA VALIDACION SI LA PERSONA ES MAYOR DE EDAD "18".
if(<condicion>) {
    console.log(<mensaje>)
} else {
    console.log(<mensaje>)
}
- SI ES VERDADERO MOSTRAR EN CONSOLA EL MENSAJE "LA PERSONA ES MAYOR DE EDAD"

- SI ES FALSO MOSTRAR EN CONSOLA EL MENSAJE "LA PERSONA ES MENOR DE EDAD"

*/
if (edad >= 18) {
    console.log("LA PERSONA ES MAYOR DE EDAD");
} else {
    console.log("LA PERSONA ES MENOR DE EDAD");
}