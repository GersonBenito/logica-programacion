// enunciado ejercicio 6:

/**
    Dibujar un cuadro hueco con asteriscos.

    Ejemplos:
    Si ingresamos 4, en la funcion, debe de devolver
    ****
    *  *
    *  *
    ****
 */


const lado = (count) => {

    let lado = '';

    for(let i = 0; i < count; i++){
       lado += '*';
    }
    return lado;
}

const cuadrado = (count) => {
    let dibujo = `${lado(count)}\n`;
    let contenido = '';

    for(let i = 0; i < (count - 2); i++){
        contenido = '*';
        for(let j = 0; j < (count - 2); j++){
            contenido += ' ';
        }

        contenido += '*';

        dibujo += `${contenido}\n`;
    }  

    dibujo += lado(count);
    
    return dibujo;
}



const result = cuadrado(4);
console.log(result);