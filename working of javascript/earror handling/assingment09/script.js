fetch("https://jsonplaceholder.typicode.com/posts/123456789")
    .then((response)=>{
        if(response.ok){
            console.log(response);
            const h2 =   document.createElement('h2');
            h2.innerHTML = `Data Fetched Successfully`;

            document.body.append(h2);
        }

        else{
            throw new Error("Something Went Wrong")
        }
    })
    .catch((error)=>{
        console.log(error);
        const h2 =   document.createElement('h2');
        h2.textContent = error;

        document.body.append(h2);
    });