var cards = {"A": 11, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
         "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10};


var total = [0];

function getSum(total, num) {
  return total + num;
}
while (total.reduce(getSum) < 18){
    if (total.reduce(getSum) == 0) {
        total.push(cards[prompt("What is your first card?  >>  ")])
        total.push(cards[prompt("What is you second card?  >>  ")])
}
    else if (total.reduce(getSum) < 17){
        alert(total.reduce(getSum) + " Hit")
        total.push(cards[prompt("whats your next card? >> ")])
        }
    if (17 < total.reduce(getSum) &&  total.reduce(getSum) < 21){
        alert(total.reduce(getSum) +" is pretty good, you should stay. ")}
    else if (total.reduce(getSum) == 21){
        alert("winner winner, chicken dinner.")}
    else if (total.reduce(getSum) > 21 && total.includes(11)){
        total.splice(total.indexOf(11), 1)
        total.push(1)}
    else if (total.reduce(getSum) > 21){
        alert(total.reduce(getSum) + " you went over 21, you lose")
        }
}
