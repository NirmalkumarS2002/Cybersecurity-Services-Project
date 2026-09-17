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


let errorpage=document.querySelectorAll(".errorpage")
errorpage.forEach((err)=>{
    err.addEventListener("click",()=>{
        window.location.href="404.html"
    })
})

//

const femail = document.querySelector("#femail");
const footSubBtn = document.querySelector(".foot-subBtn");
const ferror = document.querySelector(".ferror");

footSubBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const emailValue = femail.value.trim();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        ferror.textContent = "Please enter your email address";
        ferror.style.color = "red";
        return;
    }

    if (!emailPattern.test(emailValue)) {
        ferror.textContent = "Please enter a valid email address";
        ferror.style.color = "red";
        return;
    }

    // Valid email
    ferror.textContent = "Subscribed successfully!";

    setTimeout(()=>{
       ferror.textContent =""  
    },3000)
    ferror.style.color = "white";

    femail.value = "";
});