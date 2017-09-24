


function findPalindroms(pSentence){
    let arr=[];
    let words = pSentence.split(" ");
   
    for(let i=0; i<words.length; i++){
      words[i] = words[i].replace(/[^a-zA-Z]+/gm,"");   
      words[i]= words[i].toLowerCase();
    }
    
    for(let i=0; i<words.length; i++){
        let tersi=null;
        tersi=words[i].split("").reverse().join("");
        if(words[i]==tersi && tersi.length>1){
           arr.push(tersi);
        }
    }
    console.log(arr);
    return arr;
}
//for(let gez of words)
// regexp/W/g  