let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log("final value = ",inp.value);   
    p.innerText = inp.value; 
})