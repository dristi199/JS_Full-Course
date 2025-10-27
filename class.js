// Classes:Blue print of object which tells what membeer are present in particular entity ,which function,properties and methods in entity
// Objects:Entites of class .

class Car{
    //properties
    #col="white" //private only accessed inside this class not even object
    ht=200;
    name="lamborginni";
    duration;

    //behaviour
    speed(){
        console.log("runs 200mphs");
        console.log("private pro",this.#col); //this represent current object
    }
    get fetchcol(){ //this function gets the private value it makes private field to access outside class
        return this.#col;
    }
    set modifycol(val){ //modify the property
        this.#col=val;
    }


    //Consturctor:to initialize value of properties constructor is used
    constructor(newdur,newhei){
        this.duration=newdur;
        this.ht=newhei;
    }


}
let obj=new Car(2,100);
console.log(obj.name);
console.log(obj.fetchcol);
console.log(obj.ht);
console.log(obj.duration);
obj.speed();

//Default parameter:allow to use function with default values.it can be used when value is not provided
//can also provide default object ,insert array too
function sayName(fname,lname="neupane",value={class:10,school:"mahendra"}){//neupane is default parameter
    console.log("Name is ",fname,"",lname,"",value);

    
}
sayName("Dristi");
//in default parameter when null is send in fuction call then null is stored
//but in undefined default value is stored..undefined is ignored

function all(name="love",detail=sayName()){ //can also pass function in default parameter
   console.log(name,"",detail);
}
all();