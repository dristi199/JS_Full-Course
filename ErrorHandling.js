//Error:it disrupt normal execution of code
// When some line donot run for some reason and to not interrupt other event error handling is used.
 
//Compile time error:Error known before execution
//--syntax error:
// consl.log(hi);

//Runtime error:Error known after execution

//--Reference error
//console.log(x);

//Error Handling:
try{
    console.log(x);
    console.log('hi'); //this line not executed after error in line 15
}
catch(e){
    //tells what to do with error .
    //custom error
    //etry logic
    console.log(" Your Error is ",e);
}

//finally block-will run anytime
let y=20;
try{  //where error can occur
    console.log(y);
}
catch(e){
    throw new Error("Your have got error");
}
finally{
    console.log("It will run anytime even after error")
}

//--Throw->for custom error throw is used ..to throw error self
let errCode=200;
if(errCode=200){
    throw new Error("Invalid symbol");
}