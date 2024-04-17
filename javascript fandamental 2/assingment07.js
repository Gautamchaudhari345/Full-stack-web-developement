const generateOtp =()=>{
    return (Math.floor(Math.random()*10000));
    }
    
    
    console.log(`Here is your otp: ${generateOtp()}`)