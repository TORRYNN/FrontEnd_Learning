var input=document.querySelector("input") ;

input.addEventListener("input",()=>{
 var match=data.filter((e)=>{
        return e.name.toLowerCase().startsWith(input.value.toLowerCase());
    })
    var newusers="";
    match.forEach((Elem)=>{
    newusers += `<div class="person">
                        <div class="img"></div>
                        <h4>${Elem.name}</h4>
                    </div>`;
    
})
document.querySelector(".people").innerHTML=newusers;

})


var data=[
    {name:"Pratham"},
    {name:"Prakash"},
    {name:"Prem"},
    {name:"Sahir"},
    {name:"Krishna"},
    {name:"Krish"}
]

var pers="";

data.forEach((Elem)=>{
    pers += `<div class="person">
                        <div class="img"></div>
                        <h4>${Elem.name}</h4>
                    </div>`;
    
})

document.querySelector(".people").innerHTML=pers;


