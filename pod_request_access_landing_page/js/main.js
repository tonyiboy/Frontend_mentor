const button = document.querySelector("#submit-button")
const errorMsg = document.querySelector("#error-msg")
const errorInput = document.querySelector("#email")
const form = document.querySelector("form")

button.addEventListener("click", formValidation)

function formValidation(event) {
  const email = errorInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !emailPattern.test(email)) {
    event.preventDefault();
    errorMsg.classList.remove("hidden")
    form.style.borderColor = "#FB3E3E";
    form.style.borderWidth = "2px";
   }

}


