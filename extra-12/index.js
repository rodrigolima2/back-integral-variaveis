let taxaDeJuros = 0, montante = 90000, capital = 60000, numeroDePeriodos = 24;

taxaDeJuros = ((Math.pow(montante / capital, 1 / numeroDePeriodos)) - 1) * 100;

console.log(
    `O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJuros}%,
     pois após ${numeroDePeriodos} meses vocë teve que pagar ${montante} reais`
     );