const nav=document.querySelector("nav");window.addEventListener("scroll",e=>{nav.classList.contains("nav-down")||(0<window.pageYOffset?nav.classList.add("shadow"):nav.classList.remove("shadow"))}),document.querySelector(".navbar-toggler").addEventListener("click",()=>{0==window.pageYOffset&&(nav.classList.contains("nav-down")?(nav.classList.remove("nav-down"),nav.classList.remove("shadow")):(nav.classList.add("nav-down"),nav.classList.add("shadow")))});let navLinks=document.querySelectorAll(".nav-link");function scrollTo(e){window.scroll({behavior:"smooth",left:0,top:e.offsetTop})}navLinks.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();e=e.target.getAttribute("href");scrollTo(document.querySelector(e))})});let allSectionId=[];document.querySelectorAll("section").forEach(e=>{allSectionId.push(e.getAttribute("id"))}),window.addEventListener("scroll",e=>{allSectionId.forEach(e=>{window.pageYOffset>document.querySelector("#"+e).offsetTop-20&&(navLinks.forEach(e=>{e.classList.remove("active")}),document.querySelector(".nav-link."+e).classList.add("active"))})});