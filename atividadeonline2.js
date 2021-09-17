var dataDoEvento
for(let i = 1;i<=2; i++){

console.log("=======================================================")
console.log("============== CADASTRO DE EVENTOS ====================" )
console.log("=======================================================")
console.log("Digite a data do evento (DIGITE O DIA, MÊS E ANO JUNTOS SEM TRAÇOS OU PONTOS)")
dataDoEvento = 16092021
dataNaoPermitida = 15092021

if (dataDoEvento > dataNaoPermitida){
    console.log("Data autorizada.")
} else {
    console.log("Cadastro Não realizado por data inválida!")
}
console.log("--------------------------------------------------------------------------");
var dataDeNascimento = 16092003
var dataDeNascimentoNeg = 17092003
console.log("Digite sua data de nascimento para prosseguir (digite apenas os numeros, sem pontos ou traços):")
if (dataDeNascimento < dataDeNascimentoNeg){
    console.log("idade autorizada")
} else{
    console.log("Cadastro não permitido para menores de idade!")
}
console.log("----------------------------------------------------------------------------");
var participantes = 89
console.log("Digite a quantidade de participantes do seu evento:")
if (participantes<100){
    console.log("Quantidade aceita!")
} else{
    console.log("Cadastro não realizado por ter excedido o limite")
}
console.log("Digite o nome dos "+participantes+" participantes:");
for(let contador = 0;contador<=participantes; contador++){
console.log ("participante "+contador+" cadastrado com sucesso.")
}
console.log("-----------------------------------------------------------------------------")
console.log("CADASTRO DE EVENTO FINALIZADO COM SUCESSO")
console.log("-----------------------------------------------------------------------------")
}