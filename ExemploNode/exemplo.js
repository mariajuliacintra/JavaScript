const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite um valor:"))
let numero2 = parseFloat(prompt("Digite outro valor:"))
let numero3 = parseFloat(prompt("Digite mais um valor:"))

console.log("A média é: " + (numero1 + numero2 + numero3) / 3 );
 
