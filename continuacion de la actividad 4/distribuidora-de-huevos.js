console.log('Pundo 5 de actividad 4')

let tipoHuevo = prompt('Escoge cual huevo deseas llevar: 1 "a" o 2 "aa"')
let cantidadHuevo = parseInt(prompt('Ingresa cuantos huevos deseas llevar'))

if (tipoHuevo == 1 && cantidadHuevo < 101){
    console.log(`total a pagar ${(220*cantidadHuevo)}`)
} else if (tipoHuevo == 1 && cantidadHuevo > 100 && cantidadHuevo < 201){
    console.log(`total a pagar ${(((220*cantidadHuevo)-(220*cantidadHuevo*5)/100))}`)
} else if (tipoHuevo == 1 && cantidadHuevo > 200 && cantidadHuevo < 301){
    console.log(`total a pagar ${(((220*cantidadHuevo)-(220*cantidadHuevo*8)/100))}`)
}else if (tipoHuevo == 1 && cantidadHuevo > 300){
    console.log(`total a pagar ${(((220*cantidadHuevo)-(220*cantidadHuevo*10)/100))}`)
} else if(tipoHuevo == 2 && cantidadHuevo < 101){
    console.log(`total a pagar ${(250*cantidadHuevo)}`)
} else if (tipoHuevo == 2 && cantidadHuevo > 100 && cantidadHuevo < 201){
   console.log(`total a pagar ${(((250*cantidadHuevo)-(220*cantidadHuevo*5)/100))}`)
} else if (tipoHuevo == 2 && cantidadHuevo > 200 && cantidadHuevo < 301){
   console.log(`total a pagar ${(((250*cantidadHuevo)-(220*cantidadHuevo*8)/100))}`)
}else if (tipoHuevo == 2 && cantidadHuevo > 300){
   console.log(`total a pagar ${(((250*cantidadHuevo)-(220*cantidadHuevo*10)/100))}`)
} else {
    console.error('Ingrese por favor un numero que sea valido: 1 o 2')
}