//Object is dynamic in nature because you can change properties of obbject during runtime
let obj={
    name:"dristi",
    age:20
};
console.log("obj",obj)
obj.color="white" ; //with this can change properties

// let a={val:20};
// let b=a ;//then it is not cloning b is reference of a

//Object Cloning
// 1->spread operator: ...
let dest={...obj}; //cloning is done
dest.age="22";
console.log("dest",dest);

//2->Assign-> dest=obj.assign({},src)
let obj2={
    value:2,
    nam:"assign"
}
 let asign=Object.assign({},obj,obj2);
 asign.name="raj";
 console.log(asign);

 // 3->can clone using Iteration
 let iter={};
 for(let key in obj2){
    let nk=key;
    let newValue=obj2[key];
    //insert newkey and newValue in iter and create clone
    iter[nk]=newValue;
 }
 iter.value=5;
 console.log("Iteration",iter);


 //Garbage Collector:Used for memory management.It frees the memory that is no longer  in use to perform effectively
 //Always run in background.We have no control over it.


