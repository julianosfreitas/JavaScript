/*
// boolean
    // entrada - dando valor
    const numero = 55;
    
    // logica - se o resultado da visião for 0 o valor é valido.
    const numeroDivisivelpor5 = (numero % 5) === 0;
    
    // saida - se for 0 / se for divisivel por 5 / ...
    if (numero === 0) {
        console.log('Número inválido');
    } else if (numeroDivisivelpor5) {
        console.log('É divisivel por 5');
    } else {
        console.log('Não é divisivel por 5');
    }
*/

/*
    const number = 5;
    const isPair = (number % 2) === 0;

    if (isPair) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
*/

/*
    Faça um programa calcular o valor de uma viagem.

    Você tera 5 variáveis. Sendo elas:
    1 - Preço do etanol.
    2 - Preço da gasolina.
    3 - O tipo de combustivel.
    4 - Gasto médio de gasolina do carro por Km.
    5 - Distância em Km da viagem.

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

// entrada
    const precoEtanol = 3.20;
    const precoGasolina = 5.50;
    const kmPorLitros = 11;
    const distanciaViagem = 320;
    const tipoCombustivel = 'Etanol';
// logica + saida
    const litrosConsumidos = distanciaViagem / kmPorLitros;
    
    if (tipoCombustivel === 'Etanol') {
        const valorGastoEtanol = litrosConsumidos * precoEtanol;
        console.log('Valor gasto com ETANOL vai ser de: ' + valorGastoEtanol.toFixed(2));
    }   else {
        const valorGastoGasolina = litrosConsumidos * precoGasolina;
        console.log('Valor gasto com GASOLINA vai ser de: ' + valorGastoGasolina.toFixed(2));
    }
