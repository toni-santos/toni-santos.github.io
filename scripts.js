let className = document.getElementsByClassName("tech-item")
const langsNum = 6
const beginnerLangs = ["technologies-js", "technologies-node"]

window.setInterval(function(){
    for (let i=0; i < langsNum; i++) {
        let div = className.item(i)
        if (beginnerLangs.includes(div.id)){
            div.addEventListener("mouseenter", function(event) {
                div.innerHTML = '<p id="langs-proficiency">Beginner</p>'
            }, false)
            div.addEventListener("mouseleave", function(event) {
                div.innerHTML = ""
            }, false)
        } else {
            div.addEventListener("mouseenter", function(event) {
                div.innerHTML = '<p id="langs-proficiency">Intermediate</p>'
            }, false)
            div.addEventListener("mouseleave", function(event) {
                div.innerHTML = ""
            }, false)
        }
    }    
}, 500);