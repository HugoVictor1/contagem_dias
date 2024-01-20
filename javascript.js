var texto = document.getElementById('texto');
//var texto2 = document.getElementById('texto2');

/*var semanas = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
var meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] */

function teste(){
  var data = new Date();
  var ano = data.getFullYear(); // ano inteiro
  var semana = data.getDay(); // dia da semana 
  var mes = data.getMonth(); // mês do ano
  var hora = data.getHours(); // horas do dia
  var minutos = data.getMinutes() // minutos das horas 
  var dia = data.getDate(); // dia do mês
  var d1 = '2024-04-18';
  var d2 = `${ano}-${mes}-${dia}`;
  var difM = new Date(d1) - new Date(d2)
  var difD = Math.floor(difM / (1000 * 60 * 60 * 24));
  

  if (mes == 0){
    total = 31 + 29 + 31 + 30 + 18 - dia
    fal = 31 - dia + 29 - 11
    res = 3
  }

  if (mes == 1){
    total = 29 + 31 + 30 + 18 -dia
    fal = 29 - dia + 31 - 11

    res = 3
  }

  if (mes == 2){
    total = 31 + 30 + 18 - dia
    fal = 31 - dia + 30 - 12
    res = 2
  }

  if (mes == 3){
    total = 30 + 18 - dia
    fal = 31 - dia + 18 - 11
    res = 1
  }

  if (mes == 4){
    total = 18 - dia
    fal = 31 - dia + 18
    res = 0
  }
  

    texto.innerHTML = `<h1>Faltam ${res} Meses e ${fal} Dias, <br> ${ total} Dias,</h1>` 
    texto2.innerHTML = `<h2>${24 - hora} Horas e ${60 - minutos} Minutos</h2>`
};

const fx=setTimeout(teste, 10);
const inter=setInterval(teste, 1000);



