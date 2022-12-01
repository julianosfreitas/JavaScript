/*
    Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
    calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    Média = (n1 + n2 + n3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou se semestre;
*/

const n1 = 2;
const n2 = 8;
const n3 = 6;
const mediaNotas = (n1 + n2 + n3) / 3;

if (mediaNotas < 5) {
    console.log('Reprovação, Sua media geral é: ' + mediaNotas.toFixed(1));
} else if (mediaNotas > 5 && mediaNotas < 7 ) {
    console.log('Recuperação, Sua media geral é: ' + mediaNotas.toFixed(1));
} else {
    console.log('Passou de Semestre, Sua media geral é: ' + mediaNotas(1));
}
