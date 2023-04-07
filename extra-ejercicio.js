// Enunciado ejercicio extra
/**
 * Dado un arreglo de numeros arrayNumber = [1,4,5,7,3,5,7,3,8,9,2,45,2,8]
 * Conocer cual es el numero mayor y cuantas veces se repite cada numero
 */

const arrayNumber = [1,4,5,7,8,3,5,7,8,3,8,9,2,45,2,8];

const getNumber = () => {

    let maxNumber = arrayNumber[0];
    let coincidences = {};

    for( let i = 0; i < arrayNumber.length; i++ ){
        // max number
        (arrayNumber[i] > maxNumber) && (maxNumber = arrayNumber[i]);
        // coincidences
        (coincidences[arrayNumber[i]]) ? coincidences[arrayNumber[i]]++ : coincidences[arrayNumber[i]] = 1;
    }

    console.log('The number max is: ', maxNumber);
    for(let number in coincidences){
        console.log(`Number: ${number}, repeat: ${coincidences[number]}`);
    }
}


getNumber();