/*
    Dado un numero, mostrar una escalera con escalones de "[-]",
    usando el numero para los niveles de la escalera.

    Ejemplo: numero 4, devulve
    [-]
    [-][-]
    [-][-][-]
    [-][-][-][-]
*/

const stairs = (number) => {

    let stairsComplete = '';
    
    for(let i = 1; i <= number; i++){
        let levels = '';
        for(let level = 1; level <= i; level++){
            levels += '[-]';
        }

        stairsComplete += `${levels}\n`;
    }
    return stairsComplete;
}

const result = stairs(5);
console.log(result);