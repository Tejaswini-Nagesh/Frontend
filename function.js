//function Hoisting
functionName();
console.log(x);

function functionName(){
   console.log("Roadside coder");
}
var x=5;
   
//spread operator

function multiply(...arr){
    console.log(arr);
}
var arr=[5,6];
multiply(...arr);
//
function multiply(...nums){
    console.log(nums[0]*nums[1]);

}
var arr=[5,6];
multiply(...arr);