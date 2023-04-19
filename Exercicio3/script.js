// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

let menorValor = document.querySelector('.menor');
let maiorValor = document. querySelector('.maior');
let mediaValor = document.querySelector('.maior-media');
const janeiro = '{"01": 300, "02": 480, "03": 400, "04": 730, "05": 980, "06": 456, "07": 811, "08": 293, "09": 944, "10": 90, "11": 703, "12": 502, "13": 980, "14": 980, "15": 980, "16": 917, "17": 589, "18": 703, "19": 624, "20": 175,"21": 37,"22": 732}'
const data = JSON.parse(janeiro);
const valores = Object.values(data);

menorValor.innerHTML += ` ${Math.min(...valores)}`;
maiorValor.innerHTML += ` ${Math.max(...valores)}`;

const mediaMensal = valores 