/*
    let soma1 = 10 + 10;

    console.log(soma1);
*/

/* 
    Faça um programa para calcular o valor gasto
    de combustivel em viagem com essas 3 variáveis: 
    1 - Preço do combustivel;
    2 - Gasto médio de combustivível do carro por KM;
    3 - Distância em KM da viagem;

    Iprima no console o valor que será gasto de
    combustível para realizar essa viagem.
*/

    // entrada
    const precoCombustivel = 5.79;
    const kmPorLitros = 12;
    let distanciaKm = 120;

    // logica
    const litrosConsumidos = distanciaKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoCombustivel;

    // saida
    console.log(valorGasto.toFixed(2));
