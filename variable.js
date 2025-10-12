//--1--variables declared with let and const have block scope
//var have global scope
{
let x=2;
const PI=2.3
console.log(x)
console.log(PI);
}
//--2--let and const cannot be redeclared in same scope
//var can be redeclared
let x=5;
//let x="dristi" this is wrong

//-3-let  and const should be declared before use

//4-const cannot be resigned but let and var can 
const PI=3.2;
//PI=2.3 //this is incorrect