let div = document.getElementsByClassName("tech-item")

// div.item thing to replace the functions beneath

div.addEventListener("mouseenter", function(event) {
    div.innerHTML = "Intermediate"
}, false)

div.addEventListener("mouseleave", function(event){
    div.innerHTML = ""
}, false)