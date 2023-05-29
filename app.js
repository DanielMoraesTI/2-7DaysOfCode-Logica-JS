let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagemEstudo = prompt('Qual linguagem de programação você está estudando?');

alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagemEstudo + '!');

//Outra forma da escrita do alert aparentemente mais simples. Aparentemente iguais em termos práticos de uso (let=var=const)
//const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;
//alert(msg);

let gostaEstudar = prompt('Você gosta de estudar ' + linguagemEstudo + '?' + ' Responda com o número 1 para SIM ou 2 para NÃO');
  if (gostaEstudar == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
  }
  if (gostaEstudar == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
  }
