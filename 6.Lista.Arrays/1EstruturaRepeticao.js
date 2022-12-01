/*
    // Entrada + logica + soma da estrutura (for) + saida
        // Entrada
            const nome = 'Juliano Freitas';
        // Estrutura de Repetição
            for (let i = 0; i < nome.length; i++) {
                console.log(nome[i]);
            }
*/

/*
    const nome = 'Juliano Freitas';

    for (let i = 0; i < nome.length; i++) {
        const letra = nome[i];
        console.log(letra);
    }
*/

const notas = [];

notas.push(10); // 0
notas.push(10); // 1
notas.push(10); // 2

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas. length;
console.log(media);
