//Desafio Nasc - Criar algorítimo que simula a mega-sena.
    //Gerador de números aleatóreos únicos.
let numerosMega = [];
let randomNumber = 0;

    for (let i = 0; i < 6; i += 1){
        randomNumber = (Math.ceil(Math.random() * 60))
        for (let ii = 0; ii < numerosMega.length; ii += 1) {
            if (randomNumber === numerosMega[ii]) {
                randomNumber = 0;
                i -= 1;
            }
        }
        if (randomNumber === 0){
            !numerosMega.includes(randomNumber);
        } else {
            numerosMega.push(randomNumber);
        }
    }
    console.log(numerosMega);

    //Verificador de apostas.
let aposta = [23, 43, 60, 7, 12, 24];
let acertos = 0;
let numerosAcertados = [];

    for (let contadorAposta = 0; contadorAposta < aposta.length; contadorAposta += 1) {
        for (let contadorMega = 0; contadorMega < numerosMega.length; contadorMega += 1){
            if (aposta[contadorAposta] === numerosMega[contadorMega]) {
                numerosAcertados.push(aposta[contadorAposta]);
                acertos += 1;
            }
        }
    }
    console.log(acertos);
    console.log(numerosAcertados);