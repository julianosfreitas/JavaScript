// entradas + saida
    //main
(function () {
    const altura = 1.73;
    const peso = 68;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

// 10 * (10 + 2)

// funções + logicas
function calcularImc(peso, altura) {
   return peso / Math.pow(altura, 2); // ou peso / (altura * altura)
}

function classificarImc(imc) {   
    if (imc < 18.5) {
        return('IMC de: ' + imc.toFixed(1) + ' Abaixo do peso');
    } else if (imc > 18.5 && imc < 25) {
        return('IMC de: ' + imc.toFixed(1) + ' Peso normal');
    } else if (imc > 25 && imc < 30) {
        return('IMC de: ' + imc.toFixed(1) + ' Acima do Peso');
    } else if (imc > 30 && imc < 40) {
        return('IMC de: ' + imc.toFixed(1) + ' Obeso');
    } else {
        return('IMC de: ' + imc.toFixed(1) + ' Obesidade Grave');
    }
}


