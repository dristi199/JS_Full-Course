//Hoisting:Behaviour in Js where variable and function declarations moved to top of their scope before code runs
//Function Hoisting:Entire function definition is shifted

greet();
 
function greet(){
    console.log("Hi guys");
}

//Variable Hoisting:only variable declaration is shifted not value shifted
console.log(age); //Undefined output
 var age=21

 //can do variable hoisting using var keyword only not possible in let and const.

         
                            ///*Function Call stack** */
// Stack : Last-In-First-Out
// Function call Stack is used to keep track of function . it keep function in stack and when task is done function is poped from Stack



