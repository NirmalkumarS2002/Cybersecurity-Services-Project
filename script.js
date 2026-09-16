//navbar

let sidebar=document.querySelector(".sidebar")
let menubtn=document.querySelector(".menuBtn")
let closebtn=document.querySelector(".closeBtn")

menubtn.addEventListener("click",()=>{
    sidebar.classList.add("active")
})

closebtn.addEventListener("click",()=>{
    sidebar.classList.remove("active")
})