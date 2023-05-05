let firstCard = 10
let secodCard = 11

let sum = firstCard + secondCard
let isAlive = true
let hasBlackjack = false
let message = ""

if (sum === 21){
    message = "Você tem BlackJack!"
    hasBlackjack = true
}
else if (sum < 21){
    message = "Você quer retirar outra carta?"
}
else{
    message = "Você perdeu!"
    isAlive = false
}

console.log(message)