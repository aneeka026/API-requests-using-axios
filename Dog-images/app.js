let btn = document.querySelector("button");
let img = document.querySelector("img");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async()=>{
  let link = await getImage();
  img.setAttribute("src",link);
  console.log(link);
  
});

async function getImage() {
  try{
    let res = await axios.get(url);
    return (res.data.message);
  } catch(e){
    console.log("error -",e);
    return "No image found";
  }
}
