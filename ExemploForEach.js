let numbers =[36,75,689,53,4,78,54,22,1,87,80,34]

//Estrutura de repetição usando forEach (serve para percorrer a lista enquanto houver valores)
numbers.forEach(num => {
    if(num % 2 === 0){
        console.log(`O número ${num} é Par`)
    }
    else{
        console.log(`O número ${num} é Impar`)
    }
});