let allInputs = document.querySelectorAll("input")
let inputWrapper = document.querySelectorAll(".input-wrapper")
let allSvgs = document.querySelectorAll("svg")
let confirmationBtn = document.querySelector("button")
let errorText = document.querySelectorAll(".input-info p")

confirmationBtn.addEventListener("click", confirmationForm)

function confirmationForm(event) {
    
    for(let i = 0; i < allInputs.length; i++) {
        if(allInputs[i].value.trim() === "") {
            event.preventDefault()
            inputWrapper[i].classList.add("error-msg")
            allInputs[i].classList.add("error-input")
            allSvgs[i].classList.remove("hidden-svg")
            errorText[i].classList.replace("hidden-error-text", "active-error-text")            
        }  
    }
}
