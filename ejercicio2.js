// Enunciado ejercicio 2:
/**
 * Dado una cadena de texto comprobar si es un palindromo o no.
 *  Los palindromos son palabras que se leen igual a un estando invertidas.
 * Por ejemplo: ana, bob, otto, allivessevilla
 */

const verifWord = (word) =>{

    let newWord = '';

    for(let i = 1; i <= word.length; i++ ){
        newWord += word[word.length - i];
    }

    const result = (word === newWord) ? `The word "${word}" is palindromo` : `The word "${word}" is not palindromo`;

    console.log(result);
}

verifWord('allivessevilla');