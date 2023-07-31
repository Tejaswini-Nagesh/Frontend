//this keyword in js
let user={
    name:"piyush",
    age:24,
    childobj:{
        newName:"Roadside coder",
    getDetails(){
        console.log(this.name, "and", this.newName);
    },
},
};
user.childobj.getDetails();

//
class user2{
    constructor(n){
        this.name=n;
    }
    getName(){
        console.log(this.name);
    }
}
const User =new user2("piyush");
console.log(User);

//ouput based question
const user1={
    firstName:"omkar",
    getName(){
        const firstName="piyush agrwal";
        return this.firstName;
    },
};
console.log(user1.getName());

//accessing ref
function makeUser(){
    return {
        name:"John",
        ref(){
            return this
        }
    };
}
let user3=makeUser();
console.log(user3.ref().name);

/*create an object calculator
let calculator={
    read(){
        this.a=+prompt("a=",0);
        this.b=+prompt("b=",0);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    },

};  
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/
//implement calc
const calc={
    total:0,
    add(a){
        this.total=this.total+a;
        return this;
    },
    multiply(a){
        this.total=this.total-a;
        return this;
    },
    substract(a){
        this.total=this.total*a;
        return this;
    },
};  
const result=calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);

//// closure examples write a function that would allow you to do this

function createBase(num){
    return function(innerNum){
        console.log(innerNum+num);
    };
}
var addSix=createBase(6);
console.log(addSix(10));
console.log(addSix(15));