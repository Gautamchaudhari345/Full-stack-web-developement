//List Of Items Which has Price In Dollar
const listItemsInDollar = [
    {Item : 'Laptop', Price : 1000},
    {Item : 'Iphone_13', Price : 400},
    {Item : 'Graphics_Card', Price : 600},
    {Item : 'Mother_Board', Price : 150},
    {Item : 'Processor', Price : 300}
] ;

//function to return the new object i.e item with converted Price
function ExchangerRate(item){
    //Created clone the object or item
    const itemInRuppees = Object.assign({},item);
    //Item Price Converted In New Object
    itemInRuppees.Price = itemInRuppees.Price*80;
    //Returned the object after conversion
    return itemInRuppees; 
}
//Array Of Items With Prices In Ruppees
const listItemsInRuppees = listItemsInDollar.map(ExchangerRate);

console.log(listItemsInRuppees);