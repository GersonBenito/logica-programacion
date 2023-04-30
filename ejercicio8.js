/*
    Dado un numero entero, inviertelo y devuelve de nuevo el numero entero

    Ejemplo: 67, se devolvera el numero 76 entero
*/

/**
 * @param {*} number numero que se invertira
 * @returns devuelve el numero invertido, ejemplo 67 --> 76
 */
const reverseNumber = (number) => {
    let reverse = number.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(number); // multiplicarlo por su signo, por si se ingresa un numero negativo
}

const result = reverseNumber(67);
console.log(result);