var num = [5, 8, 2, 9, 3]

var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)



var pos2 = num.indexOf(6)
console.log(`Quando um valor não está no Array, como é o caso do 6, volta ${pos2}`)



let pos3 = num.indexOf(4)
if (pos3 == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos3}`)
}