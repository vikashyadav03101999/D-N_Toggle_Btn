let toggle=document.querySelector(".toggle");
let text=document.querySelector(".text");
let body=document.querySelector("body");

toggle.addEventListener('click',()=>{
toggle.classList.toggle("active");
if(toggle.classList.contains("active")){
    text.innerHTML="DAY_MODE",text.style.color="black";
    body.classList.add("img1");
    body.classList.remove("img2");
}
else{
    text.innerHTML="NIGHT_MODE",text.style.color="white";
    body.classList.add("img2");
    body.classList.remove("img1");
}
});


