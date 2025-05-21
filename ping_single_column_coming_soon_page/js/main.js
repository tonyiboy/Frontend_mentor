let btn = document.querySelector("button")
let paragraph = document.querySelector("p")
let input = document.querySelector("input")

btn.addEventListener("click", formValidation) 

function formValidation(event) {
  const email = input.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !emailPattern.test(email)) {
    event.preventDefault();
    paragraph.textContent = email === "" 
      ? "Email is required." 
      : "Please enter a valid email address.";
    paragraph.classList.add("error-msg");
    input.classList.add("error-input-border");
  }
}