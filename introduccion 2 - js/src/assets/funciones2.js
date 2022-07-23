/* console.log('Conectado a funciones-2')

console.warn('Función tradicional con clave repetida')

//---------------------------------------------------------------

function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona('Valentina', 'Montoya')
console.log({ persona })

//---------------------------------------------------------------

console.warn('Función tradicional con clave sin repetida')

function crearPersona2(nombre, apellido){
    return{
        nombre,
        apellido,
    }
}

const persona2 = crearPersona2('Kim', 'TaeHyung')
console.log({ persona2 })

//---------------------------------------------------------------

console.warn('Función flecha con llaves')

const crearPersona3 = (nombre, apellido) => {
    return{
        nombre,
        apellido,
    }
}

const persona3 = crearPersona3('Juan', 'Valencia')
console.log({ persona3 })

//---------------------------------------------------------------

console.warn('Función flecha con sin llaves')

const crearPersona4 = (nombre, apellido) => ({ nombre, apellido })

const persona4 = crearPersona4('Kim', 'SeokJin')
console.log({ persona4 })

//---------------------------------------------------------------

console.warn('Pasando argumentos')

const argumentos = (...args) =>{
    return args
}

const datos = argumentos(10, true, false, 'Jeon', 'Jungkook')

console.log({ datos }) */

//---------------------------------------------------------------

console.warn('Desestructurando')

const args = [25, 'Kim', 'NamJoon', true, function () {console.log('cantar')}]

const [edad, apellido, nombre, cantante, cantar] = args

const integrantesBTS = {
    edad,
    apellido,
    nombre,
    cantante,
    cantar,
}

console.log(integrantesBTS)
