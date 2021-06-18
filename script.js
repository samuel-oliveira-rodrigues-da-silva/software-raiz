function numb (){
var num = parseInt(Math.random()*98+11)
var raiz = num*num
var resp = window.prompt(`Qual é a raíz quadrada de ${raiz}? que é ${num}`)
if(resp == num){
    alert(`Você acertou, era ${num}`)
}
else{
    alert(`Você errou, era ${num}`)
}
}