// importação ER + Saida 
const { gets, print } = require('./funcoes-auxiliares');

// entrada
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

// estrutura de repetição
for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

// saida
print(maiorValorEncontrado);
