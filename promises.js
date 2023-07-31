//promises in javascript
/*callback

console.log("start");

function importantAction(username){
    setTimeout(()=>{
        return `subscribed to ${username}`;
    },1000);
}

const message=importantAction("roadside coder",function(message){
    console.log(message);
});
console.log("stop");
*/

//promises
console.log("start");

const sub=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const result=false;
        if(result){
            resolve("successful promise");

        }
        else
        reject(new Error("failed"));
    },2000);
});
sub.then((res)=>{
    console.log(res);


}).catch((err)=>{
console.log(err);
})
console.log("stop");


//what is output
console.log("start");

const promise1=new Promise((resolve,reject)=>{
    console.log(1);
    resolve(2);
    console.log(3);
});
promise1.then((res)=>{
    console.log(res);
});

console.log("end");

//3.
console.log("start");

const fn=()=>
new Promise((resolve,reject)=>{
    console.log(1);
    resolve("success");

});
console.log("middle");
fn().then((res)=>{
    console.log(res);
});
console.log("end");