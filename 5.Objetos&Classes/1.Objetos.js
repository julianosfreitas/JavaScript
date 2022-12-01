// podendo (Adicionar ou Remover).

// Uma FUNÇÃO dentro de um OBJETO é chamado de METÓDO.

// entrada + objeto
const player = {
    name: "Juliano Freitas",
    age: 23,
    height: 1.73,

    sobreMim: function () {
        console.log(`My name is ${this.name} and my age it's ${this.age}`);
    }
}

player.weight = 63;
const atributo = 'weight';
console.log(player[atributo]);
