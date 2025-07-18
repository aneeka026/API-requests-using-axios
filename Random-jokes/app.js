let btn = document.querySelector("button");
let p = document.querySelector("p");
let url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", async()=>{
    let joke = await getJokes();
    p.innerText = joke;
})

//we can pass headers with api request (within axios request)
async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json"}};
        let res = await axios.get(url,config);
        let joke = res.data.joke;
        console.log(joke);
        return joke;
        
    } catch (error) {
        console.log(error);
        return "Joke not found";
    }
}
// getJokes();
