const bookList = [
    {name : 'The Alchemist',author : 'Paulo Coelho',publication_Year : 1988},

    {name : "Harry Potter and the Philospher's Stone",author : 'J.k Rowling',publication_Year : 1997},

    {name : "The Midnight Library",author : 'Matt Hagg',publication_Year : 2020},

    {name : 'The Psychology of Money',author : 'Morgan Housel',publication_Year : 2020},

    {name : 'Atomic Habits',author : 'James Clear',publication_Year : 2018}
];

let authorNameCapitalized = [];

const booksPublishedBefore2010 = bookList.filter((book)=>{

    if(book.publication_Year > 2010){

        const Updatedbook = Object.assign({},book);
        Updatedbook.author = Updatedbook.author.toUpperCase();

        authorNameCapitalized.push(Updatedbook);
    }

    return(book.publication_Year < 2010);

});


console.log("Books Published Befor 2010 : \n",booksPublishedBefore2010,'\n\n');
console.log("Books Published After 2010 : \n", authorNameCapitalized);