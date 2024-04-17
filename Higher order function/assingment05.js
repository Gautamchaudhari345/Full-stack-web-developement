const url = 'https://www.youtube.com/@PWSkillsTech/videos'; //Valid Url
// const url = 'www.youtube.com/@PWSkillsTech/videos';      //Not a Valid Url


const pattern = /(http|ftp|https):\/\/([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?/;


const regExOne = new RegExp(pattern,'gi');

if(regExOne.test(url)){
    console.log("It's Valid Url");
}
else{
    console.log("It's not a Valid Url");
}