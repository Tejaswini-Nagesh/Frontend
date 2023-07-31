//Question diff of Map and forEach
const arr=[2,5,3,4,7];
const mapResult=arr.map((ar)=>{
    return ar+2;
}).filter((ar)=>ar>2);

console.log(mapResult);
console.log(arr);

arr.forEach((ar,i)=>{
    arr[i]= ar+1;
});
console.log(arr);

//diff between null and undefined

let a=null;
console.log(a);
console.log(null==undefined);//true
console.log(null===undefined);//false

//let vs const vs var
{
    var b1="hello";
    console.log(b1);

}

//settimeout output  use let
function fuv(){
    for(var i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i);
        },1000);
    }
}
fuv();

//Explain call,apply,bind
var person={
    name:"Roadside Coder",
    hello:function(thing){
        console.log(this.name+"says hello "+thing);
    },
};
//console.log(person.hello("Teju"));
var altergo={
    name:"piyush agrwal"
};
//person.hello.call(altergo,"teju");

//person.hello.apply(altergo,["world"]);
const newHello=person.hello.bind(altergo);
newHello("world");


//compose
function addFive(a){
    return a+5;
}
function substratFive(a){
   return  a-2;
}
function mutiplyFive(a){
    return a*4;
}
const compose=(...functions)=>{
    return(args)=>{
    return functions.reduceRight((arg,fn)=>fn(arg),args);
};
};
const evaluate=compose(addFive,substratFive,mutiplyFive);
console.log(evaluate(5));

/*hoisting
function abc(){
    console.log(x,y,z);
    const x=30;
    let y=20;
    var z=10;
}
abc();
*/

//implicate and explicit Binding
var obj={
    name:"Piyush",
    display:()=>{
        console.log(this);
    },
};

var obj1={
    name:"ABC",
};
//obj.display();
obj.display.call(obj1);