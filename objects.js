const user={
    name:"roadside user",
    age:24,
    "like this video":true
}

//to add new key and value
user.hobby="play";
 //delete user.age;
 //modify existing
 user.name="Teju";
 console.log(user);
//delete keyword only used when we want to delete properties from object
 const func=(function(a){
     delete a;
     return a;
 })(5);
 console.log(func);
//if space in key 
 console.log(user["like this video"]);

 //add dyanamic properties into object

 const property="firstName";
 const name="piyush Agarwal";
 const user1={
     [property]:name
};
console.log(user1.firstName);

//iterate to an object
for(key in user){
    console.log(user[key]);
}
//findout output
//1. if two keys with same name it will replace first one
const obj={
    a:"one",
    b:"two",
    a:"three",
};
console.log(obj);
//2-create a function multiplyByTwo(obj) that multiplies all numeric property values 
//of nums by 2
let nums={
    a:100,
    b:200,
    title:"my nums",
} 
multiplyByTwo(nums);

function multiplyByTwo(nums){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key]= obj[key]+2;
        }
    }
}
console.log(nums);
//3 overlap the object value
const a={};
const b={key:"b"};
const c={key:"c"};

a[b]=123;
a[c]=456;

console.log(a);
//JSON.stringify and JSON.parse

const userstring={
    name:"piyush",
    age:24,
};
const strobj=JSON.stringify(userstring);
//console.log(JSON.stringify(userstring));
console.log(strobj.name);

//store in localstorage
//localStorage.setItem("test",userstring);
//console.log(JSON.parse(localStorage.getItem("test")));
console.log(JSON.parse(strobj));

//object destructuring
let objdest={
    nameobj:"piyush",
    age:24,
};
const nameobj="roadside coder";
const {nameobj:myName}=objdest;
console.log(myName);

//spread and rest operator
function getItem(fruit,fav,...args){
    return [...fruit,...args,fav]
}
console.log(getItem(["banana","apple"],"pear","orange"));


