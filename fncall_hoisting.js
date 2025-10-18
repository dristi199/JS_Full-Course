//Hoisting:Behaviour in Js where variable and function declarations moved to top of their scope before code runs
//Function Hoisting:Entire function definition is shifted

greet();
 
function greet(){
    console.log("Hi guys");
}

//Variable Hoisting:only variable declaration is shifted not value shifted
console.log(age); //Undefined output
 var age=21
