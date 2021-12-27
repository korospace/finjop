const nav = document.querySelector('nav');

// --- Add shadow when scrolling ---
window.addEventListener('scroll',(e)=>{
    if(!nav.classList.contains('nav-down')){
        if(window.pageYOffset>0){
            nav.classList.add("shadow");
        }
        else{
            nav.classList.remove("shadow");
        }
    }
});

// --- nav toggle OnClick ---
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if(window.pageYOffset==0){
        if(nav.classList.contains('nav-down')){
            nav.classList.remove('nav-down');
            nav.classList.remove('shadow');
        }
        else{
            nav.classList.add('nav-down');
            nav.classList.add('shadow');
        }
    }
})

// ---  nav smooth scroll ---
let navLinks = document.querySelectorAll(".nav-link"); 
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let hrefValue = e.target.getAttribute('href');
        scrollTo(document.querySelector(hrefValue));
    });
});

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}

// --- add active class ---
let allSectionId = []
document.querySelectorAll("section").forEach(e => {
    allSectionId.push(e.getAttribute('id'));
})

window.addEventListener('scroll',(e)=>{
    allSectionId.forEach(id => {
        if(window.pageYOffset > document.querySelector(`#${id}`).offsetTop-20){
            navLinks.forEach(e => {
                e.classList.remove('active');
            });
            document.querySelector(`.nav-link.${id}`).classList.add('active');
        }
    })
});