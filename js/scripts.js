//business logic
function hideResults() {
  document.getElementById("mc").setAttribute("class", "hidden");
  document.getElementById("go").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
}

//user interface logic
window.onload = function handleRadio(event) {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const operator = document.querySelector("input[name='operator']:checked").value;
    const operator2 = document.querySelector("input[name='operator2']:checked").value;
    const operator3 = document.querySelector("input[name='operator3']:checked").value;
    if (operator === "yes" && operator2 === "turtle" && operator3 === "dull") {
      document.getElementById("go").removeAttribute("class");
    } else if (operator === "yes" && operator2 === "python" && operator3 === "") {
      document.getElementById("python").removeAttribute("class");
    } else if (operator === "yes" && operator2=== "python" || "turtle" && operator3 === "sharp") {
      document.getElementById("c").removeAttribute("class");
    } else if (operator === "no" && operator2 === "python" || "turtle" && operator3 === "sharp" || "dull") {
      document.getElementById("mc").removeAttribute("class");
    }
  }
}
window.addEventListener("load", function() {
  document.getElementById("language-selector").addEventListener("submit", handleRadio);
});
