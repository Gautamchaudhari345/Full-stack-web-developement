// Function TO Manipulate String
const manipulateString = (string,callback)=>{

    string = string.toUpperCase();
    // Function to print uppercase String
    callback = ()=>{
        console.log("The manipulated string is: ",string);
    }
    // Returing Function
    return callback;
    }
    
    let logString = undefined;
    
    logString = manipulateString("hello, world",logString);
    logString();