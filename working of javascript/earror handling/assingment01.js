const url = 'https://www.linkedin.com/in/abhishek-ranjan-791b6b22a/';        //Valid Profile Url
// const url = 'https://www.linkedin.com/groups/7039829/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A7039829-7100219804472532992&q=highlightedFeedForGroups'; //Invalid Url


const pattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/;

const regExOne = new RegExp(pattern,'gi');

if(regExOne.test(url,pattern)){
    console.log("Valid Profile");
}
else{
    console.log("Invalid Profile Or Link");
}