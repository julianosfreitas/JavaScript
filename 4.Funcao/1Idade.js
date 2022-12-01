function meuNome(nome){
  return 'Juliano';
}

function verificarIdade (idade) {
    if (idade < 18) {
        console.log(meuNome() + ' é Menor de idade');
    } else {
        console.log(meuNome() + ' é Maior de idade');
    }
}

verificarIdade(17);