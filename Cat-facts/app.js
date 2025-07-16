let p = document.querySelector("#fact");
let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async ()=>{
  let fact = await getFacts(); 
  console.log(fact);
  p.innerText= fact;
})

async function getFacts() {
  try{
    let res = await axios.get(url);
    return res.data.fact;
    console.log(res);
    
  } catch(err){
    console.log("ERROR -",err);
    return "No fact found";
  }
}
