// importação ER + Saida 
const { gets, print } = require('./funcoes-auxiliares');

// entrada
const numerosSorteados = [];

// estrutura de repetição
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

// saida
print(maiorValor);
