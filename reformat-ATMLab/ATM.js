class Bank{
    constructor(){
        this.bank = {}
        this.transactions = {}
}
    new_client(CN, name, balance){
        // this.bank[CN] = [name, balance]
        this.bank[CN] = { "name" : name, "balance" : balance }
        this.transactions[CN] = [`starting balance ${balance}, `]
}
    check_balance(CN){
        return `your balance is ${this.bank[CN]["balance"]}`
}
    deposit(CN, amount){
        this.bank[CN]["balance"] += parseFloat(amount)
        this.transactions[CN] += [`deposit of ${amount}, `]
        return `Your just deposited ${amount}. Your balance is now ${this.check_balance(CN)}`
        }
    withdraw(CN, amount){
        if (amount > this.bank[CN]["balance"]){
            return `sorry you only have ${this.bank[CN][1]} in your account we can not give you ${amount}.`}
        else{
            this.bank[CN]["balance"] -= parseFloat(amount)
            this.transactions[CN] += [`withdrawal of ${amount}, `]
            return `Your just withdrew ${amount}, your balance is now ${this.bank[CN]["balance"]}`}
}
    print_transactions(CN){
        return this.transactions[CN]
}
}

let BankofAmerica = new Bank();
BankofAmerica.new_client(123456789, 'mitchell', 10000)
BankofAmerica.new_client(789456123, 'tyler', 8000)
BankofAmerica.new_client(100000000, "Santa", 1000000000)
BankofAmerica.deposit(123456789, 200)
BankofAmerica.withdraw(123456789, 80)
BankofAmerica.deposit(123456789, 2000)

let requests = 0
let card = 0
let amount = 0
while (requests > -1){
    let to_do;
    let cash;
    if (requests == 0){
        card = prompt("what is your card number")
        }
    if (requests>=0){
        to_do = prompt('\nOptionns: \ncheck balance: c \ndeposit: d\nwithdrawal: w\nfor a list of past transactions: t\nexit: e\nwhat would you like to do >>  ')
    }
    if (to_do == "c"){
        alert(BankofAmerica.check_balance(card))
        requests += 1
        }
    else if (to_do == "d"){
        amount = prompt('how much would you like to deposit today? >> ')
        console.log(card);
        alert(BankofAmerica.deposit(card, amount))
        requests += 1
        }
    else if (to_do == 'w'){
        amount = prompt("How much would you like to withdraw? >> ")
        alert(BankofAmerica.withdraw(card, amount))
        requests += 1
        }
    else if (to_do == 't'){
        alert(BankofAmerica.transactions[card])
        requests += 1
        }
    else if (to_do == 'e'){
        alert("thank you for choosing Bank of America.")
        requests = -1
}
}
