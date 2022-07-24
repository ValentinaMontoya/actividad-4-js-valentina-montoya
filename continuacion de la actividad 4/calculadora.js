console.log("Suma, resta, multiplicar y dividir, punto 4");


let numero1 = prompt('Ingrese el primer numero')
numero1 = parseInt(numero1)

let numero2 = prompt('Ingrese el segundo numero')
numero2 = parseInt(numero2)

let suma = numero1 + numero2

let resta = numero1 - numero2

let multiplicacion = numero1 * numero2

let divicion = numero1 / numero2

let acceder = parseInt(prompt(`Escoge la secuencia que quieres realizar: 1 sumar, 2 restar, 3 multiplicar, 4 dividir`))


if (acceder === 1){
    alert(`El resultado de la suma es: ${suma}`)
} 
else
if (acceder === 2){
    alert(`El resultado de la resta es: ${resta}`)
}
else
if (acceder === 3){
    alert(`El resultado de la multiplicación es: ${multiplicacion}`)
}
else
if (acceder === 4){
    alert(`El resultado de la divición es: ${divicion}`)
}
else {
    alert(`Error, Usted escogio una secuencia que no existe, por favor ingresar una correcta`)
}