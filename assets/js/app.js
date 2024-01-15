const cl=console.log;


const btn1=document.getElementById("btn1");
const input1=document.getElementById("input1");






let onbtnclick=(eve)=>{
cl(eve)
let oddeve=input1.value; 
cl(oddeve);

// if(oddeve===0){
//     alert(`${oddeve} invalid`)
// }
if(oddeve%2===0){
    alert(`${oddeve} is even`)
}
else{
    alert(`${oddeve} is odd`)
}
input1.reset()
}














btn1.addEventListener("click",onbtnclick);


