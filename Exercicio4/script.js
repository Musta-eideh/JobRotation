// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por
// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.


let invoicingStates = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53];
let sum = invoicingStates.reduce(function(accumulator, value){
    return accumulator + value
},0);
let sP = document.querySelector('.sp')
let rJ = document.querySelector('.rj')
let mG = document.querySelector('.mg')
let eS = document.querySelector('.es')
let othersStates = document.querySelector('.others')


sP.innerHTML += `${((invoicingStates[0]/sum)*100).toFixed(3)} %`
rJ.innerHTML += `${((invoicingStates[1]/sum)*100).toFixed(3)} %`
mG.innerHTML += `${((invoicingStates[2]/sum)*100).toFixed(3)} %`
eS.innerHTML += `${((invoicingStates[3]/sum)*100).toFixed(3)} %`
othersStates.innerHTML += `${((invoicingStates[4]/sum)*100).toFixed(3)} %`
