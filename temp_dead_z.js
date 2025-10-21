// Variable scoping:where variable can be accessed
// Global Scope :Variable of this can be used anywhere
// Function scope :variable can be accessed only under function
// Block Scope:accesseble only under block ..let and const are block scope

var age=15;  //age is global 
function hello(){
    let name="dristi"; //Cannot be accessed outside this functionk
    console.log(name);
    console.log(age);
}
hello();
if(age>20){
    console.log("greater than 20")
}
else{
    console.log("less than 20");
}

//Temporal dead zone:when you call the variable of let and const before declaration the error occur cause let and const are not hoistable like var
console.log(marks);  //Temporal dead zone
const marks=20;

