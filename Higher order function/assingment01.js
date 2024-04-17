let input = 'This Is A String Input';

setTimeout(()=>{

    //Converting String Into Array
    input = input.split('');
    //Reversing The Array Of Characters
    input = input.reverse();
    // Finally Converting Array Of Characters Into String Type
    input = input.join('');
    
    
    console.log(input);

},2000);