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
const precoEtiqueta = 200;
const formaPagamento = 13;

// funcão + calculo + logica
function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100)));
}

function aplicarJuros(preco, juros) {
    return (preco +(preco * (juros / 100)));
}

// parametro + saida
if (formaPagamento === 1) {
    console.log('O valor no Débito é de: R$' + aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else if (formaPagamento < 13) {
    console.log(aplicarJuros(precoEtiqueta, 10));
} else {
    console.log('Opção de Pagamento Inválida');
}
