const eventDate = '2023-08-31';


const calculateRemainingDays = (eventDate)=>{

const eventDateReal = new Date(eventDate);
const CurrentDateReal = new Date();

//console.log(eventDateReal);
//console.log(CurrentDateReal);

const dateDifference = eventDateReal - CurrentDateReal;
const daysRemaining = Math.floor((dateDifference/(1000 * 3600 * 24)));

if(daysRemaining<0){
    console.log(`Event Passed ${Math.abs(daysRemaining+1)} days ago.`);
}
else
console.log(`${daysRemaining} days remaining`);
}

calculateRemainingDays(eventDate);