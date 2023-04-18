/**
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */
const num = document.querySelector('.numero');
let a = 0;
let b = 1;
let c = 0;
let t = 35;
let btn = document.querySelector('.btn');
const result = document.querySelector('.resultado');

btn.addEventListener("click", function() {
    let inputValue = num.value;
    let certo = false;

    for(let i = 1; i <= c;i++){
        c = a + b;
        a = b;
        b = c;
        if( a === inputValue) {
            certo = true;
        }
    }

    if (certo){
        result.innerHTML = `<p>Sim, este número faz parte da sequência de Fibonacci</p>`;
    } else {
        result.innerHTML = `<p>Este número não faz parte da sequência de Fibonacci.</p>`;
    }
});