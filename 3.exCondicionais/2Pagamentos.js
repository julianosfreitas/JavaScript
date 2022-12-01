/*
    Elabora um algoritimo que calcule o que dever ser pago
    por um produto, considerando o preço normal de etiqueta
    e escolha a condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a
    condição de pagamento escolhida e efetuar o cálculo
    adequado.

    Código condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, revebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais
      juros de 10%;
*/

// entrada
const valorProduto = 100;
// const metodoPagamento = '2x';
const metodoPagamento = 12;
// logica
const debito = valorProduto - (valorProduto / 10);
const dinheiroOuPix = valorProduto - (valorProduto / 15);
const duasVezes = valorProduto;
const ateDoze = valorProduto + (valorProduto / 10);
// saida
//console.log(tresOuMais.toFixed(2));
if (metodoPagamento === 1){
    console.log('O valor no Débito é de: R$' + debito.toFixed(2));
} else if (metodoPagamento === 2) {
    console.log('O valor no PIX é de: R$' + dinheiroOuPix.toFixed(2));
} else if (metodoPagamento === 3) {
    console.log('O valor em 2x é de: R$' + duasVezes.toFixed(2));
} else if (metodoPagamento > 3 && metodoPagamento < 13) {
    console.log('O valor em 3x é de: R$' + ateDoze.toFixed(2));
} else {
    console.log("Opção de Pagamento Inválida.");
}