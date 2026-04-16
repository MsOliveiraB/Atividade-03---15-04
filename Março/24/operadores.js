// Operadores de atribuição
/*  

let a = 10;
let b = 10;

// Pré-incremento: incrementa primeiro, depois usa o valor
console.log(++a);
// Pós-incremento: usa o valor atual, depois incrementa
console.log(b++);
console.log(b);

let c = 10;
// c += b;
b = c;
console.log(b); 

*/

// Operadores de comparação
let a = 5;
let b = "5";

// Igualdade (compara valor, com conversão de tipo)
console.log(a == b);

// Igualdade estrita (compara valor e tipo)
console.log(a === b);

// Desigualdade (compara valor, com conversão de tipo)
console.log(a != b);

// Desigualdade estrita (compara valor e tipo)
console.log(a !== b);

/* Operadores de Comparação no JavaScript
Operador | Significado
---------+----------------------
    <    | Menor que
---------+----------------------
    >    | Maior que 
---------+----------------------
   <=    | Menor ou igual que
---------+----------------------
   >=    | Maior ou igual que
---------+----------------------
   ==    | Igual ao (compara valor)
---------+----------------------
   !=    | Diferente de

   ===  | Estritamente igual (compara tipo e valor)
*/


// let eleitor = 88;
// if(eleitor >= 16 && eleitor <= 80){
//     console.log("Pode votar.");
// } else {
//     console.log("Não pode votar.");
// }


let pao = true;
let bolo = true;

// AND lógico (&&): retorna true se ambos operandos forem true
console.log("Só volte para casa apenas com pão e bolo.");
if(pao && bolo){
    console.log("O menino voltou.");
} else {
    console.log("Ele não voltou.");
}


pao = true;
bolo = false;
// OR lógico (||): retorna true se pelo menos um operando for true
console.log("Só volte para casa apenas com pão OU bolo.");
if(pao && bolo){
    console.log("O menino voltou.");
} else {
    console.log("Ele não voltou.");
}