let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagemEstudo = prompt('Qual linguagem de programação você está estudando?');

alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagemEstudo + '!');

let gostaEstudar = prompt('Você gosta de estudar ' + linguagemEstudo + '?' + ' Responda com o número 1 para SIM ou 2 para NÃO');
  if (gostaEstudar == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
  }
  if (gostaEstudar == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
  }



//var numeroSecreto = parseInt(Math.random() * 1001 + 1)
//var quantidadeTentativas = 1
//var jogador = prompt('Qual é o seu nome?')
//while(chute != numeroSecreto) {
  //var chute = prompt('Digite um número entre 1 e 1000')
  //if (chute == numeroSecreto) {
    //alert('Certa resposta ' + jogador + ', agora pode tentar a sorte na Mega Sena! Volte sempre e me deixem críticas contrutivas, obrigado!')
  //} else if (chute > numeroSecreto) {
    //alert('Errou... o número secreto é menor do que ' + chute + ', tente novamente!')
  //} else if (chute < numeroSecreto) {
    //alert('Errou... o número secreto é maior do que ' + chute + ', tente novamente!')
  //}
  //alert('Quantidade de tentaivas: '+ quantidadeTentativas++)
//}