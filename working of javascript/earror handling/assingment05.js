function greetings(name){
    return new Promise((resolve,reject)=>{
        resolve(`Hello, ${name}!`);
    })
}

greetings("Steve").then((onfullfilled)=>{
    console.log(onfullfilled);
})