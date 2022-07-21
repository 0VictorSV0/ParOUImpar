let alunos = 14;
for (let nume = 0; nume <= alunos; nume++){
    if (nume == 0){
        console.log("O número é zero", nume);
    } else{
        if (nume % 2 == 0){
            console.log("O número é par", nume);
        } else{
            console.log("O número é ímpar", nume);
        }
    }
}