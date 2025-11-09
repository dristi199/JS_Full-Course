// Promise:Object which handle the state of asyn function .
// It lets asyn methods return values like sync methods:instead of immediately returning the final value the asyn method returns a promise to supply value at some point in in future .
// Has 3 state:
// pending:initial,neither fulfilled nor rejected 
// fulfilled:operation was completed successfully
// rejected:operation failed


function nam(){
     console.log("i execute after 5 sec");

 }

let fprom=new Promise((resolve,reject)=>{
   setTimeout(nam,5000); //asyn code

});

let sProm=new Promise((resolve,reject)=>{
    setTimeout(function sayl(){
        console.log("I am Neupane")
    },3000);
    resolve(1);
});

//Promise ->fulfilled->then
//Promise->failure/reject->catch

let promise1=new Promise((resolve,reject)=>{
    let positive=true;
    if(positive){
        resolve("Promise fulfilled");
    }
    else{
        reject("Rejected");
    }
});
promise1.then((message)=>{  //can also use multiple then block
    console.log("message is " + message);
return 10;

}).then((message)=>{
    console.log(" second message is "+ message);//message contain 10 
    return 20;
    
}).then((message)=>{
    console.log(" third message is "+ message);
    
}).catch((error)=>{
    console.log("Error" + error);
}).finally((message)=>{
    console.log("Whether then or catch block executed finally is executed");
})

let prom1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
})
let prom2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"second")
})
let prom3=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"third")
})
Promise.all([prom1,prom2,prom3])//new promise is created which is marked resolved when all promise is resolved
.then((values)=>{
    console.log(values);
});