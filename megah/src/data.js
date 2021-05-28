const data = () => {

myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junio","Julio","Agosto","Setembro","Outubro","Novembro","Dezembro"];

myDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];

var data = new Date();

var dia = data.getDate();

var dia2 = String(data.getDate()).padStart(2, '0');

var mes = data.getMonth();

var tday = data.getDay(),

tday = myDays[tday];

var ano = data.getFullYear()

dataAtual = tday + ', ' + dia2 + ' de ' + myMonths[mes] + ' de ' + ano;

console.log(dataAtual);

return `${dataAtual}`
}


exports.data = data