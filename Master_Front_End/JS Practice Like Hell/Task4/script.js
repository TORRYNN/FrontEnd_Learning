var add=document.querySelector("#add");
var remove=document.querySelector("#remove");

var inp=document.querySelector("input");
var ul=document.querySelector("ul");
var li;

add.addEventListener("click",()=>{
    if(inp.value.trim()===''){

    }
    else{
       console.log("hello");
        li=document.createElement('li');
        li.textContent=inp.value;
        ul.appendChild(li);
        inp.value='';
    }
})
remove.addEventListener("click",()=>{
    ul.removeChild(li);
})
