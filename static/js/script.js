document.addEventListener("DOMContentLoaded", function(){

const popup = document.getElementById("popup")

document.querySelectorAll(".open-popup").forEach(btn=>{
btn.addEventListener("click",function(e){
e.preventDefault()
popup.style.display="flex"
})
})

document.querySelector(".popup-close").onclick=function(){
popup.style.display="none"
}

const overlay = document.querySelector(".popup-overlay")

if(overlay){
overlay.onclick=function(){
popup.style.display="none"
}
}

document.addEventListener("keydown",function(e){
if(e.key==="Escape"){
popup.style.display="none"
}
})

})


const inputs = document.querySelectorAll(".popup-box input")

inputs.forEach((input,index)=>{

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

e.preventDefault()

if(index < inputs.length-1){
inputs[index+1].focus()
}

}

})

})


function setLang(lang){

document.querySelectorAll("[data-ru]").forEach(el=>{

if(lang==="ru"){
el.innerText = el.getAttribute("data-ru")
}

if(lang==="uz"){
el.innerText = el.getAttribute("data-uz")
}

})

}


const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
},{
threshold:0.2
})

document.querySelectorAll("section").forEach(el=>{
observer.observe(el)
})