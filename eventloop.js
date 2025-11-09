// Synchronous Code:Code executed at same Time .
// Asynchronous Code:not fixed that code is executed at same time 


function say(){
    console.log("hi  i execute after 5 sec");
}
console.log('hi');
setTimeout(say,5000);//Async code
console.log("i executed after setimeout fun");

// Explanation:Event Loop
// first we have callstack,browser and callbackqueue
// CallStack:When function is called entry is created in callstack and when completed function entry is removed

// 1.First entry is created for 'hi' ,it is executed and entry is removed
// 2.then setTimeout function entry is created,since it is asyn code it is moved to browser for some time and entry is removed.

// 3.Then another line of console.log is executed .
// 4.After some time browser passes the asynfunc to callback queue then eventloop passes to callstack if it is empty and that function is executed.



