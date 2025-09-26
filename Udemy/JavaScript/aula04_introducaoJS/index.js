console.log("ola,mundo!")

// comentario de linha

/* comentario de bloco */ 

/*          
------------------ VARIAVEIS ------------------

var = pode ser alterada sempre que quiser

let = leva em conta o escopo em que foi definida

const = após definir o valor dela, não podera ser alterado

variaveis com o mesmo nome e tipo são ARRAY armazenando mais de um valor

typeOf = mostra o tipo de dado da varieavel 

boleanos = true ou false

No JavaScript as variaveis são Francamente tipadas os tipos de variaveis

------------------ FUNÇÕES PARA CONVERSÃO ------------------

parseInt = transforma string em numeros inteiros

parseFloat: transforma string em numeros quebrados

------------------ OPERADORES ------------------

' == ': compara os valores de duas expressões 

ex:
let a = 10;
let b = 20;

console.log(a == b);

o resultado é FALSE


ex:
let a = 10;
let b = "10"; está como string, em teoria deveria ser FALSE

console.log(a == b);

o resultado é true

isso ocorre porque o == compara apenas os valores, ela não esta comparando o tipe de dado também




' === ' = compara o valor e o tipo de dado de duas expressões

ex:
let a = 10;
let b = "10";

console.log(a === b);

o resultado é TRUE



 
' !== ' = compara se os valores e tipos são diferentes entre duas expressões.

ex:
let a = 10;
let b = "10";

console.log(a !== b);

o resultado vai ser TRUE.



' != '

ex:
let a = 10;
let b = "10";

console.log(a != b);

o resultado vai ser FALSE .




' && ' = as duas condições precisam ser verdadeira ao mesmo tempo.

ex:
let a = 10;
let b = "10";

console.log(a == b && typeof b == 'string');

neste caso a primeira condição seria se 'a' tem o mesmo valor de 'b', isso é true.

na segunda condição seria se 'b' fosse uma 'string', isso é TRUE também.

sendo assim o resultado vai ser TRUE.

se uma das condições forem FALSAS a expressão inteira é ignorada, se as duas forem TRUE toda a expressão sera executada.


porem se mudarmos a condição para a seguinte:

ex:
let a = 10;
let b = "10";

console.log(a == b && typeof a == 'string');

é o mesmo que estarmos perguntando se a letra 'a' é uma string, e isso é FALSE.




' || ' = as duas condições são verdades, ou a primeira ou a segunda


ex:
let a = 10;
let b = "10";

console.log(a == b && typeof a == 'string');

o resultado sera TRUE.

utilizando || o resultado só será mostrado como sendo FALSE, se todas as condições foram FALSAS.



Switch = Estrutura de controle com opções  pré-definidas

ex:

let cor = "azul";

switch (cor) {

    case "verde":
        console.log("siga");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "vermelho":
        console.log("pare");
        break;

    default:
        console.log("não sei");

}


for = (valor inicial; valor final; incremento){
//Instruções
}

continue = similar ao break, porém ignora e vai para o proximo 


exemplo de tabuada:

let n = 5

for (let i=0; i<=10; i++) {

    console.log(`${i} X ${n} = ${i*n}`);

}


*Recurso do JavaScript*

Template String = `recurso incrivel do ${js}`




teste





*/ 

















