console.log('Porcentaje de hombres y mujeres, punto 3')

let cantidadHombres = parseInt(prompt('Ingrese la cantidad de hombres'))
let cantidadMujeres = parseInt(prompt('Ingrese la cantidad de mujeres'))

const totalGente = cantidadMujeres + cantidadHombres

let porcentajeHombres = ((cantidadHombres * 100) / totalGente)
let porcentajeMujeres = ((cantidadMujeres * 100) / totalGente)

console.log(`El porcentaje de hombres es: ${Math.round(porcentajeHombres)
}%, el porcentaje de mujeres es: ${Math.round(porcentajeMujeres)}%`);
