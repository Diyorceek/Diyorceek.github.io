var img = document.querySelectorAll(".col-lg-10 img")
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var i = 0

next.onclick = function(){
    img[i].classList.remove("active")
    i++
    if(i >= img.length){
        i = 0
    }
    img[i].classList.add("active")
    console.log(i);
} 

function nextslider (){
    img[i].classList.remove("active")
    i++
    if(i >= img.length){
        i = 0
    }
    img[i].classList.add("active")
    console.log(i);
}

setInterval(nextslider, 5000)

window.addEventListener('load', function (e) {
    var text = document.querySelector(".pp")  
    res = text.innerHTML
    text.innerHTML = ""
    var i = 0
    function ress () {
        text.innerHTML = text.innerHTML + res.charAt(i)
        i++
    }
    setInterval(ress, 500)
});