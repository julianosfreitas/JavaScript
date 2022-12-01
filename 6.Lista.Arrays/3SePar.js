/*
    Crie um programa que seja capaz de percorrer uma lista de números
    e imprima cada número PAR encontrado.
*/
const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);