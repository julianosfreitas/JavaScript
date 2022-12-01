// entrada + classe + construtor
// Uma FUNÇÃO dentro de um OBJETO é chamado de METÓDO.
class Player {
    name;
    age;
    anoDeNascimento;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.anoDeNascimento = 2022 - age;
    }

    aboutMe () {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    };
}

// logica + objeto + instância (ocorrência)
// METODO
function compararPessoas(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} é mais velho que ${p2.name}`);
    } else if (p2.age > p1.age) {
        console.log(`${p2.name} é mais velho que ${p1.name}`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
    }
}

//saida
const juliano = new Player('Juliano', 23);
const gabriel = new Player('Gabriel', 28);
compararPessoas(juliano, gabriel);