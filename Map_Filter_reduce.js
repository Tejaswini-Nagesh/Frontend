//map,filter,reduce

const nums=[1,2,3,4];
const multiplyThree=nums.map((num,arr,i)=>{
    return num*3;

});
console.log(multiplyThree);

//filter
const morethantwo=nums.filter((num)=>{
    return num>2;
});
console.log(morethantwo);
//reduce
const sum=nums.reduce((acc,curr)=>{
    return acc+curr;

},0);
console.log(sum);