
function gerarNumeroAleatorioPorConjunto() {
    const conjuntos = ['Natural', 'Inteiro', 'Racional', 'Irracional'];
    // Escolhe um conjunto aleatório para gerar
    const conjuntoEscolhido = conjuntos[Math.floor(Math.random() * conjuntos.length)];
    
    let numero;
    let sinal = Math.random() < 0.5 ? -1 : 1;

    switch (conjuntoEscolhido) {
        case 'Natural':
            // Inteiros de 0 a 99
            numero = Math.floor(Math.random() * 100);
            break;

        case 'Inteiro':
            // Inteiros de -99 a 99 (garantindo duas partes inteiras no máximo)
            numero = Math.floor(Math.random() * 100) * sinal;
            break;

        case 'Racional':
            // Parte inteira de até 2 dígitos + parte decimal exata (ex: 2 casas)
            let parteInteiraQ = Math.floor(Math.random() * 100);
            let parteDecimalQ = Math.floor(Math.random() * 100) / 100;
            numero = parseFloat((parteInteiraQ + parteDecimalQ).toFixed(2)) * sinal;
            break;

        case 'Irracional':
            // Simulando um irracional: parte inteira de até 2 dígitos + dízima não periódica longa
            let parteInteiraI = Math.floor(Math.random() * 100);
            let parteDecimalI = Math.random(); // Gera até ~16 casas decimais aleatórias
            numero = (parteInteiraI + parteDecimalI) * sinal;
            break;
    }

    return {
        conjunto: conjuntoEscolhido,
        valor: numero
    };
}

// Testando o código: gera 5 exemplos diferentes
for (let i = 0; i < 5; i++) {
    const resultado = gerarNumeroAleatorioPorConjunto();
    console.log(`Conjunto: ${resultado.conjunto.padEnd(10)} -> Número: ${resultado.valor}`);
}