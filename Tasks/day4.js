let details={
    name:"JS",
    totalmark:80
}
console.log(details.name);
console.log(details["totalmark"]);

//an array of object is a collection where each element is an object with properties
//this is used to group related data together in a structer way

let detail={
    name:"computer",
    subject:{
        dbms:99,
        java:90
    }
}
console.log(detail.subject.dbms);
console.log(detail.subject["java"]);

let total={
    subject:{
        dbms:87,
        java:94
    },
    sum:function(){
        let totalmark=this.subject.dbms+this.subject.java;
        return totalmark;
    }
}
console.log(total.sum());

//object destructuring is a syntax in javascript that allows you to extract values from objects and assign them to to variables in a clean and readable data

let person={
    job:"softwaredevloper",
    salary:25000
}
const {job:fristkey,salary:secondkey}=person;
console.log(fristkey+" "+secondkey);

let arr=new Array(1,2,"Three");
console.log(arr[2]);

//array desctruring

let arr2=[`JS`,true,false];
const [name,h1,h2]=arr2;
console.log(name);

//filter returns a new array cotains only the elements that match a condition

let student=[
    {name:"person1",grade:"A"},
    {name:"person2",grade:"B"},
    {name:"person3",grade:"C"}
]
let gradestudent = student.filter(student => student.grade==="A");
console.log(gradestudent);
 
///

let names=["person1","person2","person3"];
names.splice(1,1,"david");
console.log(names)