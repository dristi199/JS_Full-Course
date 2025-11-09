//Instead of writing then and catch in promise more times ,we can use async_await for clean code

//Note:Using asyn-await ,we can execute asynchronous code  sequentially like synchronous behaviour

//Async function always return promise.

   async function getdata() {
    setTimeout(function(){
        console.log("executed after 3 sec");
    },3000);
    
   }
   getdata();

   //await:
   //FETCH API
   async function getData(){
    let res= await fetch('https://jsonplaceholder.typicode.com/todos/1');
 //parse json-async
  let data =await res.json();
    console.log(res);
    
   }
   getData();
   //1 Prepare url /api endpoint  ->sync
   //2 fetch data ->n/w call -> async
   //3 Process data ->sync

   //Without using await in line 2 ,line 3 is executed and data cannot be processed without fetching so await is used