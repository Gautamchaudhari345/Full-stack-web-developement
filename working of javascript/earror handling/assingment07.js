// Creating Object To Store Response's Object from 'todosResponse' and 'postsResponse';
const bothResponses = {};

// Async Function
async function retriveData(){

// Fetching Response from URL

const todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");

// Converting "Promise response" to object
const todoData = todosResponse.json();
const postsData = postsResponse.json();


// Assigning todos Object To 'bothResponses' Object
todoData.then((data)=>{
  Object.assign(bothResponses,data)

})

// Assigning posts Object To 'bothResponses' Object
postsData.then((data)=>{

  Object.assign(bothResponses,data)

})
// Waiting For assinment of values into 'bothResponse' and the printing it.

setTimeout(()=>{
  console.log(bothResponses);
},100)

}

// Consuming Promise To Get Values on "bothResponses" Object And Printing It.
retriveData().then((v)=>{});