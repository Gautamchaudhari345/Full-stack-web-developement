let type1 = "standard";
let type2 = "express";
let type3 = "overnight";

let whichType = type1;

switch(whichType){
    
    case "standard":
        console.log(type1,"might take 3-5 days");
        break;

    case "express":
        console.log(type2,"might take 1-2 days");
        break;

    case "overnight":
        console.log(type1,"Overnight would be delivered or the next day");
        break;

    default:
        console.log("Not A Standard Input");
}