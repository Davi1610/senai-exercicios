var numero = 0
var alunos = 20

for(let contador = 0; contador<=alunos; contador++){
if (contador == 0){
    console.log('O numero é zero');
}else if (contador%2 == 0){
   console.log("O número é par: "+contador);
}else{
    console.log("O número é impar: "+contador);
}

}
