const sentence = "please please submit your assignment on time, your assignment are important";

//Sentence converted into array of Words
const ArrayOfWords = sentence.split(' ');
// Four Storing Words Uniqly
const wordCounts= new Set();

// Call back function for map
const countdWords = (value,index)=>{
    
    let count=1;

    // Counting Redundant
  for(let i=index+1;i<ArrayOfWords.length;i++){
    if(ArrayOfWords[i] === value){
        count++;
    }
  }
// If already have item in 'wordCount' then returning 'undefined'
  if(wordCounts.has(value)){
     return undefined;
  }
  //Else pushing value in 'wordCount' and returing their count
  else{
    wordCounts.add(value);
    return(`${value} => ${count}`)
  }

   

}

// For Removoing all undefined , there after only one undefined will left.
const repeatedCounts = [ ...new Set( ArrayOfWords.map(countdWords))];

// For Removing one undefined.
for(let i=0;i<repeatedCounts.length;i++){
    if(repeatedCounts[i] == undefined){
        repeatedCounts.splice(i,1);
    }
}

// Printing Word Counts
console.log(repeatedCounts);