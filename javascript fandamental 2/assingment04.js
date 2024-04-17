//Array Products with their prices
const products = [
    {name: "Laptop",price:120000},
    {name: "Mobile",price:7000},
    {name: "Laptop Bag",price:20000},
    {name: "Watch",price:20000},
    {name: "Mobile Charger",price:1500}
    ];

    // Soring Products On The Basis of their Prices
    products.sort((a,b)=>a.price-b.price); 


    //Printing The Output:-
    console.log(`The product with maximum amount is ${products[products.length-1].name} which is priced at Rs. ${products[products.length-1].price.toLocaleString('en-IN')}`);

    console.log(`The product with minimum amount is ${products[0].name} which is priced at Rs. ${products[0].price.toLocaleString('en-IN')}`);

    