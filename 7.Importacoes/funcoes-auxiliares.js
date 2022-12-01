// entrada
const entradas = [10, 50,10,98,60,55,100,200,340,77,500,];
let i = 0;

// estrutura de repetição
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

// saida
function print(texto) {
    console.log(texto);
}
    
// importação
module.exports = { gets, print };
