//two data types in js primitive and non primitive(reference data types)
//reference types:Object,Array,Function

//Object:Collection of key value pair

let obj={
    name:"dristi","last":"Neupane Drist",age:21,
    greet:function(){
        console.log("hello guys");
    }
}
console.log(obj);
obj.greet();


//-) Shallow Copy 
// suppose obj is created  then the main object is stored in heap memory and 
// in stack memory reference of actual object is present 
// if we suppose obj2=obj then obj points to same object in heap memory..It is shallow copy


// Array:Collection of items(function,integer,strings)
// -Can also put string,integer together in array

let arr=[1,"dristi",2,3,4];
console.log(arr);

//Array Constructor:Can create arrays using array constructor.The Array constructor can be called with or without new keyword

let ab=new Array(1,2,4,"dristi");
console.log(ab[1]);
ab.push("neupane");
ab.push("first");
ab.pop();
console.log(ab);
//console.log(ab.slice(1,2));


                           // --Built-in methods 
                   //1 Push--)insert at end 
                   //-2 Pop--)remove last item
                    //-3 Shift--)Remove first item
                    //4 unshift--)add first item
                   //5- slice--)new part
                   // 6-Splice--) array content change(inside it can insert,replace)

ab.splice(2,1,"hi");  //2 represent in 2 index and 1 represent replace 2 index value into hi
console.log(ab);

// 6)Map:lets you create new array by applying function to each element of existng array
// -Doesnot change original array but instead returns new one
// Syntax:array.map(function(currentValue, index, array) {
//   //return something
// })

let arra = [10,20];
let Ar=arra.map((num) =>{
    console.log(arra);
    return num*num;
}) 
   //this ) executes itself without calling functions
   console.log(Ar);

//Filter function-It filter outs the certain values and returns true or false
let fl=[10,11,12,14]
let even=fl.filter((num) =>{
    if(num%2==0){  //can also write return num%2;
        return true;
    }
    else{
        return false;
    }
})
console.log(even);

//Reduce:suppose you have array [10,20]then we have to do some operations like sum of it then reduce function is used

let rd=[20,30,40,10];
const sum=rd.reduce((acc ,current)=>{
 return acc+current;
},0);
console.log(sum);

//Sort
rd.sort();console.log(rd);

//Arrays with functions
const fA=[10,20,30];
function getSum(fA){  //same arrow function let getSum=(fA)=>{}
    let len=fA.length;
    let sum=0;
    for(let i=0;i<len;i++){  //using forEach loop fA.forEach((val) =>{
      //  sum=sum+val})
        sum=sum+fA[i];
    }
    return sum;
}
console.log(getSum(fA));





