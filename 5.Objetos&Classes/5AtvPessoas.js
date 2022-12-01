/*
    Crie uma classe para representar pessoas.
    
    Para criar cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC
    (IMC = peso / (altura * altura));
    Instâncie uma pessoa chamada José que tenha 70kg e 1.75 de altura
    e peça ao José para dizer o valor de seu IMC;
*/

// entrada + classe + logica

class idPessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc() {
       const imc = this.calcularImc();

        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc > 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc > 25 && imc < 30) {
            return ('Acima do Peso');
        } else if (imc > 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const juliano = new idPessoa ('Juliano', 65, 1.73);
console.log(juliano.calcularImc().toFixed(2));
console.log(juliano.classificarImc());
