// Classes:Blue print of object which tells what membeer are present in particular entity ,which function,properties and methods in entity
// Objects:Entites of class .

class Car{
    //properties
    #col="white" //private only accessed inside this class not even object
    ht=200;
    name="lamborginni";

    //behaviour
    speed(){
        console.log("runs 200mphs");
    }


}
let obj=new Car();
console.log(obj.name);
obj.speed();