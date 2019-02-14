let todo = document.getElementById("new_todo");
let counter = 0;

todo.addEventListener("click", function(e){
let work = document.createElement("li");
let done = document.createElement("input");
done.type = "checkbox";
work.appendChild(done);
let field = document.createElement("input");
work.appendChild(field);
let dismiss = document.createElement("button");
dismiss.innerText = "Delete";
dismiss.id = counter;
counter += 1 ;
dismiss.addEventListener("click", function(e){
dismiss.parentNode.remove();
})
work.appendChild(dismiss);
work.class="item";
document.getElementById("ul").appendChild(work);

})








//  e.preventDefault();
//                    let final = document.createElement("li");
//                    final.innerText = `${distance.value}  ${currentUnits.value} equals ${conversion} ${finalUnits.value}`;
//                    document.getElementById("ul").appendChild(final);
//
// <input type="text" required pattern="[0-9]{5}" id="card" placeholder="What is your 5 digit card number" >

//let submit = document.getElementById("cc");
//submit.addEventListener("click", function(e){
//bal.innerText = `Balance: ${BankofAmerica.check_balance(cardnum)}`
//trans.innerText = `${BankofAmerica.print_transactions(cardnum.value)}`
//console.log(trans.innerText)
