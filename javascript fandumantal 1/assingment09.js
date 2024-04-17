const arr = [1,2,"Love",56,"Steve",1234,undefined];

for(let i=0;i<arr.length;i++){

    if(typeof(arr[i]) == typeof('string')){
    
        console.log("Found The First String:  ",arr[i]);
        break;
    
    }
}