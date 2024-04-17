const listOfUserName = ["Steve","Michel","Smith","Ricky","Ponting","Andrew","Henry","Ron","Harry","Sevrus","Snape"];

// console.log(listOfUserName.includes('Rickyy'));


function isUserPresent(userName){

    if(listOfUserName.includes(userName)){
        console.log(`Yes, ${userName} is a valid user.`);
    }

    else {
    console.log(`No, ${userName} is not a valid user.`);
    }
}


isUserPresent("Ricky");
isUserPresent("Someone");