//Closure is combination of function and its req data or lexical scope
//Closure:{function + req data}

function outerFun(){
    let name="Dristi"; //let is block scope
    function inner(){ //this function bind with req. data name reference is shared not copy is made
        console.log(name);
    }
    return inner; //reference of inn function is returned
}
 let inn=outerFun(); //inn variable is response of function
inn(); //basically inner fun is called

