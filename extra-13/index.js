const PI = 3.14;

let areaTotal = 0, areaBase = 0, areaLateral = 0, raio = 5, altura = 20;

areaBase = Math.pow(raio, 2);
areaLateral = 2 * raio * altura;
areaTotal = 2 * areaBase + areaLateral;

console.log(
    `O valor da area da Base é de ${areaBase} PI cm2,
     da area lateral é de ${areaLateral} PI cm2 e da area total é de ${areaTotal} PI cm2`
    );

