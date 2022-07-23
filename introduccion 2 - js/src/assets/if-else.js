/* console.log("Conectado a if-else");

console.warn("Construyebdi un if");

let a = 9;

if (a > 10) {
  console.log(`${a} es mayor a 10`);
} else {
  console.log(`${a} es menor que 10`);
}

console.log("Fin del programa");

//---------------------------------------------------

console.log("Días de la semana");
const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
    console.log("Lunes")
} else {
    console.log("No es domingo, ni lunes")
}
 */

/* console.warn('Parte de la actividad')
const hoy = new Date();
let dia = hoy.getDay();

const diaDeLaSemana = [
    'domingo', 
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
]
console.log(diaDeLaSemana[dia])
 */
//---------------------------------------------------

const hoy = new Date();
let dia = hoy.getDay();

const diasSemana = {
    0: 'domingo', 
    1: 'lunes',
    2: 'martes',
    3:'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado'
}

console.log(diasSemana[dia])
