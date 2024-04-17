// Function To Calculate All Prices
function calculateTotal(...Paremeters){

    let sum=0;

    for(let i of Paremeters){
        sum+=i;
    }

    return sum;
}

const totalPrice = calculateTotal(125,20,30);

console.log(`The total cart value is ${totalPrice}`);