/*
    Dados dos arreglos, devolver un arreglo con solo los elementos comunes entre ambos.
    Ejemplo: [4,5,6,7] y [7,8,9,7,5], devuelve [5,7]
*/

const elementosComunes = (array1, array2) => {
    let numeros = [];
    let numerosComunes = [];

    for(let i of array1){
        for(j of array2){
            if(i === j){
                numeros.push(i);
            }
        }
    }

    numerosComunes = numeros.filter((element,indice, array ) => array.indexOf(element) === indice); // sacar los numeros repetidos
    numerosComunes = numerosComunes.sort((a, b) => a - b); // ordenar los numeros de menor a mayor
    
    return numerosComunes;
}

const result = elementosComunes([4,,8,5,6,7], [7,8,9,7,5]);
console.log(result);