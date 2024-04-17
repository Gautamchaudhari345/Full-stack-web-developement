class bankAccount{
    constructor(name,initBalance){
        this.name = name;
        this.balance = initBalance;
    }
    // Method For Depositing Amount
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited Rs ${amount}. New balance: Rs.${this.balance}`);
        }
        else{
            console.log('Invalid Deposit Amount. Please enter a positive amount');
        }
    }
    //Withdraw
    withdraw(amount){
        if(amount <= 0 ){
            console.log('Invalid withdraw amount. Please enter a positive amount');
        }
        else{
            if(amount > this.balance){
                console.log("Insufficient funds for withdrawl");
            }else{
                this.balance -= amount;
                console.log(`Withdrawl Rs.${amount}. New Balance ${this.balance}`);
            }
        }
    }
    //Check Balance
    checkBalance(){
        console.log(`Account balance for ${this.name} is Rs.${this.balance}`);
    }

}

const Steve =  new bankAccount('Steve',1000);

// Checking Balance
Steve.checkBalance();

// Depositing Amount
Steve.deposit(500);
Steve.deposit(-50);

// Withdrawing Amount
Steve.withdraw(200);
Steve.withdraw(1500);
Steve.withdraw(-500);

Steve.checkBalance();