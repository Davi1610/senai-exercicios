let pesoDaPeca

console.log("Cadastro do peso das peças!")

pesoDaPeca = 50

if(pesoDaPeca>100){
    console.log("Peça Cadastrada com Sucesso!!!!")

}else {
    console.log ("Peça não cadastrada, peso inválido!")
}



// ----------------------------------------------------------------------


let qtdDePecas

console.log("Cadastro da quantidade de peças")

qtdDePecas = 5

if(qtdDePecas<10){
    console.log("Quantidade cadastradas com sucesso!")

}else{
    console.log("Quantidade de peças não suportada!")
}

// ----------------------------------------------------------------------


const nomeDaPeca = ["engrenagem","br","porca","prego","parafuso"];
for (let i = 0; i < nomeDaPeca.length; i++){
    console.log("peça "+[i]+" é "+nomeDaPeca[i])
    var vetor = nomeDaPeca[i]
    if (vetor.length<3){
        console.log(nomeDaPeca[i]+" -> quantidade de caracteres inválida, minimo de 3 caracteres.")

    } else{
        console.log(nomeDaPeca[i]+" cadastrado com sucesso! ")

    }
}