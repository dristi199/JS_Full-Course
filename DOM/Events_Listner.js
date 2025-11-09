//Events:
// Just announcement by browser  activities like doubleclick,scroll,keypair

//Event-target:elements present in HTML code are event target 

//Syntax:<event-target>addEventListner(<event-type>,<function-action>)



function changeText(){
 let para=document.getElementById('para');
para.textContent="i love you";

}
let para=document.getElementById('para');
para.addEventListener('click',changeText);

//para.removeEventListener('click',changeText);  to remove that event


//Phases of Event
// 1.Capturing phase
// 2.At Eventphase
// 3.Bubbling Phase


//Default events:
//
