//function is block of code which is reusable

function hello(){  //function definition
    console.log("dristi");
}
//function call
hello();
function sum(num1,num2){//num1 and 2 is parameter
    return num1+num2;
}
 let val=sum(2,3);  //2,3 is an argument
 console.log(val)

 //can also store function in variable
 const mult=function(a,b){
    return a*b;
 }
console.log(mult(5,6));


///-> Arrow function
const div= (x,y) => {
    return x/y;

}
console.log(div(10,2));