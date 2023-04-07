// Enunciado ejercicio 4

/**
 * Dada una cadena de texto, darle la vuelta e ivertir el orden
 * de sus caracteres, sin usar metodos propios del lenjuaje,
 * solo estructura de control
 * 
 * Ejemplos:
 * invertir('hola') --> devuelve: aloh
 */

// funcion sin metodos de JavaScript
const reverseWord = (word) => {

    let reverse = '';

    for(let i = 1; i <= word.length; i++){
        reverse += word[word.length - i];
    }

    return `Original word: ${word}\nReverse word: ${reverse}`;
}   

const result = reverseWord('hola');
console.log(result);

// funcion con metodo de JavaScript
const methodReverseWord = (word) => {
    const wordReverse = word.split('').reverse().join('');
    return `Original word using methods: ${word}\nReverse word using mehods: ${wordReverse}`;
}

const resultMethod = methodReverseWord('hola');
console.log(resultMethod);