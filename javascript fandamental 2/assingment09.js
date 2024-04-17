function uniqueCharactersCheck(userName){
    // Creating a set to store only unique characters
    let set = new Set(userName);

    if(userName.length == set.size){
        console.log("The input string contains unique characters.");
    }else{
        console.log("The input string contains duplicates.");
    }
    
}

uniqueCharactersCheck('Mike');
uniqueCharactersCheck('Steve');