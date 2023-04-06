// Enunciado ejercicio 3:
/**
 * Dada una palabra. buscarla en una frase y devolver cuantas veces aparece.
 * La frase y la palabra deben de ser parametros de una funcion
 */

const coincidencesWord = (sentence, word) =>{

    let include = sentence.toLowerCase().includes(word.toLowerCase());

    if(include){

        console.log(`The sentence "${sentence}", include the word "${word}"\n`);
       
        let sentenceEmty = sentence.toLowerCase().replace(/[,¡?=.-_;]/g, '');
        
        let coincidences = {
            word: '',
            count: 0
        }

        let arrayWord = sentenceEmty.split(' ');

        for(let i = 0; i < arrayWord.length; i++){
            if(arrayWord[i] === word.toLowerCase()){
                coincidences = { 
                    ...coincidences,
                    word: arrayWord[i],
                    count: coincidences.count = coincidences.count + 1
                };
            }
        }

        console.log(`Word: ${word}\ncount: ${coincidences.count}\n`);


    }else{
        console.log(`The sentence "${sentence}", not include the word "${word}"`);
    }
    
}

let sentence = 'hola, soy una palabra en una frase, PALABRA, de test palabra';
let word = 'palabra';
coincidencesWord(sentence, word);