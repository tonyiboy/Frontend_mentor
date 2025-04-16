// Select all question blocks
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const icon = question.querySelector("img");

  question.addEventListener("click", () => {
    // Find the answer div (it's the next sibling)
    const answer = question.nextElementSibling;

    // Toggle the answer visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.src = "img/icon-plus.svg";
    } else {
      answer.style.display = "block";
      icon.src = "img/icon-minus.svg";
    }
  });
});
