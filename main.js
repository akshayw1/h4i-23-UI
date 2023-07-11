const menu=document.querySelector(".menu li"); 
const menuBtn=document.querySelector("#open-btn");
const closeBtn=document.querySelector("#close-btn");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";

})