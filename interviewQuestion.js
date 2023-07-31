/*1.Hoisting
function fruite(){
    console.log(name);//undefined
    console.log(price);//gives error cannot be access cause its let
    var name="teju";
    let price=20;
}
fruite();
//2. + sign before boolean and string it will convert into number
console.log(+true);
console.log(typeof +true);
//3.! gives u false and !! gives u true before any string
console.log(!!"teju");
console.log(typeof("anil"));//undefined

//4.
let data="size";
const bird={
    size:"small",
};
console.warn(bird[data]);//small varibale access
console.log(bird["size"]);// key access
console.log(bird.size);//object access
console.log(bird.data);//can't access variable using dot

//5.
let c={ name:"peter" };
let d;
d=c;
c.name="anil";
console.log(d.name);//anil cause object always store in memory and when u pass object 
//it will take updated value because it will replace old one

//6.
var x;
var x=1;
console.log(x);

/*7.
var x=20;
let x=10;
console.log(x);//error x is already declared


//8.
let a=3;
let b=new Number(3);
console.log(a==b);
console.log(a===b);

//9.
function fruit(){
    console.log("woof");

}
fruit.name="apple";//undefined
console.log(fruit());//woof

//10.
function sum(a,b){
    return a+b;

}
console.log(sum(1,"2"));//12 it will concat the values

//11.
let number=1;
console.log(number++);
console.log(++number);
console.log(number);//1 3 3

//12.
function getAge(...args){
    console.log(typeof args);// object
}
getAge(21);

//13.
function getAge(){
    'use strict';
    var age=21;
    console.log(age);
}
getAge();
//14.
const sum1=eval('10*10+5');  //eval takes string but convert into number
console.log(sum1);
//15.
//sessionStorage.setItem('cool_secret',123);//sessionStorage value remove when we close the tab

//16
const obj={1:"a",2:"b",3:"c"}
console.log(obj.hasOwnProperty("1"));//true
console.log(obj.hasOwnProperty(1));//true

//17.
const obj1={a:"one",b:"two",a:"repeat"};
console.log(obj1);

//18.
for(let i=1;i<5;i++){
    if(i==3)
    continue;
    console.log(i);
}
//19
/*<div onclick="console.log('first div')">
<div onclick="console.log(second div)">
    <button onclick="console.log('button')">
    </button>
    </div>
    </div>
//20
const person={name:'lydia'};
function sayHi(age){
    return `${this.name} is ${age}`;

}
console.log(sayHi.call(person,21));//lydia is 21
console.log(sayHi.bind(person,21)());//while binding we again need to call it
//21.

function sayHi(){
    return (()=>0)();
}
console.log(typeof sayHi());//number

//22
function sayHi(){
    return ()=>0;

}
console.log(typeof sayHi());
//23
const numbers=[1,2,3];
numbers[3]=numbers;
console.log(numbers);//it will check 3 position and print infinite times

//24
const  numbers2=[1,2,3];
numbers2[6]=11;
console.log(numbers2);// 1 2 3 empty 3 items 11

//25
console.log(null==undefined);//true
//26
console.log(!!null);
console.log(!!"");
console.log(!!1);
if({}){
    console.log("teju");
}
else
{
    console.log(false);
}
//27.
let data8=3+4+'5';
console.log(data8);//75

/*28
console.warn(setInterval(()=>console.log('hi'),1000));
console.warn(setInterval(()=>console.log('hi'),1000));
console.warn(setInterval(()=>console.log('hi'),1000));
 //it will return id  1 2 3 of every interval after that it will print hi hi 

//29

let data9=[1,2,3].map(num=>{
    if(typeof num=='number') return // it returing empty thats why output is undefined
    return num*2;
});
console.log(data9);

//30
function Car(){
    this.make='tata';
    return {make:'kia'};
}
const myCar=new Car();
console.log(myCar.make);
//31

(()=>{
    let x=(y=10);
})();
console.log(typeof x);//number

//32
let dataarr={name:"teju",age:29,skill:"js"};
let info={city:"noida",mail:"teju@gmail.com"};
let data1={...dataarr,...info};
console.log(data1);
*/
//33
const result=null||false||'';
console.log(result);

//34
const result2=[] || 0 || true;
console.log(result2)

//35
console.log(Promise.resolve(5));

//36.
console.log((x=>x)('I love'));
console.log(`${(x=>x)('i love')} to program`);

//37
function sumValue(x,y,z){
    return x,y,z;
}
console.log(sumValue(...[1,2,3]));

//38

const name='code step by step';
console.log(!typeof name==='object');
console.log(!typeof name==='string');
console.log(!typeof name=== false);

//39
const name4="subscribe";
const age=21;

console.log(isNaN(name4));
console.log(isNaN(age));