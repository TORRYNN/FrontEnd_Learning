let url= "https://catfact.ninja/fact";

let btn=document.querySelector('#btn');

btn.addEventListener('click', async()=>{
    let fact=await getFacts();
    let p=document.querySelector('#fact');
    p.innerText = fact;
})

async function getFacts() {
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data.fact;
    }catch(err){
        console.log(err);   
        return "No fact found";
    }
    
}