const tamanho = 10;
let numeros = [3,5,6,9,2,7,22,9,34,96];


for (let i = 0; i < numeros.length; i++){
    num = numeros[i];
    if (num % 2 === 0){
        console.log(`O número ${num} é par`)
    }
    else{
        console.log(`O número ${num} é impar`)
    }
}
//numeros.length é para "ler a quantidade de index(endereços) dentro de um Array,  ajudando então quando não sabemos o tamanho do Array"


