console.log("Script Start");
const URL = "https://jsonplaceholder.typicode.com/todos/1";


async function showFetchedData(){
   
  const response = await fetch(URL);

    return(response.json());
  
}


const data = showFetchedData();
//Consuming The Promise Which Is Returned by the async funciton
data.then((value)=>{

    console.log(value);
})

console.log("Script End");