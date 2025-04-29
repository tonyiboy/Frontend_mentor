let mySvgs = document.querySelectorAll(".image svg"); 
let extraInfo = document.querySelector(".back-info");

console.log(extraInfo);

mySvgs.forEach(svg => {
    svg.addEventListener("click", changeFooter);
});

function changeFooter() {
    if (extraInfo.style.display === "flex") {
        extraInfo.style.display = "none";
    } else {
        extraInfo.style.display = "flex";
    }
}


