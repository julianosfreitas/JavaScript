/*
    1- Crie uma classe para representar carros.
        Os carros possuem uma marca, 
        uma cor e 
        um gasto médio de combustível por Km rodado.
        Crie um método que dado a 
        quantidade de quilometros e 
        o preço do combustível nos dê o 
        valor gasto em reais para realizar este percurso.
*/

// entrada + classe + construtor
class Carro {
    corCarro;
    marcaCarro;
    gastoMedioCarro;

    constructor(corCarro, marcaCarro, gastoMedioCarro) {
        this.corCarro = corCarro;
        this.marcaCarro = marcaCarro;
        this.gastoMedioCarro = gastoMedioCarro;
    }

    calcularGastoPercurso (distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoMedioCarro) * precoCombustivel
    }
}

// saida
const huracan = new Carro ('Verde Diamante', 'Lamborguini', 1/5);
const palio = new Carro ('Prata', 'Fiat', 1/10);
console.log(huracan.calcularGastoPercurso(70, 5));
console.log(palio.calcularGastoPercurso(70, 5));
