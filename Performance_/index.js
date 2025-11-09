//Performance improvement

//Code1:In this code number of reflow and repaint is 100 times so it takes more time
 
//to add 100 paragraph in UI
const t1=performance.now();
for(let i=1;i<100;i++){
    let para=document.createElement('p');
    para.textContent="This is paragraph" + i;
    document.body.appendChild(para);

    
}
//to measure the performance of code 
//use --performance.now()
//calculate the timing 
 const t2=performance.now();
console.log("total time taken by code1 is"+(t2-t1));

//CODE 2:number of reflow and repaint is one time so take less time to execute
//This code takes less time than first cause of reflow and repaint
const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=1;i<100;i++){
    let para=document.createElement('p');
    document.textContent="this is para 1"+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4=performance.now();
console.log("total time by code2 is "+(t4-t3));


//Reflow
//it is process of calculating position ,dimension of element that you want to render on page
//require more resources and time taking

//Repaint:Process of displaying content pixel by pixel.
//faster



//Document Fragment:
//Light weight document object..
//addpending the element donot take reflow and repaint .
//when adding documentFragment in document it takes one reflow and repaint but when adding other element on docFragment no repaint and no reflow

//Best code
let fragment=document.createDocumentFragment();

for(let i=0;i<100;i++){
    let para=document.createElement('p');
    para.textContent="this is frapment para" +i;
    //NO REFLOW and NO REPAINT FOR BELOW LINE
    fragment.appendChild(para);
}
//this code takes one reflow and one repaint
document.body.appendChild(fragment)