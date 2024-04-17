// Pricing For Viewers
let forChild = 100;
let forAdult = 150;
let forSenior = 120;
// Number of Peoples
let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

const totalPrice=(numberOfChilds*forChild)+(numberOfAdults*forAdult)+(numberOfSeniors*forSenior);

console.log("The total ticket price is ",totalPrice);