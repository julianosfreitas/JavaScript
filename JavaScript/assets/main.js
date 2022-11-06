//Capturar evento de submit do formulario
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //referenciando o valor das INPUTS
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //pegando o VALOR das input
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //Dar o resultado 
    console.log(peso, altura);
    //checando se o valor é falso
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    console.log('Petista safado');
    // ! = const
    //continua o código..

});

    //pegando o input inteiro
    /* 
        console.log(inputPeso);
        console.log(inputAltura);
    */

function criaP () {
    const p = document.createElement('p');
    return p;
}

//criando resposta
function setResultado (msg, isValid) {
    const resposta = document.querySelector('#resposta');
    resposta.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resposta.appendChild(p);
};
    //crinado a tag Paragrafo
    /* 
        const p = document.createElement('p')
        p.classList.add('paragrafo-resultado');
        p.innerHTML = 'Magrelo';
        resposta.appendChild(p); 
    */
