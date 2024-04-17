const randomNumber = document.getElementsByTagName('h1');
const message = document.getElementsByTagName('h3');

let delay = 3000;

let secondsRemaining = delay/1000;
// secondsRemaining2;
console.log(randomNumber[0]);
console.log(message[0]);

setInterval(()=>{
    randomNumber[0].textContent = Math.floor(Math.random()*100);

    console.log(randomNumber);
    secondsRemaining = delay/1000;

},delay);

setInterval(() => {


   message[0].textContent = `${secondsRemaining} Seconds Remaining Untill The Random Number Generated.`
    secondsRemaining--;
}, 1000);