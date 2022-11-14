// CONSTÂNTE PARA ELEMENTO
const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');

// LIGAR LÂMPADA
function lampOn () {
    if (!isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

turnOnOff.addEventListener ('click', lampOnOff);

//DESLIGAR LÂMPADA
function lampOff () {
    if (!isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

//LÂMPADA LIGAR AO PASSAR O MOUSE POR CIMA
lamp.addEventListener ('mouseover', lampOn);

//LÂMPADA DESLIGAR AO TIRA O MOUSE DE CIMA
lamp.addEventListener('mouseleave', lampOff);

//LÂMPADA QUEBRAR
function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

lamp.addEventListener('dblclick', lampBroken);

//LÂMPADA QUEBRADA NÃO PODER LIGAR NEM DESLIGAR
function isLampBroken () { 
    return lamp.src.indexOf ('quebrada') > -1
}

//LÂMPADA LIGAR/DESLIGAR
function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

