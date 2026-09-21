//navbar

let sidebar=document.querySelector(".sidebar")
let menubtn=document.querySelector(".menuBtn")
let closebtn=document.querySelector(".closeBtn")

menubtn.addEventListener("click",()=>{
        document.body.classList.add("menu-open");
    sidebar.classList.add("active")
})

closebtn.addEventListener("click",()=>{
    document.body.classList.remove("menu-open");
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
       window.location.href="404.html" 
    },1000)

    ferror.style.color = "white";

    femail.value = "";
});


// loading

(function () {
    document.body.classList.add('is-loading');

    var pre   = document.getElementById('preloader');
    var bar   = pre.querySelector('.pre-bar i');
    var count = document.getElementById('preCount');
    var pct = 0, finished = false, timer;

    timer = setInterval(function () {
        if (pct < 90) {
            pct += Math.random() * 8;
            if (pct > 90) pct = 90;
            bar.style.width = pct + '%';
            count.textContent = Math.round(pct);
        }
    }, 150);

    function finish() {
        if (finished) return;
        finished = true;
        clearInterval(timer);
        pct = 100;
        bar.style.width = '100%';
        count.textContent = '100';

        setTimeout(function () {
            pre.classList.add('done');
            document.body.classList.remove('is-loading');
            if (window.__heroTl) window.__heroTl.play();
            if (window.ScrollTrigger) ScrollTrigger.refresh();
        }, 350);
    }

    window.addEventListener('load', finish);
    setTimeout(finish, 6000); // safety fallback
})();