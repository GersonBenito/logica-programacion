/*
    Dados dos arreglos, devolver un arreglo con solo los elementos comunes entre ambos.
    Ejemplo: [4,5,6,7] y [7,8,9,7,5], devuelve [5,7]
*/

const elementosComunes = (array1, array2) => {
    let numeros = [];

    numeros = array1.filter(item => array2.includes(item));
    numeros = numeros.sort((a, b) => a - b); // ordenar los numeros de menor a mayor

    return numeros;
}

const result = elementosComunes([4,,8,5,6,7], [7,8,9,7,5]);
console.log(result);