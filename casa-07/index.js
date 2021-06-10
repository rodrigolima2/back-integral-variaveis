let populacaoInicialInfectada = 1000, qtdPessoasInfPodeTransmitir = 4, tempo = 100, qtdPessoasInfAposTempo = 0;

qtdPessoasInfAposTempo = populacaoInicialInfectada * Math.pow(qtdPessoasInfPodeTransmitir, tempo / 7);

console.log (`Quantidade de pessoas infectadas após decorrido o tempo: ${qtdPessoasInfAposTempo}`);