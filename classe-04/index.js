let montante = 0, capital = 1000, taxaFixaDeJuros = 0.125, tempo = 5;

montante = capital * Math.pow((1+taxaFixaDeJuros), tempo);

console.log(`O montade é de ${montante}`);