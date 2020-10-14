function openmenu(){
    menu.style.display = "block"
    tampa.style.display = "block"
    menu.classList.add("desce")
    menu.classList.sobe("sobe")
}
function closemenu(){
    setTimeout(function(){
        menu.style.display = "none"
        tampa.style.display = "none"
    }, 500)
    menu.classList.add("sobe")
    menu.classList.remove("desce")
}