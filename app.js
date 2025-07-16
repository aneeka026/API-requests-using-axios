let btn = document.querySelector("button");
let input = document.querySelector("input");
let li = document.querySelector("li");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    if(input.value.trim() === "") return;

    let item = document.createElement("li");
    item.innerText = input.value; 

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item); 
    input.value = ""; 

})

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName); // kis node n trigger kia 
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})