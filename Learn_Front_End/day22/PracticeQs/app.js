let btn=document.createElement("button");
btn.innerHTML='Button';
btn.style.width="100px";
btn.style.height="100px";

document.querySelector("body").append(btn);

btn.addEventListener('click',function(){
    btn.style.backgroundColor='green';
    setTimeout(() => {
        btn.style.backgroundColor='';
    }, 3000);
})
