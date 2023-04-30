/*
    Dados dos numeros, devolver cuantos numeros impares hay entre ellos

    Ejemplo del 1 al 100, hay 49 numeros impares
*/

/**
 * 
 * @param {*} initalNumber numero inicial, ejemplo 1
 * @param {*} finalNumber numero final, ejemplo 100
 * @returns retornara el resultado de la cantidad de numeros impares que se encuentre
 */
const numerosImpares = (initalNumber, finalNumber) => {
    let numerosImpares = 0;

    while(initalNumber < finalNumber){
        if(initalNumber % 2 !== 0){
            numerosImpares ++;
        }

        initalNumber ++;
    }

    return numerosImpares;
}

const resultado = numerosImpares(1, 100);
console.log(resultado);