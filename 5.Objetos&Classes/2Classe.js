// Uma FUNÇÃO dentro de um OBJETO é chamado de METÓDO.
// entrada + classe + construtor
class Player {
    name;
    age;
    cpf;
    

    constructor(name, age, cpf) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
    }

    aboutMe () {
        console.log(`My name is ${this.name}, my age it's ${this.age} and my CPF: ${this.cpf}`);
    };
}


// instância (ocorrência) + saida
const juliano = new Player('Juliano Freitas', 23, '704.257.884-82');
const gabriel = new Player('Gabriel Freitas', 28, '777.222.888-88');

juliano.aboutMe();
gabriel.aboutMe();

console.log(juliano);
