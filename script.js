function numb (){
var num = parseInt(Math.random()*88+11)
var raiz = num*num
var resp = window.prompt(`Qual é a raíz quadrada de ${raiz}?`)
if(resp == num){
    alert(`Você acertou, era ${num}`)
}
else{
    alert(`Você errou, era ${num}`)
}
}
