//variable declared outside any function or block are in the global cope
//they are accessible anyware in the script
//local-only accessiable in the function they declared

let x = 10;
function sendMessage()
{
    let x = 1;
    console.log("hello world");
    console.log(x);//inside
}
sendMessage();
console.log(x);//outside

//block scope
//block scope of variable means that the accessible only within a block

function check(){
    if(true){
        let name="Webdevelopment";//block level
        var iscloudy = true;//var keyword has all scope
        console.log(name);
    }
    console.log(iscloudy)
}
check();

//call back function in js is a function that is passed as an argument to another function and it is executed after the completion of that function
//it is commonly used:handling asynchronous operations(eg.,API,server)

function first(){
    console.log("this is my first function");
}
function second(callback){
    console.log("this is my second function");
    setTimeout(callback,1000);
}
second(first);
 
let count = 0;
let Input=()=>{
    count++;
    console.log(count);
    if(count<5){
        Input();
    }
}
Input();