// Variable global
const header = document.querySelector("header")
const ul = document.querySelector("ul")
const info = document.querySelector(".info")
const humb = document.querySelector(".humberger")
const cl = document.querySelector(".close")

//Event to scroll the header
document.addEventListener('scroll', ()=>{
    header.style.opacity = (window.scrollY > 420) ? "0" : "100"
    header.style.background = (window.scrollY > 420) ? "none" : "#fff"
})

humb.addEventListener('click', () =>{
    ul.classList.toggle("collapse")
})

cl.addEventListener('click', () =>{
    ul.classList.toggle("toggle_collapse")
})