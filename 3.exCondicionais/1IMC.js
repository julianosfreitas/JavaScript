/*
    -Calcular o IMC-

    Formula:
    IMC = peso / (altura * altura)

    Condições:
    Abaixo de 18.5 Abaixo do peso;
    Entre 18.5 e 25 Peso normal;
    Entre 25 e 30 Acima do peso;
    Entre 30 e 40 Obeso;
    Acima de 40 Obesidade Grave;
*/

// entradas
    const altura = 1.73;
    const peso = 70;
    const imc = peso / Math.pow(altura,2); // Biblioteca de Matematica Nativa
    
// logica + saida
    if (imc < 18.5) {
        console.log('IMC de: ' + imc.toFixed(1) + ' Abaixo do peso');
    } else if (imc > 18.5 && imc < 25) {
        console.log('IMC de: ' + imc.toFixed(1) + ' Peso normal');
    } else if (imc > 25 && imc < 30) {
        console.log('IMC de: ' + imc.toFixed(1) + ' Acima do Peso');
    } else if (imc > 30 && imc < 40) {
        console.log('IMC de: ' + imc.toFixed(1) + ' Obeso');
    } else {
        console.log('IMC de: ' + imc.toFixed(1) + ' Obesidade Grave');
    }
