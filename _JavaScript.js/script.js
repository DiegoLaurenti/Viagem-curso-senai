var botao= document.querySelector("button");
botao.addEventListener("click", Calculo );


function Calculo () {
var nome = prompt('Insira seu nome:');
var quantidade = prompt('Insira a quantidade de passageiros:');
var e = parseInt(quantidade)
var preco = prompt('Insira o valor da viagem:');
var f = parseInt(preco);
var total = e*f  ; 


var mensagem = "Orçamento <br>Nome do cliente: "+ nome + "<br>\n";
mensagem = mensagem + "Valor da Viagem:R$ "+total;

document.querySelector("div").innerHTML= mensagem; }