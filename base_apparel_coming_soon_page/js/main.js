//global settings

let emailInput = document.querySelector('input[type="email"]')
let emailErrorBorderContainer = document.querySelector(".email-info")
let errorIcon = document.querySelector(".email-info > svg")
let errorMessage = document.querySelector(".form-details > span")
let btn = document.querySelector("button")

btn.addEventListener("click", errorState) 

function errorState(event) {
   if(!emailInput.checkValidity()) {
    event.preventDefault()
    emailErrorBorderContainer.classList.add("wrong-info")
    errorIcon.classList.replace("error-icon-hidden", "error-icon-visible")
    errorMessage.classList.replace("error-msg-hidden", "error-msg-visible")    
   }
     
}


