const para=`hello john and joe`;
const textmatch=para.match(/\b\w+\b/);
//console.log(textmatch)

const mobilenumber=9785363737;
const nummatch=/^[0-9]\d{9}/g;
if(nummatch.test(mobilenumber.toString())){
   console.log("Matched"); 
}
else{
    console.log("Mismatched");
}