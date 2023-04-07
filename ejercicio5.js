// Enunciado ejercicio 5:

/**
 * ¿Cual es el X por ciento de x numero?
 * 
 * Ejemplos:
 * 20 por ciento de 100, debe de devolver 20
 * 43 por ciento de 897, debe devolver 385.71
 */

// funcion sin usar metodos de JavaScript
const percentageNumber = (percentage, number) => {
    // regla de 3 simple directa
    /**
     * 100% --> number
     * percentage --> X
     * 
     * X = (b * c) / a
     */
    const x = (number * percentage) / 100;;
    return `The ${percentage}% of ${number} is: ${x}`;
}

const result = percentageNumber(43, 897);
console.log(result);
