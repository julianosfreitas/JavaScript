// Objeto é uma coleção dinâmica de CHAVE e VALOR,
// podendo (Adicionar ou Remover).

// Uma FUNÇÃO dentro de um OBJETO é chamado de METÓDO.

// entrada + objeto
const player = {
    name: "Juliano Freitas",
    age: 23,
    height: 1.73,

    sobreMim: function () {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
}

// incremento + decremento + saida objeto
player.weight = 68;
delete player.age;
console.log(player);

// saida metodo
player.name = 'Gabriel Freitas';
player.age = 28;
player.sobreMim();

// saida funcao
player.sobreMim = function() {
    console.log(`Meu nome é ${this.name}`);
}
player.sobreMim();
