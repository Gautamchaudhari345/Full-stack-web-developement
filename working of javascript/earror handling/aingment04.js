const books = [
    {title : 'The Alchemist',author : 'Paulo Coelho',year : 1988},

    {title : "Harry Potter and the Philospher's Stone",author : 'J.k Rowling',year : 1997},

    {title : "The Midnight Library",author : 'Matt Hagg',year : 2020},

    {title : 'The Psychology of Money',author : 'Morgan Housel',year : 2020},

    {title : 'Atomic Habits',author : 'James Clear',year : 2018}
];

//Creating List Of Book Titles
const bookTitles = books.map((book,index,bookList)=>{
    return(book.title);
});


//Callback Function To Show Titles In Alphabetical Order
const showTitlesInAlphabeticalOrder = (bookTitles)=>{
//Soriting To Show Book Titles In Alphabetical Order
bookTitles.sort((a,b)=> a.charCodeAt(0) - b.charCodeAt(0));

//Printing Book Titles
for(let title of bookTitles){
    console.log(title);
}

}

//Function To Use Callback Function As Per Asked In Question
function showBookTitles(callback,titles){
    callback(titles);
}

showBookTitles(showTitlesInAlphabeticalOrder,bookTitles);