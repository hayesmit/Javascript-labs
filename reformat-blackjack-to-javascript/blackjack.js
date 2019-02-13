var deck = {"A": 11, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
         "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10};


var total = [0];

function getSum(total, num) {
  return total + num;
}

let cardCount = 0;

let cards = document.getElementsByClassName('card');
for(i=0; i<cards.length; i++){
cards[i].addEventListener("click", function(e){
e.preventDefault();
total.push(deck[this.innerText]);
let Total = document.createElement("p");
Total.innerText = `${total.reduce(getSum)}`;
cardCount +=1
document.getElementById("total").removeChild(document.querySelector('p'))
document.getElementById("total").appendChild(Total);
    if (total.reduce(getSum) > 21 && total.includes(11)){
        total.splice(total.indexOf(11), 1)
        total.push(1)
        }
    if (cardCount < 2) {
       document.getElementById("print").innerText = "you don't have 2 cards yet."
}
    else if (total.reduce(getSum) < 17){
        document.getElementById("print").innerText = "Hit"
        }
    else if (17 < total.reduce(getSum) &&  total.reduce(getSum) < 21){
        document.getElementById("print").innerText = "you should stay. "
        }
    else if (total.reduce(getSum) == 21){
       document.getElementById("print").innerText = "winner winner, chicken dinner."
        }
    else if (total.reduce(getSum) > 21){
        document.getElementById("print").innerText = " you went over 21, you lose"
};
})
}





// e.preventDefault();
//                    let final = document.createElement("li");
//                    final.innerText = `${distance.value}  ${currentUnits.value} equals ${conversion} ${finalUnits.value}`;
//                    document.getElementById("ul").appendChild(final);
