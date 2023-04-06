// Enunciado del ejercicio 1:
// Dado un numero devolver su tabla de multiplicar completa.

const multiplication = (number) => {
    console.log('tabla numero', number);
    for(let i = 1; i <= 10; i++){
        console.log(`${number} X ${i} = ${number * i}`);
    }
}

multiplication(10);