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

//Can store function in array
 let arr=[
    function sum(a,b){
        return a+b;
    },
    function sub(a,b){
        return a-b;
    }
];
let first=arr[0];
console.log(first(2,3));

let obj={
    age:22,
    greet: ()=>{
        console.log("hello");
    }
   
}
obj.greet();

//Function expression
let game=function(){
    console.log("i like only trading");
}
game();