const person = {
    firstName : "Steve",
    lastName : "Smith",
    age : 21
};

// Function To Concatenate fullname and lastname also convert age(in years) into number of days.
function ageInDays(person){

const fullName = person.firstName+" " + person.lastName;
const ageInDays = person.age * 365;

const logResult = () => {
    console.log(`The Person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
}
// Returning The Callback function
return logResult;

}

const logResult = ageInDays(person);

logResult();