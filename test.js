// const my_Api = `2adf11f6dc994852efeefe7230c701d0 ` //api key
// const arr_fun = async() => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=india&appid=${my_Api}`);//api url
//     const post = await response.json();
//     console.log(post);
    
// }
// arr_fun()

function numOfVow(str){
    let count = 0;
   for(let i=0;i<str.length;i++){
    
     if(
          (str.charAt(i)=='a')|| 
          (str.charAt(i)=='e') || 
          (str.charAt(i)=='i') ||
          (str.charAt(i)=='o') || 
          (str.charAt(i)=='u')
        ) {
            count= count +1 ;
        }
      
    } return count;
}

numOfVow("aneeka");