carteira = 80, valorDoTenis = 129.99, cupomDeDesconto = 0, porcentagemDeDesconto = 0;

cupomDeDesconto = valorDoTenis - carteira;

porcentagemDeDesconto = (100 * cupomDeDesconto) / valorDoTenis;

console.log(`o valor do desconto é ${porcentagemDeDesconto} %`);