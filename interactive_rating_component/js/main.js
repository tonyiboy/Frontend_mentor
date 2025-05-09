// global settings

let btn = document.querySelector("button") //button
let backInformation = document.querySelector(".back-info") //back-info
let frontInformation = document.querySelector(".front-info") //front-info
let numbersResult = document.getElementsByTagName("a")
let myResult = document.querySelector("span")
let numberResult = ""

// numbers settings

for (let i = 0; i < numbersResult.length; i++) {
    numbersResult[i].addEventListener("click", function () {

        // Check if this element already has the selected color
        if (numbersResult[i].style.backgroundColor === "rgb(252, 118, 19)") {
            // If it does, reset the color to default
            numbersResult[i].style.backgroundColor = "";
            numbersResult[i].style.color = "";
            numberResult = ""
        } else {
            // Reset all other elements first
            for (let j = 0; j < numbersResult.length; j++) {
                numbersResult[j].style.backgroundColor = "";
                numbersResult[j].style.color = "";
                numberResult = ""
            }

            // Apply active style to the clicked element
            numbersResult[i].style.backgroundColor = "#FC7613";
            numbersResult[i].style.color = "#1F2225";
            numberResult = numbersResult[i].textContent        
        }

        console.log(numberResult);
    });
}

// button settings
//insert value

btn.addEventListener("click", clickButton)

function clickButton() {
    
    let selected = false

    for(let i = 0; i < numbersResult.length; i++){
        if(numberResult !== ""){
            selected = true
            backInformation.style.display = "flex"
            frontInformation.style.display = "none"
            myResult.textContent = numberResult
        }
    }

    if(selected === false) {
        alert("Please select a number before submitting.")
    }
}
    

