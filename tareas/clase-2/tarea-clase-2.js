// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

function restar(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}

const operador = prompt('Ingrese + o -');
const numeroUno = Number(prompt('Ingrese el primer numero'));
const numeroDos = Number(prompt('Ingrese el segundo numero'));


if (operador === '+') {
    resultado = sumar(numeroUno, numeroDos);
} else {
    resultado = restar(numeroUno, numeroDos);
}

alert(
    `El resultado de ${numeroUno} ${operador} ${numeroDos} es ${resultado}`
);

