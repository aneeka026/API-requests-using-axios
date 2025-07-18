let url = "http://universities.hipolabs.com/search?name=";
let country = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("li");

// let country = "nepal";

btn.addEventListener("click",async()=>{
    console.log(country.value);
    let collArray = await getColleges(country);
    console.log(collArray);
    show(collArray);
})

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log("error -",error);
        return [];
    }
}

function show(colArr) {
    list.innerText = "";
   for (const col of colArr) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
   } 
}
